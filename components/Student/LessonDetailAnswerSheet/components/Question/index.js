import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import QuestionModal from "../QuestionModal";
import BubbleGroup from "../Bubble";
import FreeResponse from '../FreeResponse';
import { answerStudentLessonProblem, answerStudentLessonDebounce } from '../../../index/actions';
import { makeSelectActiveLesson } from '../../../index/selectors';

class AnswerRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      status: '',
      originalTestProblemId: "",
    };
  }

  componentDidMount = () => {
    const { problem: { id } } = this.props;
    const { originalTestProblemId } = this.state;
    if (id !== originalTestProblemId && this.props.problem.flag_status) {
      const { problem: { flag_status } } = this.props;
      this.setState({
        status: flag_status,
        originalTestProblemId: id,
      });
    }
  }
  onChangeFlagState = (status) => {
    this.setState({
      status,
    });
  }

  onOpenQuestionModal = () => this.setState({ open: true });
  onCloseQuestionModal = () => this.setState({ open: false });

  isFreeResponse = () => {
    const { problem } = this.props;
    if (problem.problem.format === "Multiple") {
      return false;
    }
    return true;
  }

  isLessonSectionCompleted = () => {
    const { activeLesson, problemType } = this.props;
    switch (problemType) {
      case "drillProblems":
        if (activeLesson.status === "COMPLETED") return true;
      case "challengeProblems":
        if (activeLesson.sections[0].status === "COMPLETED") return true;
      case "practiceProblems":
        if (activeLesson.sections[1].status === "COMPLETED") return true;
      default:
        return false;
    }
  }


  render() {
    const { problem, onAnswerStudentLessonProblem, onAnswerStudentLessonDebounce, activeLesson } = this.props;
    const { open, status } = this.state;
    return (
      <React.Fragment>
        <QuestionModal
          open={open}
          onOpenQuestionModal={this.onOpenQuestionModal}
          onCloseQuestionModal={this.onCloseQuestionModal}
          question={problem}
          onChangeFlagState={this.onChangeFlagState}
        />
        <li
          className="answers-list-holder"
          key={problem.id}
          style={{ marginRight: "15px" }}
        >
          <div className="answer-row row mb-0">
            <div className="col col-120">
              <ul className="answer-list">
                {this.isFreeResponse() ?
                  <FreeResponse
                    lesson={problem}
                    onAnswerStudentLessonDebounce={onAnswerStudentLessonDebounce}
                    studentLessonId={activeLesson.id}
                    problemType={this.props.problemType}
                    hasDisplayAnswers={this.isLessonSectionCompleted()}
                  /> :
                  <BubbleGroup
                    lesson={problem}
                    onAnswerStudentLessonProblem={onAnswerStudentLessonProblem}
                    studentLessonId={activeLesson.id}
                    problemType={this.props.problemType}
                  />}
              </ul>
            </div>
            <div className="col col-30">
              <span className="status-info">E</span>
            </div>
            <div className="col col-auto">
              <Choose>
                <When condition={status === 'FLAGGED'}>
                  <span className="status-answer" style={{ color: "#c0272d" }}>
                    <i className="icon-flag"></i>
                    <b className="status-text">Review</b>
                  </span>
                </When>
                <When condition={status === 'REVIEWED'}>
                  <span className="status-answer status-disabled" style={{ color: "#c0272d" }}>
                    <i className="icon-flag"></i>
                    <b className="status-text">Review</b>
                  </span>
                </When>
              </Choose>
            </div>
            <div className="dropdown-block col col-35">
              <a className="modal-trigger" href="#" onClick={this.onOpenQuestionModal}>
                <i className="material-icons dots-icon">more_vert</i>
              </a>
            </div>
          </div>
        </li>
      </React.Fragment>
    );
  }
}

AnswerRow.propTypes = {
  problem: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  activeLesson: makeSelectActiveLesson(),
});

const mapDispatchToProps = (dispatch) => ({
  onAnswerStudentLessonProblem: (postBody, problemType, format) => dispatch(answerStudentLessonProblem(postBody, problemType, format)),
  onAnswerStudentLessonDebounce: (postBody, problemType, format) => dispatch(answerStudentLessonDebounce(postBody, problemType, format)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerRow);
