/* eslint-disable */
// used vars and indentifers not camelcase
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import { Doughnut } from "react-chartjs-2";
import ClickOffComponentWrapper from "../../../../../../ClickOffComponentWrapper";
import moment from 'moment'
// RENDERING UTILS
import {
  getProblemCompletionStatusColor,
  getLessonActivityStatus,
  renderLessonIcon,
  renderDropdownOptions,
  renderProblemCount,
  renderAlerts,
  statusColorMap,
  chartColorMap,
  gradeColorMap,
} from "./utils";
import Checkbox from "./components/Checkbox";
import { setIsVisibleTopBar, setActiveLesson, setOpenAnswerSheetStatus } from "../../../../../index/actions";
import {makeSelectSubjects,makeSelectUnitFilterOptions} from '../../../../../index/selectors'


const data = (current, target, status) => ({
  datasets: [
    {
      data: [current, target - current],
      backgroundColor: [chartColorMap[status], "#eaeaea"]
    }
  ]
});

const LessonCard = props => {
  // PROPS
  const {
    lesson,
    lesson: {
      id,
      name,
      drill_page: drillPage,
      practice_page: practicePage,
      starting_page: startingPage,
      ending_page: endingPage,
      status,
      time_estimate: timeEstimate,
      subject_id: subjectId,
      unit_id: unitId,
      lesson_problems: lessonProblems,
      scoreStatus,
      score,
      assigned,
      problems = [],
      passage,
      dueDate,
      completionDate,
      challenge_page,
      practice_page,
      lesson_problems,
      due_date,
      completed_at,
      assignment_date,
      scoring = ""
    },
    onOpenModal,
    onCloseDropdown,
    handleRescheduleModalOpen,
    handleResetLesson
  } = props;
  const dueAt = due_date || dueDate
  const completedAt = completed_at || completionDate
  // STATE
  const [dropdownIsOpen, toggleDropdown] = useState(false);

  const onOpenDetailModal = async (e) => {
    e.preventDefault()
    const { onSetIsVisibleTopbar, onSetActiveLesson, onSetOpenAnswerSheetStatus, lesson } = props;
    if (lesson.sections && lesson.sections.length !== 0 || lesson.problems && lesson.problems.length !== 0) {
      onSetIsVisibleTopbar(false);
      onSetActiveLesson(lesson);
      onSetOpenAnswerSheetStatus(true)
    }
  }
  const onSetDropdown = () => toggleDropdown(!dropdownIsOpen);

  const onReschedule = (assignDate, assignTime, dueAt, dueTime) => {
    // eslint-disable-next-line no-console
    console.warn("Stubbed out date functionality", assignDate, assignTime, dueAt, dueTime);
  };

  const onChecked = cardId => {
    props.onAddCheckedLesson(cardId, props.uniqueId);
  };

  const onUnChecked = cardId => {
    props.onRemoveCheckedLesson(cardId, props.uniqueId);
  };

  const handleAssignLesson = () => {
    onOpenModal();
    props.onAddCheckedLesson(props.cardId);
  };

  const getUnitName = () => {
    // Get the unit name of the lesson
    if (lesson.units) {
      return lesson.units.name
    }
    const lessonUnit = props.units.filter(unit => unit.value === unitId)
    return (lessonUnit[0] ? lessonUnit[0].label : '') 
  }

  const graphData = () => {
    // Determines the graph progress of a completed or started lesson
    const {type} = lesson;
    if (status === 'COMPLETED') {

      return data(
        scoring.correct_count,
        scoring.question_count,
        scoring.grade ? scoring.grade : "POOR"
      )

    } else if (status === 'STARTED' && type === 'drill') {

      const completedProblems = lesson.problems.filter(problem => problem.answered).length
      return data(completedProblems, lesson.problems.length, status)

    } else if (status === 'STARTED' && type === 'module') {

      const completedSections = lesson.sections.filter(section => section.status === 'COMPLETED').length
      return data(completedSections, lesson.sections.length, status)

    }

    return data(0, 1, "ASSIGNED")
  }

  if (lesson.type === "reading" && status==="COMPLETED") console.log('log: module', lesson)
  return (
    <React.Fragment>
      <div className="card-main-col col s12 m8 l7 xl5">
        <div
          className={getLessonActivityStatus(props.lesson.lesson_id ? "assigned" : "notassigned")}
        >
          <div className="card-panel">
            <div className="card-panel-row row">
              <div className="icon-col col s2">
                <i
                  className={renderLessonIcon(
                    lesson.subjects ? lesson.subjects.name : props.subjects[subjectId]
                  )}
                ></i>
              </div>
              <div className="col s9">
                <div className="card-panel-text center-left">
                  <div className="text-small">
                    {getUnitName()}
                  </div>
                  <div className="text-large">
                    <a href="#" onClick={(e) => onOpenDetailModal(e)}>
                      {lesson.name}
                    </a>
                  </div>
                  <div className="text-small">
                    Subject: {lesson.subjects ? lesson.subjects.name : props.subjects[subjectId]}
                  </div>
                </div>
              </div>
              <div className="col s1 right-align">
                <div className="row icons-row">
                  <div className="dropdown-block col">
                    <a
                      className="dropdown-trigger btn"
                      href="#"
                      data-target="dropdown01"
                      onClick={(e) => {
                        e.preventDefault();
                        onSetDropdown(dropdownIsOpen);
                      }}
                    >
                      <i className="material-icons dots-icon">more_vert</i>
                    </a>
                    <If condition={dropdownIsOpen}>
                      <ClickOffComponentWrapper onOuterClick={() => onSetDropdown(dropdownIsOpen)}>
                        <ul
                          id="dropdown01"
                          className="dropdown-content dropdown-wide"
                          style={{
                            display: "block",
                            opacity: "1",
                            transform: "scaleX(1) scaleY(1)",
                          }}
                        >
                          {renderDropdownOptions(
                            status,
                            handleAssignLesson,
                            handleRescheduleModalOpen,
                            props.handleUnassignLesson,
                            handleResetLesson,
                            [lesson.id]
                          )}
                        </ul>
                      </ClickOffComponentWrapper>
                    </If>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="d-flex sameheight-all row mb-0">
              <div className="col s6">
                <div className="chart-container">
                  <div className="chart-holder" style={{ width: "140px", height: "95px" }}>
                    <Choose>
                      <When condition={lesson.type !== "reading"}>
                        <Doughnut
                          data={
                            graphData()
                          }
                          options={{
                            circumference: Math.PI,
                            rotation: Math.PI,
                            cutoutPercentage: 60,
                            tooltips: false,
                          }}
                        />
                        {lesson.type === 'drill' && renderProblemCount(
                          status,
                          scoring.grade ? scoring.grade : "POOR",
                          scoring.percentage_correct,
                          problems.length,
                          lesson.problems.filter(problem => problem.answered).length
                        )}
                        {lesson.type === 'module' && renderProblemCount(
                          status,
                          scoring.grade ? scoring.grade : "POOR",
                          scoring.percentage_correct,
                          lesson.sections.length,
                          lesson.sections.filter(section => section.status === 'COMPLETED').length
                        )}
                      </When>
                      <Otherwise>
                        <p style={{ paddingTop: "25%", fontWeight: "bold" }}>
                          No Scoring Available For Reading Lessons.
                        </p>
                      </Otherwise>
                    </Choose>
                  </div>

                  <div className="chart-row">
                    <div className="chart-col chart-start"></div>
                    <div className="chart-col chart-end">
                      <span className="amount" style={{ color: chartColorMap[scoring.grade || 'POOR'] }}>
                        <Choose>
                          <When condition={status === "COMPLETED" && (lesson.type === "drill" || lesson.type === 'module')}>
                            {scoring.correct_count} of {scoring.question_count}
                          </When>
                        </Choose>
                      </span>
                    </div>
                  </div>
                  <div className="chart-description" style={{ marginTop: "10px" }}>
                    <dl className="dl-horizontal">
                      <dt>Time Est:</dt>
                      <dd>{timeEstimate ? `${timeEstimate} mins` : "None"}</dd>
                    </dl>
                    <Choose>
                      <When
                        condition={lesson.type === "reading" || lesson.type === "module"}
                      ></When>
                      <When condition={lesson.type === "drill"}>
                        <dl className="dl-horizontal">
                          <dt>Problems:</dt>
                          <dd>{lesson.problems.length}</dd>
                        </dl>
                      </When>
                      <Otherwise>
                        <dl className="dl-horizontal">
                          <dt>Problems:</dt>
                          <dd>{lessonProblems && lessonProblems.length}</dd>
                        </dl>
                      </Otherwise>
                    </Choose>
                  </div>
                </div>
              </div>
              <div
                className="col s6 d-flex align-items-center left-align"
                style={{ height: "100px" }}
              >
                <div className="dates">
                  <dl className="row">
                    {assignment_date && (
                      <dt /*style={{ float: "right", clear: "both" }}*/>
                        Available:{" "}
                        <time dateTime={assignment_date}>
                          {moment(assignment_date).format("MM/DD/YYYY")}
                        </time>
                      </dt>
                    )}

                    {dueAt && assignment_date ? (
                      <dt /*style={{ float: "right", clear: "both" }}*/>
                        Due: <time dateTime={dueAt}>{moment(dueAt).format("MM/DD/YYYY")}</time>
                      </dt>
                    ) : assignment_date ? (
                      <dt>No Due Date</dt>
                    ) : (
                      ""
                    )}

                    {completedAt ? (
                      <dt /*style={{ float: "right", clear: "both" }}*/>
                        Completed:{" "}
                        <time dateTime={completedAt}>
                          {moment(completedAt).format("MM/DD/YYYY")}
                        </time>
                      </dt>
                    ) : (
                      ""
                    )}
                  </dl>
                </div>

                <div className="align-self-end">
                  <Choose>
                    {/* If this is an assigned student lesson */}
                    <When condition={lesson.lesson_id}>
                      <Choose>
                        <When condition={status === "COMPLETED" && lesson.type === "reading"}>
                          <span
                            style={{
                              backgroundColor: `#74b287`,
                            }}
                            className={`badge badge-rounded-md white-text`}
                          >
                            {status}
                          </span>
                        </When>
                        <When condition={status === "COMPLETED"}>
                          <span
                            style={{
                              backgroundColor: `${
                                props.scoring
                                  ? gradeColorMap[props.scoring.grade]
                                  : gradeColorMap["POOR"]
                              }`,
                            }}
                            className={`badge badge-rounded-md ${statusColorMap[scoreStatus]} white-text`}
                          >
                            {scoring.grade ? scoring.grade : "POOR"}
                          </span>
                        </When>
                        <When condition={status === "OVERDUE"}>
                          <span
                            style={
                              status === "OVERDUE"
                                ? {
                                    backgroundColor: `#fff`,
                                    borderColor: "red",
                                    color: "red",
                                  }
                                : { backgroundColor: `#212121`, color: "white" }
                            }
                            className={`badge badge-rounded-md ${statusColorMap[status]} `}
                          >
                            {status}
                          </span>
                        </When>
                        <Otherwise>
                          <span
                            style={{ backgroundColor: `#212121`, color: "white" }}
                            className={`badge badge-rounded-md ${statusColorMap[status]} `}
                          >
                            {status}
                          </span>
                        </Otherwise>
                      </Choose>
                    </When>
                  </Choose>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s2">
              <Checkbox
                checked={props.lesson.selected}
                onChecked={onChecked}
                onUnChecked={onUnChecked}
                cardId={props.lessonId}
                type="cardCheckBox"
              />
            </div>
            <div className="col s8">
              <dl className="dl-horizontal">
                <dt>p.</dt>
                <Choose>
                  <When condition={lesson.type === "module"}>
                    <dd>
                      ({challenge_page} - {practice_page}) ({"Challenge"} + {"Practice"})
                    </dd>
                  </When>
                  <Otherwise>
                    <dd>
                      ({startingPage} - {endingPage}) ({"Starting"} - {"Ending"})
                    </dd>
                  </Otherwise>
                </Choose>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

LessonCard.propTypes = {
  lesson: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onSetIsVisibleTopbar: PropTypes.func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  onSetIsVisibleTopbar: bindActionCreators(setIsVisibleTopBar, dispatch),
  onSetActiveLesson: bindActionCreators(setActiveLesson, dispatch),
  onSetOpenAnswerSheetStatus: bindActionCreators(setOpenAnswerSheetStatus, dispatch)
});

const mapStateToProps = createStructuredSelector({
  subjects: makeSelectSubjects(),
  units: makeSelectUnitFilterOptions(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LessonCard);
