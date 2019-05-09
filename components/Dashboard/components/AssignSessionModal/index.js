import React from 'react';
// import PropTypes from 'prop-types';

class AssignSessionModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: true,
    };
  }

  render() {
    return (
      <div id="modal_assign_session" className="modal modal-custom modal-calendar">
        <div className="card-modal card">
          <div className="card-panel card-panel-title" style={{ backgroundColor: '#14b04b', color: '#fff' }}>
            <div className="card-panel-row row">
              <div className="col">
                <h2>
                  <span className="heading-holder">
                    <i className="icon-clock2"></i>
                    <span className="heading-block"> New Session</span>
                  </span>
                </h2>
              </div>
              <div className="col right-align">
                <a href="#!" className="panel-link close modal-close"><i className="icon-close-thin"></i></a>
              </div>
            </div>
          </div>
          <div className="card-content">
            <div className="card-body">
              <div className="modal-row row">
                <div className="col s12">
                  <div className="datepicker-field input-field">
                    <i className="icon-calendar"></i>
                    <input type="text"  className="datepicker" id="date_new_session" />
                    <label className="label" htmlFor="date_new_session">Date</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" id="start_time_new_section" />
                    <label className="label" htmlFor="start_time_new_section">Start Time</label>
                  </div>
                </div>
                <div className="col s6">
                  <div className="datepicker-field input-field">
                    <i className="icon-clock2"></i>
                    <input type="text" className="timepicker" value="6/1/18" id="end_time_new_section" />
                    <label className="label" htmlFor="end_time_new_section">End Time</label>
                  </div>
                </div>
              </div>
              <div className="modal-row row">
                <div className="col s12">
                  <div className="input-field input-field-textarea">
                    <textarea id="description_session" className="textarea-scroll" cols="40" rows="7">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod soluta excepturi perferendis, ipsa officia maiores accusamus doloribus porro tempore veniam libero voluptatum sunt repellat facere at suscipit repudiandae accusantium quo.
                    </textarea>
                    <label className="label" htmlFor="description_session">Session Notes:</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer modal-footer-width">
              <a href="#!" className="modal-close waves-effect waves-teal btn-flat pink-text text-darken-1">Cancel</a>
              <a href="#" className="link-btn waves-effect waves-teal btn-flat">Add Session</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignSessionModal;
/* <!-- Modal structure assign Session --> */