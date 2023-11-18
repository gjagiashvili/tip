import React from 'react';
import { useState, useEffect } from 'react'

import Inputs from './Inputs';
import TipSelector from './TipSelector';
import CustomTip from './CustomTip';
import ResetButton from './ResetButton';

const Main = () => {

  const [tip, setTip] = useState('0')
  const [total, setTotal] = useState('0')
  const [resetIsDisabled, setresetIsDisabled] = useState(true)

  const [percent, setPercent] = useState('')
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)

  const [resetClassNames, setResetClassNames] = useState('disabled')
  const [numPeopleError, setNumPeopleError] = useState(false)

  const resetButtonisEnabled = () => {

    setresetIsDisabled(false)
    setResetClassNames('disabled enabled')

  }

  const buttonChangeHandler = (event) => {
    resetButtonisEnabled();
    setNumPeopleError(false);
    const { value } = event.target
    setPercent(Number(value));
  };

  const inputChangeHandler = (event) => {
    resetButtonisEnabled()

    const { value, id } = event.target

    if (id === 'bill') {
      setBill(Number(value));
    } else if(id === 'people') {
      if (value === 0 || value === '') {
        setNumPeopleError(true)
      } else {
        setNumPeopleError(false)
      }
      setPeople(Number(value))
    }
  }

  const CustomTipChangeHandler = (event) => {
    resetButtonisEnabled();
    setNumPeopleError(false);
    const { value } = event.target;
    setPercent(Number(value) * 0.1);
  };

  const resetApp = () => {
    setTip('0')
    setTotal('0')
    setBill('')
    setPercent('')
    setPeople('')
    setResetClassNames('disabled')
    setresetIsDisabled(true)
    setNumPeopleError(false)
  };

  useEffect(() => {
    const tipSum = (bill * percent) / people;
    const billInclTip = (bill + bill * percent) / people
    // Numcheck
    if (isNaN(tipSum) || !isFinite(tipSum)) {
      setTip('0')
      setTotal('0')
    } else {
      setTip(tipSum)
      setTotal(billInclTip)
}}, [percent, bill, people])



  return (
    <main>

      <div className='inputs-user'>

    <section className='bill' id='bill'>

          <h2>Bill</h2>
          <Inputs icon='../images/icon-dollar.svg'
            changeHandler={inputChangeHandler}
            inputsId='bill'
          />
    </section>
    <section className='tip-value'>

          <h2>Select Tip %</h2>

          <div className='buttons'>

            <TipSelector tipValue='0.05' buttonsName='5%' divClassName='tipSelector' classClassName='tipsSection-select' buttonsId='five' changeHandler={buttonChangeHandler}/>
            
            <TipSelector tipValue='0.1' buttonsName='10%' divClassName='tipSelector' classClassName='tipsSection-select' buttonsId='ten' changeHandler={buttonChangeHandler}/>
            
            <TipSelector tipValue='0.15' buttonsName='15%' divClassName='tipSelector' classClassName='tipsSection-select' buttonsId='fifteen' changeHandler={buttonChangeHandler}/>
            
            <TipSelector tipValue='0.25' buttonsName='25%' divClassName='tipSelector' classClassName='tipsSection-select' buttonsId='twentyfive' changeHandler={buttonChangeHandler}/>

            <TipSelector tipValue='0.50' buttonsName='50%' divClassName='tipSelector' classClassName='tipsSection-select' buttonsId='fifty' changeHandler={buttonChangeHandler}/>

            <CustomTip divClassName='tipSelector' changeHandler={CustomTipChangeHandler}customTipValue='Custom Tip' customclassClassName='custom-tips amount'/>

          </div>
    </section>
    <section className='people'>
        <div className='error-people'>

            <div>
              <h2>Number of People</h2>
            </div>

            <div>
              <h5 className='error'>Cant be zero</h5>
            </div>

          </div>

          <Inputs icon='../images/icon-person.svg' changeHandler={inputChangeHandler}/>

    </section>

      </div>

  <div className='results'>
   <div>
    <section className='tipsSection'>
            <div>
              <h2 className='all-tips'>
                Tip Amount 
                <span className='per-person'>/ per person</span>
              </h2>
            </div>
            <div>
              <p className='tip-sum'>
                $<span>{tip}</span>
              </p>
            </div>
      </section>
      <section className='all-sum'>

        <div>

          <h2 className='all-tips'>

 Total <span className='per-person'>/ per person</span>
           </h2>

        </div>

        <div className='total'>

              <p className='tip-sum'>

                $<span id='total-display'>{total}</span>

              </p>
        </div>

    </section>

    </div>
        <ResetButton classClassName={resetClassNames} buttonsName='Reset' divClassName='reset' buttonActive={resetIsDisabled} onClick={resetApp}/>   
    </div>
    </main>
)}

export default Main
