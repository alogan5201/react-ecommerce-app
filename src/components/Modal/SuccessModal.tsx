import React, { FC, useState, useRef } from 'react';
import CheckMark from '../../static/images/checkmark.png';

function SuccessModal() {
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isActive, setActive] = useState<boolean>(false);
  return (
    <div
      className={isActive ? 'modal fade show' : 'modal fade'}
      id="exampleModalLive"
      tabIndex={-1}
      aria-labelledby="exampleModalLiveLabel"
      style={
        isActive
          ? { display: 'block', backgroundColor: 'rgba(0,0,0,0.4)' }
          : { backgroundColor: 'rgba(0,0,0,0.4)' }
      }
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ height: '250px' }}>
          <div className="modal-header border-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row text-center">
              <div className="col-12" style={{ marginTop: '-164px' }}>
                <img
                  src={CheckMark}
                  alt="checkmark"
                  style={{ width: '150px' }}
                />
              </div>
              <div className="col-12">
                <h2>Success!</h2>
              </div>
              <div className="col-12">
                <p>Woo-hoo, you're now registered!</p>
              </div>
              <div className="col-12">
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  type="button"
                  className="btn btn-outline-success rounded-pill"
                  style={{ width: '51%' }}
                  onClick={handleToggle}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
