import React, { Component } from 'react';

import ClassNavBar from '../components/Class/components/ClassNavBar';
import TestSectionsPage from '../components/Class/TestSectionsPage';
import DetailSummaryPage from '../components/Class/DetailSummaryPage';

import sampleClass from '../components/Class/utils/sampleClass';

class Classes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'summary',
    }
  }

  onSetActivePage = (active) => this.setState({ active })

  renderCurrentPage = () => {
    const { active } = this.state;
    if (active === 'summary') {
      return <DetailSummaryPage currentClass={sampleClass} />
    }
    if (active === 'testSections') {
      return <TestSectionsPage />;
    }
    return null;
  }

  render() {
    const { active } = this.state;
    return (
      <React.Fragment>
        <main id="main" role="main">
          <div className="main-holder grey lighten-5 switcher-section">
            <div className="title-row card-panel">
              <div className="mobile-header">
                <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              </div>
              <nav className="breadcrumb-holder">
                <div className="nav-wrapper ">
                  <a href="#!" className="breadcrumb">&lt; Classes</a>
                </div>
              </nav>
              <h2 className="h1 white-text">
                <span className="heading-holder">
                  <i className="icon-members"></i>
                  <span className="heading-block">Some Class in June</span>
                </span>
              </h2>
              <ClassNavBar onSetActivePage={this.onSetActivePage} active={active} />
            </div>
            {this.renderCurrentPage()}
          </div>
          <div className="add-btn-block dropdown-small">
            <a href="#" className="dropdown-trigger waves-effect waves-teal btn add-btn" data-target='dropdown_assign_selected'><i className="material-icons">add</i> Assign Test Section</a>
            <ul id='dropdown_assign_selected' className='dropdown-content dropdown-small'>
              <li><a href="#">From Saved</a></li>
              <li><a href="#">Create New</a></li>
            </ul>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Classes;
