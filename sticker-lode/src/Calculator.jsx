import {useEffect, useState} from 'react'
import './Calculator.css'
import Buttons from './Buttons.jsx'

function Calculator() {
  const [nums, setnums] = useState('');

  useEffect(() => {
    document.title="Calculator"
  }, [])

  return(
    <div className="calculator">
      <Buttons nums={nums} setnums={setnums}/>
    </div>
  )
}

export default Calculator
