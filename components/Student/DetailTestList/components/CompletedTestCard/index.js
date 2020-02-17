import React from "react";
import PropTypes from "prop-types";

class CompletedTestCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ReadingScore: 0,
      WritingScore: 0,
      ReadingAndWrigingScore: 0,
      MathScore: 0,
      NA: 0
    };
  }
  componentWillReceiveProps = nextProps => {
    const scores = nextProps.scores;
    scores.map((score, index) => {
      switch (score.name) {
        case "Reading":
          this.setState({ ReadingScore: score.score });
        case "Writing and Language":
          this.setState({ ReadingAndWrigingScore: score.score });
        case "Math":
          this.setState({ MathScore: score.score });
        case "Writing":
          this.setState({ MathScore: score.score });
        default:
          this.setState({ NA: 0 });
      }
    });
  };

  render() {
    const { show } = this.props;
    const {
      ReadingScore,
      WritingScore,
      ReadingAndWrigingScore,
      MathScore,
      NA
    } = this.state;
    return (
      <React.Fragment>
        {show && (
          <div
            className="card-full-width card-scored card"
            style={{ margin: "10px" }}
          >
            <div className="card-content">
              <div className=" card-panel-row row mb-0">
                <div className="col s12 right-align">
                  <div
                    className="row icons-row"
                    style={{ marginBottom: "10px" }}
                  >
                    <span
                      className="badge-rounded-xs badge red darken-2 white-text"
                      style={{
                        minWidth: "20px",
                        minHeight: "20px",
                        borderRadius: "50%"
                      }}
                    >
                      <i className="icon-flag"></i>
                    </span>
                    <div className="dropdown-block col">
                      <a href="#" className="dropdown-trigger btn">
                        <i className="material-icons dots-icon">more_vert</i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col s12">
                  <ul className="to-do-list">
                    <li>
                      <div className="row">
                        <div className="col s12 m12">
                          <strong className="list-title">
                            2nd Practice Test
                          </strong>
                        </div>
                        <div className="col s12 m6">
                          <ul className="info-list info-list-gray  assigned">
                            <li>
                              <span className="list-status">
                                <span className="ico-mark" />
                                <span className="status-text">
                                  Complete 6/3/20
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="list-date">
                                <i className="icon-calendar" />
                                <span className="date">Due 6/8/20</span>
                              </span>
                            </li>
                          </ul>
                          <div
                            className="card-meta-block"
                            style={{ padding: "0px", marginTop: "10px" }}
                          >
                            <dl className="dl-horizontal">
                              <dt>Version:</dt>
                              <dd>SAT Practice Test #5</dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="points-list-custom">
                <li className="point-custom-large">
                  <span
                    className="badge-circle"
                    style={{
                      width: "120px",
                      height: "120px",
                      fontSize: "55px"
                    }}
                  >
                    n/a
                  </span>
                </li>
                {MathScore !== 0 ? (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        backgroundColor: "#4785f4",
                        borderColor: "#4785f4"
                      }}
                    >
                      <span className="badge-text">
                        <strong>
                          <h2 style={{ marginBottom: "5px" }}>Math</h2>
                        </strong>
                        <h2 style={{ marginBottom: "5px" }}>
                          {MathScore}
                          <br />
                          +70
                        </h2>
                      </span>
                    </span>
                  </li>
                ) : (
                  <li>
                    <span className="badge-circle">
                      <span className="badge-text">
                        <strong>
                          <h2 style={{ marginBottom: "10px" }}>Math</h2>
                        </strong>
                        <h2 style={{ marginBottom: "15px" }}>n/a</h2>
                      </span>
                    </span>
                  </li>
                )}
                {ReadingAndWrigingScore !== 0 ? (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        backgroundColor: "#55b24b",
                        borderColor: "#55b24b"
                      }}
                    >
                      <span className="badge-text" style={{ fontSize: "16px" }}>
                        <strong>
                          Reading
                          <br />
                          &amp; Writing
                        </strong>
                        <h2>
                          {ReadingAndWrigingScore}
                          <br />
                          +70
                        </h2>
                      </span>
                    </span>
                  </li>
                ) : (
                  <li>
                    <span className="badge-circle">
                      <span
                        className="badge-text"
                        style={{ fontSize: "16px", marginBottom: "10px" }}
                      >
                        <strong>
                          Reading
                          <br />
                          &amp; Writing
                        </strong>
                        <h2>n/a</h2>
                      </span>
                    </span>
                  </li>
                )}

                {ReadingScore !== 0 ? (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        backgroundColor: "#35a6af",
                        borderColor: "#35a6af",
                        width: "80px",
                        height: "80px"
                      }}
                    >
                      <span className="badge-text" style={{ fontSize: "16px" }}>
                        Reading
                        <br />
                        <h4 style={{ marginTop: "10px" }}>
                          {ReadingScore}
                          <br />
                          +70
                        </h4>
                      </span>
                    </span>
                  </li>
                ) : (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        width: "80px",
                        height: "80px"
                      }}
                    >
                      <span className="badge-text" style={{ fontSize: "16px" }}>
                        Reading
                        <br />
                        <h4 style={{ marginTop: "10px" }}>n/a</h4>
                      </span>
                    </span>
                  </li>
                )}
                {WritingScore !== 0 ? (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        backgroundColor: "#389b7d",
                        borderColor: "#389b7d",
                        width: "80px",
                        height: "80px"
                      }}
                    >
                      <span
                        className="badge-text"
                        style={{ fontSize: "16px", marginBottom: "10px" }}
                      >
                        Writing
                        <br />
                        <h4>
                          {WritingScore}
                          <br />
                          +70
                        </h4>
                      </span>
                    </span>
                  </li>
                ) : (
                  <li>
                    <span
                      className="badge-circle"
                      style={{
                        width: "80px",
                        height: "80px"
                      }}
                    >
                      <span
                        className="badge-text"
                        style={{ fontSize: "16px", marginBottom: "10px" }}
                      >
                        Writing
                        <br />
                        <h2>n/a</h2>
                      </span>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
        <style jsx>{``}</style>
      </React.Fragment>
    );
  }
}

CompletedTestCard.propTypes = {
  show: PropTypes.bool.isRequired,
  scores: PropTypes.array
};

export default CompletedTestCard;
