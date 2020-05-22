import React from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

const styles = {
  red: {
    position: "relative",
    color: "#fff",
    borderColor: "#fff",
    border: "1px solid",
    backgroundColor: "#db1d41",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  greenFilled: {
    position: "relative",
    color: "#fff",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#32955c",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  greenBorderOnly: {
    position: "relative",
    color: "#32955c",
    borderColor: "#32955c",
    border: "1px solid",
    backgroundColor: "#fff",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  },
  plain: {
    position: "relative",
    color: "#a6a8ab",
    border: "1px solid",
    borderColor: "#a6a8ab",
    height: "19px",
    width: "19px",
    borderRadius: "50%"
  }
};

class BubbleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1,
      problemCells: [
        {
          id: 0,
          label: "A",
          selected: false,
        },
        {
          id: 1,
          label: "B",
          selected: false,
        },
        {
          id: 2,
          label: "C",
          selected: false,
        },
        {
          id: 3,
          label: "D",
          selected: false,
        },
      ],
    };
  }

  handleClickBadge = (index) => {
    const currentBadge = this.state.problemCells[index];
    const selectedIndex = this.state.selectedIndex;
    if (selectedIndex === -1) {
      const updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    } else {
      const updatedProblemCells = update(this.state.problemCells, {
        [index]: { selected: { $set: !currentBadge.selected } },
        [selectedIndex]: { selected: { $set: false } },
      });
      this.onSaveStudentAnswer(updatedProblemCells, index);
    }
  };

  onSaveStudentAnswer = (updatedProblemCells, index) => {
    const { onAddStudentAnswerToTest, problem, testSection } = this.props;
    this.setState({ problemCells: updatedProblemCells, selectedIndex: index });
    const { label } = this.state.problemCells[index];
    onAddStudentAnswerToTest(problem, label, testSection.student_test_id);
  };

  mapEmptyBubbles = id => {
    const letters = ["A", "B", "C", "D"];
    // const {
    //   problem: { student_answer, correct_answer }
    // } = this.props;
    // const {selectedIndex} = this.state;
    return letters.map((letter, index) => (
      <li 
        key={letter}
        style={{ cursor: "pointer" }}
        onClick={() => this.handleClickBadge(index)}
      >
        <form>
          <label
            htmlFor={`${id}${letter}`}
            style={this.renderBubbleStyle(letter)}
          >
            <span style={{ display: "block", marginTop: "2px", paddingLeft: "4.5px" }}>
              {letter}
            </span>
          </label>
        </form>
      </li>
    ));
  };

  renderBubbleStyle = letter => {
    const {
      problem: { correct_answer, student_answer }
    } = this.props;
    const {selectedIndex, problemCells} = this.state;
    const selectedAnswer = problemCells[selectedIndex] ? problemCells[selectedIndex].label : null;
    const studentAnswer = student_answer || selectedAnswer
    if (studentAnswer === letter && studentAnswer === correct_answer) {
      return styles.greenFilled;
    }
    if (studentAnswer === letter && studentAnswer !== correct_answer) {
      return styles.red;
    }
    if (letter !== studentAnswer && letter === !correct_answer) {
      return styles.plain;
    }
    if (letter !== studentAnswer && letter === correct_answer) {
      return styles.greenBorderOnly;
    }
    return styles.plain;
  };

  render() {
    const {
      problem: { test_problem_id }
    } = this.props;
    return <React.Fragment>{this.mapEmptyBubbles(test_problem_id)}</React.Fragment>;
  }
}

BubbleGroup.propTypes = {
  problem: PropTypes.object.isRequired
};

export default BubbleGroup;
