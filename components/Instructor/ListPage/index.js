import React from 'react';
// import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Sticky, StickyContainer } from 'react-sticky';
import InstructorCard from './components/InstructorCard';
import FilterSection from './components/FilterSection';
import NewInstructorModal from './components/NewInstructorModal';

// import { saveNewSuccess as savePracticeTestSuccess, saveChangesSuccess, saveNewError as savePracticeTestError } from '../../utils/fieldValidation';
import { firstNameAscending, firstNameDescending, lastNameAscending, lastNameDescending } from '../../utils/sortFunctions';

import {
  fetchInstructorsApi,
  createNewInstructorApi,
} from '../index/api';


class InstructorListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorModalOpen: false,
      instructors: [],
      dropdownIndex: null,
      dropdownIsOpen: false,
      instructorsAreFiltered: false,
      filterName: '',
      filterLocation: '',
      sort: '',
    };
  }

  componentDidMount = async() => {
    const {formattedInstructors:instructors} = await fetchInstructorsApi();
    this.setState({
      instructors,
    })
  }

  onSetDropdown = (dropdownIndex) => this.setState({ dropdownIsOpen: true, dropdownIndex });
  onCloseDropdown = () => this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  onOpenInstructorModal = () => this.setState({ instructorModalOpen: true });
  onCloseInstructorModal = () => this.setState({ instructorModalOpen: false });

  onAddNewInstructor = (newInstructor) => this.setState(({ instructors }) => ({ instructors: [...instructors, newInstructor] }))

  onDeleteInstructor = (deletedInstructor) => {
    const updatedState = update(this.state, {
      instructors: unfilteredInstructors => unfilteredInstructors.filter(instructor => instructor.id !== deletedInstructor.id),
    });
    this.setState({ instructors: updatedState.instructors });
  }

  onCloneInstructor = (instructor) => {
    const cloneIndex = this.state.instructors.indexOf(instructor);
    const newId = this.state.instructors.length + 1;
    const instructors = update(this.state.instructors, {
      $splice: [[cloneIndex, 0, instructor]],
    });
    this.setState({ instructors }, this.onCloseDropdown);
    const {accountInfo:{firstName,lastName,email,gender},contactInfo:{state,phone,streetAddress,city,zip}} = instructor;
    const formattedBody = {
        id:newId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
        state: state,
        locations: [],
        phone: phone,
        address: streetAddress,
        city: city,
        zip: zip
      };
      this.onCreateNewInstructorApi(formattedBody);
  }

  onCreateNewInstructorApi = async(postBody) => {
    await createNewInstructorApi(postBody);
  }

  onSaveInstructorChanges = (updatedInstructor) => {
    const { instructors: originalInstructors } = this.state;
    const instructorToUpdate = originalInstructors.filter(instructor => instructor.id === updatedInstructor.id)[0];
    const updatedInstructorIndex = originalInstructors.indexOf(instructorToUpdate);
    const instructors = update(originalInstructors, {
      $splice: [[updatedInstructorIndex, 1, updatedInstructor]],
    });
    // saveChangesSuccess();
    this.setState({ instructors });
  }

  onSetFilteredState = (filterName) => this.setState({ instructorsAreFiltered: true, filterName })
  onUnsetFilteredState = () => this.setState({ instructorsAreFiltered: false, filterName: '' })

  onSetFilteredLocationState = (filterLocation) => this.setState({ instructorsAreFiltered: true, filterLocation })
  onUnsetFilteredLocationState = () => this.setState({ filterLocation: '' }, this.checkForFilteredState)

  onSetSort = (sort) => this.setState({ sort })

  onFilterByName = () => {
    const { instructors, filterName } = this.state;
    return instructors.reduce((finalArr, currentInstructor) => {
      const { accountInfo: { lastName, firstName } } = currentInstructor;
      const instructorString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
      if (instructorString.indexOf(filterName) !== -1 && finalArr.indexOf(currentInstructor) === -1) {
        finalArr.push(currentInstructor);
      }
      return finalArr;
    }, []);
  }

  onFilterByLocation = (preFilteredInstructors = []) => {
    const { instructors: allInstructors, filterLocation } = this.state;
    let instructors;
    if (preFilteredInstructors.length) {
      instructors = preFilteredInstructors;
    } else {
      instructors = allInstructors;
    }
    return instructors.reduce((finalArr, currentInstructor) => {
      const { contactInfo: { city } } = currentInstructor;
      if (city === filterLocation && finalArr.indexOf(currentInstructor) === -1) {
        finalArr.push(currentInstructor);
      }
      return finalArr;
    }, []);
  }

  // eslint-disable-next-line consistent-return
  onSortInstructors = (instructors) => {
    const { sort } = this.state;
    switch (sort) {
      case 'firstNameAscending':
        return instructors.sort(firstNameAscending);
      case 'firstNameDescending':
        return instructors.sort(firstNameDescending);
      case 'lastNameAscending':
        return instructors.sort(lastNameAscending);
      case 'lastNameDescending':
        return instructors.sort(lastNameDescending);
      default:
        break;
    }
  }

  getMappableInstructors = () => {
    const { filterName, filterLocation, instructors: allInstructors, sort } = this.state;
    let instructors;
    if (filterName.length && !filterLocation.length) {
      instructors = this.onFilterByName();
    } else if (!filterName.length && filterLocation.length) {
      instructors = this.onFilterByLocation();
    } else if (filterName.length && filterLocation.length) {
      const filteredByName = this.onFilterByName();
      instructors = this.onFilterByLocation(filteredByName);
    } else {
      instructors = allInstructors;
    }
    if (sort) {
      return this.onSortInstructors(instructors);
    }
    return instructors;
  }

  checkForFilteredState = () => {
    const { filterName, filterLocation } = this.state;
    if (!filterName.length && !filterLocation.length) {
      this.setState({ instructorsAreFiltered: false });
    }
  }

  mapInstructors = () => {
    const instructors = this.getMappableInstructors();
    return instructors.map((instructor, index) => (
      <InstructorCard
        index={index}
        key={instructor.id}
        instructor={instructor}
        dropdownIsOpen={this.state.dropdownIsOpen}
        onSetDropdown={this.onSetDropdown}
        onCloseDropdown={this.onCloseDropdown}
        dropdownIndex={this.state.dropdownIndex}
        onDeleteInstructor={this.onDeleteInstructor}
        onCloneInstructor={this.onCloneInstructor}
        onSaveInstructorChanges={this.onSaveInstructorChanges}
      />
    ));
  }

  render() {
    const { instructorModalOpen } = this.state;
    return (
      <React.Fragment>
        <NewInstructorModal
          open={instructorModalOpen}
          onClose={this.onCloseInstructorModal}
          onAddNewInstructor={this.onAddNewInstructor}
        />
        <div className="main-holder grey lighten-5">
          <StickyContainer>
          <Sticky>
        {({ style }) => (
          <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>
            <div className="mobile-header">
              <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            </div>
            <h2 className="h1 white-text">
              <span className="heading-holder">
                <i className="icon-instructors"></i>
                <span className="heading-block">Instructors</span>
              </span>
            </h2>
          </div>
        )}
        </Sticky>
          <FilterSection
            onSetSort={this.onSetSort}
            onSetFilteredState={this.onSetFilteredState}
            onUnsetFilteredState={this.onUnsetFilteredState}
            onSetFilteredLocationState={this.onSetFilteredLocationState}
            onUnsetFilteredLocationState={this.onUnsetFilteredLocationState}
          />
          <div className="content-section">
            <div className="row d-flex-content">
              {this.mapInstructors()}
            </div>
          </div>
          </StickyContainer>
        </div>
        <a
          href="#"
          onClick={this.onOpenInstructorModal}
          className="waves-effect waves-teal btn add-btn"
        >
          <i className="material-icons">add</i>
          New Location
        </a>
      </React.Fragment>
    );
  }
}

export default InstructorListPage;
