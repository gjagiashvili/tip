import React from 'react';

const Inputs = (props) => {

// const InputsIcon = <svg>{}</svg>
  return (
    <div className='inputs'>
  <span className='inputs-icon'>
        <img className='inputs-icon-img' src={props.icon}/>
  </span>
      <input id={props.inputsId}  placeholder='0' type='number' onChange={props.changeHandler}/>
    </div>
)}
export default Inputs;
