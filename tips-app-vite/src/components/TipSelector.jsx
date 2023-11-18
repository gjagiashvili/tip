import React from 'react';


const TipSelector = (props) => {

  // 
  return (
          <div className={props.divClassName}>
      <input  id={props.buttonsId} type='radio' value={props.tipValue} onChange={props.changeHandler}/>
      <label className={props.classClassName} htmlFor={props.buttonsId}>
        {props.buttonsName}
      </label>
    </div>
  )
}

export default TipSelector;
