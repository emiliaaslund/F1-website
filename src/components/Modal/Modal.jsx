import React from "react";
import "./Modal.scss";

const Modal = (props) => {
  if (!props.showModal) {
    return null;
  }
  return (
    <div className="modal-window" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {/* Modal Title */}
          <h2 className="modal-title">
            Name: {props.oneDriver.Driver.givenName}{" "}
            {props.oneDriver.Driver.familyName}
          </h2>

          {/* //Modal Body */}
          <div className="modal-body">
            <div className="modal-number">
              <strong> Driver number: </strong>
              {props.oneDriver.Driver.permanentNumber}
            </div>
            <div className="modal-date-of-birth">
              <strong> Date of birth: </strong>
              {props.oneDriver.Driver.dateOfBirth}
            </div>
            <div className="modal-nationality">
              <strong>Country: </strong>
              {props.oneDriver.Driver.nationality}
            </div>
            <div className="modal-season-wins">
              <strong>Position:</strong> {props.oneDriver.position}
            </div>
            <div className="modal-season-wins">
              <strong> Wins:</strong> {props.oneDriver.wins}
            </div>
            <div className="modal-season-points">
              <strong>Points:</strong> {props.oneDriver.points}
            </div>
            <div className="modal-wiki-link">
              <strong> Read more: </strong>
              <a href={props.oneDriver.Driver.url} target="_blank">
                {props.oneDriver.Driver.url}
              </a>
            </div>
          </div>
          {/* Modal Footer */}
          <div className="modal-footer">
            <button onClick={props.onClose} className="modal-close">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
