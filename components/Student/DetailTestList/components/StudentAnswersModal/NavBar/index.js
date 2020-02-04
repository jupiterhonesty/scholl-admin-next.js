import React from "react";
import PropTypes from 'prop-types';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClose,onSetActivePage } = this.props;
    return (
      <React.Fragment>
        <div className="header-row card-panel light-blue lighten-1 white-text">
          <div className="card-panel-row row">
            <div className="col s10">
              <div className="card-panel-text">
                <h1 className="text-large">
                  <strong className="text-ico">2nd</strong> Simulated SAT
                </h1>
              </div>
            </div>
            <div className="col s2 right-align">
              <div className="close-block">
                <a href="#" className="modal-close close">
                  <i className="icon-close-thin" onClick={onClose} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-header white" style={{ cursor: "pointer" }}>
          {/* tabs switcher */}
          <ul className="tabs tabs-flex">
            <li className="tab col s3">
              <a className="active" onClick = {() => onSetActivePage('showReadingSection')}>
                <b>Reading</b>
              </a>
            </li>
            <li className="tab col s3">
              <a onClick = {() => onSetActivePage('showWritingSection')}>
                <b>Writing</b>
              </a>
            </li>
            <li className="tab col s3">
              <a onClick = {() => onSetActivePage('showMathNoCalcSection')}>
                <b>Math (no calc)</b>
              </a>
            </li>
            <li className="tab col s3">
              <a onClick = {() => onSetActivePage('showMathWithCalcSection')}>
                <b>Math (calculator)</b>
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSetActivePage:PropTypes.func.isRequired,
};

export default NavBar;
