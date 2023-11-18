import React from 'react';

const CustomTip = (props) => {

  return (

    <div className={props.divClassName}>
      <input type='number' placeholder={props.customTipValue} className={props.customclassClassName} onChange={props.changeHandler}/>
    </div>

  )}

export default CustomTip;
