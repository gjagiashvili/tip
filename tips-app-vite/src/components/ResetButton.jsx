import React from 'react';

const ResetButton = (props) => {


    return (
      <div className={props.divClassName}>
        <button className={props.classClassName} id={props.buttonsId} onClick={props.onClick}disabled={props.buttonActive}>
          {props.buttonsName}
        </button>
      </div>
 )}
export default ResetButton;
  