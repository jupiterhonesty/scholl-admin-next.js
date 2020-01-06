import React, { Component } from 'react';
import update from 'immutability-helper';
import { StickyContainer, Sticky } from 'react-sticky';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { fetchStudents, createStudent, deleteStudent } from '../components/Student/index/actions';
import { makeSelectStudents } from '../components/Student/index/selectors';
import StudentCard from '../components/Student/components/StudentCard';
// import sampleStudentList from '../components/Student/utils/sampleStudentList';
import FilterSection from '../components/Student/ListPage/Components/FilterSection';
import StudentModal from '../components/Student/components/StudentModal';
import IndividualStudentPage from '../components/Student/IndividualStudentPage';
import LocationModal from '../components/Location/components/LocationModal';

import { studentFirstNameAscending, studentFirstNameDescending, studentLastNameAscending, studentLastNameDescending } from '../components/utils/sortFunctions';

// eslint-disable-next-line prefer-template
const idGenerator = () => subIdGenerator() + subIdGenerator() + '-' + subIdGenerator() + '-' + subIdGenerator() + '-' +
  subIdGenerator() + '-' + subIdGenerator() + subIdGenerator() + subIdGenerator();

const subIdGenerator = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const locationMap = {
  Austin: 'Austin',
  Miami: 'Miami',
  option1: 'Option 1',
  option2: 'Option 2',
};

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: null,
      students: this.props.students,
      studentModalOpen: false,
      locationModalOpen: false,
      dropdownIsOpen: false,
      dropdownIndex: null,
      sort: '',
      nameFilter: '',
      location: '',
      newStudent: {
        active: false,
        studentInformation: {
          firstName: "",
          lastName: "",
        },
        contactInformation: {
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
        },
        emailAddress: {
          email: "",
        },
        location: {
          locations: [],
        },
      },
    };
  }

  componentDidMount = () => {
    const { onFetchStudents } = this.props;
    onFetchStudents();
  };

  componentDidUpdate = prevProps => {
    const { students } = this.props;
    const { students: prevStudents } = prevProps;
    if (
      (this.state.students.length === 0 && students.length > 0) ||
      students.length !== prevStudents.length
    ) {
      this.setState({ students });
    }
  };

  componentDidUpdate() {
    const { students: studentState } = this.state;
    const { students } = this.props;
    if (students.length && studentState.length === 0) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ students });
    }
  }

  onOpenStudentModal = () => this.setState({ studentModalOpen: true });
  onCloseStudentModal = () => this.setState({ studentModalOpen: false });
  onOpenLocationModal = () => this.setState({ locationModalOpen: true });
  onCloseLocationModal = () => this.setState({ locationModalOpen: false });

  onSetSort = (sort) => this.setState({ sort });
  onSetFilteredState = (nameFilter) => this.setState({ nameFilter });
  onUnsetFilteredState = () => this.setState({ nameFilter: '' });

  onSetFilteredLocationState = (location) => this.setState({ location });
  onUnsetFilteredLocationState = () => this.setState({ location: '' });

  // TODO add a toas or some notification that a student has been saved
  onSaveNewStudent = async () => {
    const { newStudent: previousStudentState } = this.state;

    // dispatch add student action
    const { onCreateStudent } = this.props;
    onCreateStudent(previousStudentState);

    const newStudent = update(previousStudentState, {
      $set: {
        active: false,
        studentInformation: {
          firstName: "",
          lastName: "",
          gender: "",
        },
        contactInformation: {
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
        },
        emailAddress: {
          email: "",
        },
        location: {
          locations: [],
        },
      },
    });
    this.setState({ newStudent });
    // eslint-disable-next-line no-console
    console.warn("do something with the new student info");
    this.onCloseStudentModal();
  };

  onDeleteNewStudent = () => {
    const { newStudent: previousStudentState } = this.state;
    const newStudent = update(previousStudentState, {
      $set:
       { active: false,
         studentInformation: {
           firstName: '',
           lastName: '',
           gender: '',
         },
         contactInformation: {
           phone: '',
           addressLine1: '',
           addressLine2: '',
           city: '',
           state: '',
           zipCode: '',
         },
         emailAddress: {
           email: '',
         },
         location: {
           locations: [],
         },
       } }
    );
    this.setState({ newStudent });
  };

  onRemoveLocation = (index) => {
    const { newStudent: previousStudentState } = this.state;
    const { location: { locations } } = this.state.newStudent;
    const newLocationsArray = this.arrayItemRemover(locations, locations[index]);
    const newStudent = update(previousStudentState, {
      location: { $set: { locations: newLocationsArray } },
    });
    this.setState({ newStudent });
  };

  onFilterByName = () => {
    const { students, nameFilter } = this.state;
    return students.reduce((finalArr, currentStudent) => {
      const { lastName, firstName } = currentStudent;
      const studentString = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
      if (studentString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentStudent) === -1) {
        finalArr.push(currentStudent);
      }
      return finalArr;
    }, []);
  };

  onHandleStudentCard = index => {
    const { students } = this.state;
    this.setState({ selectedStudent: students[index] });
  };

  onRedirectToStudentPage = event => {
    event.preventDefault();
    this.setState({ selectedStudent: null });
  };

  onDeleteStudent = index => {
    const { onDeleteStudent } = this.props;
    const { students } = this.state;
    // Dispatch deleteStudent
    const student_id = students[index].id;
    onDeleteStudent(student_id);
    const newStudentArray = this.arrayItemRemover(students, students[index]);
    this.setState({ students: newStudentArray });
    this.onCloseDropdown();
  };

  onCloneStudent = index => {
    const { students } = this.state;
    const newStudent = update(students[index], {
      id: { $set: idGenerator() },
    });
    this.setState(prevState => {
      prevState.students.push(newStudent);
      return { students: prevState.students };
    });
  };

  onSaveStudentChanges = updatedStudent => {
    const { students: originalStudents } = this.state;
    const { active, studentInformation, contactInformation, emailAddress, location } = updatedStudent;
    const studentToUpdate = originalStudents.filter(student => student.id === updatedStudent.id)[0];
    const updatedStudentIndex = originalStudents.indexOf(studentToUpdate);
    const students = update(originalStudents, {
      [updatedStudentIndex]: {
        $merge: {
          active, studentInformation, contactInformation, emailAddress, location,
        },
      },
    });
    this.setState({ students });
  };

  onSetDropdown = dropdownIndex =>
    this.setState({ dropdownIsOpen: true, dropdownIndex });
  onCloseDropdown = () =>
    this.setState({ dropdownIsOpen: false, dropdownIndex: null });

  // eslint-disable-next-line consistent-return
  onSortStudents = students => {
    const { sort } = this.state;
    switch (sort) {
      case 'lastNameDescending':
        return students.sort(studentLastNameDescending);
      case 'lastNameAscending':
        return students.sort(studentLastNameAscending);
      case 'firstNameDescending':
        return students.sort(studentFirstNameDescending);
      case 'firstNameAscending':
        return students.sort(studentFirstNameAscending);
      default:
        break;
    }
  }

  getMappableStudents = () => {
    const { nameFilter, location, sort, students } = this.state;
    let mappableStudents = students;
    if (nameFilter.length) {
      mappableStudents = this.onFilterByName();
    }
    if (location.length) {
      mappableStudents = this.onFilterByLocation();
    }
    if (sort) {
      return this.onSortStudents(mappableStudents);
    }
    return mappableStudents;
  }

  onFilterByLocation = () => {
    const { location: locationFilter, students: allStudents } = this.state;
    let students = allStudents;
    students = students.filter(student => {
      const locationNames = student.location.locations.reduce((finalArr, currentLocation) => {
        finalArr.push(currentLocation.locationName);
        return finalArr;
      }, []);
      if (locationNames.indexOf(locationMap[locationFilter]) !== -1) {
        return true;
      }
      return false;
    });
    return students;
  }

  onFilterByName = () => {
    const { students, nameFilter } = this.state;
    return students.reduce((finalArr, currentStudent) => {
      const { studentInformation: { firstName, lastName } } = currentStudent;
      const studentString = `${firstName}${lastName}`.replace(/\s/g, "").toLowerCase();
      if (studentString.indexOf(nameFilter) !== -1 && finalArr.indexOf(currentStudent) === -1) {
        finalArr.push(currentStudent);
      }
      return finalArr;
    }, []);
  }

  arrayItemRemover = (array, value) => array.filter((student) => student !== value)

  handleChange = (event, name, section) => {
    const { newStudent: previousStudentState } = this.state;
    const value = event.target ? event.target.value : event;
    const updatedStudent = update(previousStudentState, {
      [section]: { $merge: { [name]: value } },
    });
    this.setState({ newStudent: updatedStudent });
  };

  mapStudents = () => this.getMappableStudents().map((student, index) => (
    <StudentCard
      student={student}
      index={index}
      id={student.id}
      key={student.id}
      dropdownIsOpen={this.state.dropdownIsOpen}
      dropdownIndex={this.state.dropdownIndex}
      onSetDropdown={this.onSetDropdown}
      onCloseDropdown={this.onCloseDropdown}
      onHandleStudentCard={() => this.onHandleStudentCard(index)}
      onDeleteStudent={() => this.onDeleteStudent(index)}
      onCloneStudent={() => this.onCloneStudent(index, student.id)}
      onSaveStudentChanges={this.onSaveStudentChanges}
    />
  ));

  render() {
    const { studentModalOpen, selectedStudent } = this.state;
    // const { students: students2 } = this.props;
    return (
      <main id="main" role="main">
        <div className="main-holder grey lighten-5">
          <StickyContainer>
            {!selectedStudent && (
              <React.Fragment>
                <Sticky>
                  {({ style }) => (

                    <div className="title-row card-panel" style={{ ...style, zIndex: 1999 }}>
                      <div className="mobile-header">
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                      </div>
                      <h2 className="h1 white-text">
                        <span className="heading-holder">
                          <i className="icon-student" />
                          <span className="heading-block">Students</span>
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
                  handleFilterClick={this.handleFilterClick}
                  onFilterByName={this.onFilterByName}
                />
                <div className="content-section">
                  <div className="row d-flex-content">
                    {this.mapStudents()}
                  </div>
                </div>
                <a href="#" className="waves-effect waves-teal btn add-btn modal-trigger" onClick={this.onOpenStudentModal}><i className="material-icons">add</i>New Student</a>
                <StudentModal
                  open={studentModalOpen}
                  onClose={this.onCloseStudentModal}
                  handleChange={this.handleChange}
                  state={this.state.newStudent}
                  onSave={this.onSaveNewStudent}
                  onOpenLocationModal={this.onOpenLocationModal}
                  onRemoveLocation={this.onRemoveLocation}
                  onDeleteNewStudent={this.onDeleteNewStudent}
                />
                <LocationModal
                  open={this.state.locationModalOpen}
                  onClose={this.onCloseLocationModal}
                  handleLocationsChange={(selectedLocations) => this.handleChange(selectedLocations, 'locations', 'location')}
                />
              </React.Fragment>
            )}
            {selectedStudent && (
              <IndividualStudentPage student={selectedStudent} onRedirectToStudentPage={this.onRedirectToStudentPage} />
            )}
          </StickyContainer>
        </div>
      </main>
    );
  }
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  onFetchStudents: PropTypes.func.isRequired,
  onCreateStudent: PropTypes.func.isRequired,
  onDeleteStudent: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  students: makeSelectStudents(),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteStudent: (id) => dispatch(deleteStudent(id)),
  onFetchStudents: () => dispatch(fetchStudents()),
  onCreateStudent: (student) => dispatch(createStudent(student)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Students);
