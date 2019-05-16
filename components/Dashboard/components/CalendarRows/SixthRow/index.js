/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import getCalendarCellClassName from '../../../utils/getCalendarCellClassName';

const sampleConfig = [
  {
    dayDate: 'Sun, Jan 31st',
    calDate: '31',
    activeDateKey: 'row-6-column-1',
    inMonth: true,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Mon, Feb 1st',
    calDate: '1',
    activeDateKey: 'row-6-column-2',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Tue, Feb 2nd',
    calDate: '2',
    activeDateKey: 'row-6-column-3',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Wed, Feb 3rd',
    calDate: '3',
    activeDateKey: 'row-6-column-4',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Thu, Feb 4th',
    calDate: '4',
    activeDateKey: 'row-6-column-5',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Fri, Feb 5th',
    calDate: '5',
    activeDateKey: 'row-6-column-6',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
  {
    dayDate: 'Sat, Feb 6th',
    calDate: '6',
    activeDateKey: 'row-6-column-7',
    inMonth: false,
    sessions: [],
    lessons: [],
    worksheets: [],
    testSections: [],
  },
];

class SixthRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowDates: sampleConfig,
    };
  }

  mapRowDates = () => this.state.rowDates.map(rowDate => {
    const { activeDate, addDropdownOpen, deleteDropdownOpen, onSetActiveDate, onToggleAddDropdown, onToggleDeleteDropdown, activeColumn } = this.props;
    const { dayDate, calDate, activeDateKey, inMonth, sessions, lessons, worksheets, testSections } = rowDate;
    const hasEvents = sessions.length > 0 || lessons.length > 0 || worksheets.length > 0 || testSections.length > 0;
    const inActiveColumn = activeDateKey[13] === activeColumn;
    const isActiveDate = activeDate === activeDateKey;
    if (!inMonth) {
      return (
        <td className="cal-cell1 cal-cell cal-day-outmonth" key={activeDateKey}>
          <div className="cal-month-day">
            <span className="day-date">{dayDate}</span>
            <span className="cal-date">{calDate}</span>
          </div>
        </td>
      )
    }
    return (
      <td key={activeDateKey} className={getCalendarCellClassName(hasEvents, inActiveColumn)} onClick={() => onSetActiveDate(activeDateKey)}>
        <div className={activeDateKey.includes('column-7') || activeDateKey.includes('column-1') ? 'cal-month-day cal-day-inmonth cal-day-weekend' : 'cal-month-day cal-day-inmonth'}>
          <span className="day-date">{dayDate}</span>
          <span className="cal-date">{calDate}</span>
          <ul className="day-collapsible collapsible">
          <li className={isActiveDate ? 'collapsible-holder active' : 'collapsible-holder'} style={{ transform: 'none' }}>
              <div className="collapsible-header" style={{ display: inActiveColumn && isActiveDate ? 'none' : 'block'}}>
                <span className="fake-close"><span className="icon-close-thin"></span></span>
                <If condition={hasEvents}>
                  <ul className="events-list events-list-short">
                    <If condition={sessions.length}>
                      <li className="event-frame event-title">
                        <span className="event-title-box">Session {sessions.length}</span>
                      </li>
                    </If>
                    <If condition={lessons.length}>
                      <li className="event-frame">
                        <span className="event event-lesson-box"> {lessons.length} <span className="event-text">Lesson{lessons.length > 1 && 's'}</span></span>
                      </li>
                    </If>
                    <If condition={worksheets.length}>
                      <li className="event-frame">
                        <span className="event event-worksheet-box">{worksheets.length} <span className="event-text">Worksheet{worksheets.length > 1 && 's'}</span></span>
                      </li>
                    </If>
                    <If condition={testSections.length}>
                      <li className="event-frame">
                        <span className="event event-test-box">{testSections.length} <span className="event-text">Test Section{testSections.length > 1 && 's'}</span></span>
                      </li>
                    </If>
                  </ul>
                </If>
              </div>
              <div className="collapsible-body" style={{ opacity: inActiveColumn && isActiveDate ? '1' : '0', visibility: inActiveColumn ? 'visible' : 'hidden' }}>
                <If condition={hasEvents}>
                  <ul className="events-list">
                    {sessions.map(session => (
                      <li className="event-frame" key={session.title}>
                        <span className="event-title-box">{session.title}</span>
                      </li>
                    ))}
                    {lessons.map(lesson => (
                      <li className="event-frame" key={lesson.title}>
                        {lesson.completed && <span className="event-check lesson-check"><i className="icon-check02"></i></span>}
                        <span className="event event-lesson-box">{lesson.title}</span>
                      </li>
                    ))}
                    {worksheets.map(worksheet => (
                      <li className="event-frame" key={worksheet.title}>
                        {worksheet.completed && <span className="event-check worksheet-check"><i className="icon-check02"></i></span>}
                        <span className="event event-worksheet-box">{worksheet.title}</span>
                      </li>
                    ))}
                    {testSections.map(testSection => (
                      <li className="event-frame" key={testSection.title}>
                        <span className="event event-test-box">{testSection.title}</span>
                      </li>
                    ))}
                  </ul>
                </If>
                <div className="day-footer">
                  <ul className="links-list">
                    <li>
                      <a
                        href="#"
                        data-target='dropdown_day_240119_add'
                        onClick={onToggleAddDropdown}
                        className="link-add dropdown-trigger waves-effect waves-teal"
                      >
                        Add
                      </a>
                      <ul
                        id='dropdown_day_240119_add'
                        className='dropdown-content'
                        style={{ display: addDropdownOpen ? 'block' : 'none', opacity: addDropdownOpen ? '100' : '0' }}
                      >
                        <li><a href="#modal_add_section" className="modal-trigger">Session</a></li>
                        <li><a href="#modal_add_lesson" className="modal-trigger">Lesson</a></li>
                        <li><a href="#modal_add_worksheet" className="modal-trigger">Worksheet</a></li>
                        <li><a href="#modal_add_test_section" className="modal-trigger">Test Section</a></li>
                        <li><a href="#modal_add_simulated_sat" className="modal-trigger">Simulated SAT</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-target='dropdown_day_240119_delete'
                        onClick={onToggleDeleteDropdown}
                        className="link-delete dropdown-trigger waves-effect waves-teal"
                      >
                        Delete
                      </a>
                      <ul
                        id='dropdown_day_240119_delete'
                        className='dropdown-content'
                        style={{ display: deleteDropdownOpen ? 'block' : 'none', opacity: deleteDropdownOpen ? '100' : '0' }}
                      >
                        <li><a href="#modal_edit_delete_section" className="modal-trigger">Session</a></li>
                        <li><a href="#modal_edit_delete_lesson" className="modal-trigger">Lesson</a></li>
                        <li><a href="#modal_edit_delete_worksheet" className="modal-trigger">Worksheet</a></li>
                        <li><a href="#modal_edit_delete_test_section" className="modal-trigger">Test Section</a></li>
                        <li><a href="#!" className="disabled">Simulated SAT</a></li>
                        <li><a href="#!" className="disabled">Target Test</a></li>
                        <li><a href="#!">All</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </td>
    )
  })

  render() {
    return (
      <tr className="cal-row-fluid">
        {this.mapRowDates()}
      </tr>
    );
  }
}

SixthRow.propTypes = {
  activeDate: PropTypes.string,
  activeColumn: PropTypes.string,
  onSetActiveDate: PropTypes.func.isRequired,
  addDropdownOpen: PropTypes.bool.isRequired,
  deleteDropdownOpen: PropTypes.bool.isRequired,
  onToggleAddDropdown: PropTypes.func.isRequired,
  onToggleDeleteDropdown: PropTypes.func.isRequired,
}

export default SixthRow;
