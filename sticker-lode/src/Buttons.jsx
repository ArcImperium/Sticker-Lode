import React from 'react'
import {useState} from 'react' 
import './Buttons.css'

function Buttons() {
    const [nums, setnums] = useState('');

    return(
    <>
        <input type="text" value={nums} readOnly className="numtext"/>
        <h1></h1>
        <div style={{display: 'flex', flexDirection: 'row', gap: '30px'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button className='numButton' onClick={() => setnums(nums + '1')}>1</button>
                    <button className='numButton' onClick={() => setnums(nums + '2')}>2</button>
                    <button className='numButton' onClick={() => setnums(nums + '3')}>3</button>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button className='numButton' onClick={() => setnums(nums + '4')}>4</button>
                    <button className='numButton' onClick={() => setnums(nums + '5')}>5</button>
                    <button className='numButton' onClick={() => setnums(nums + '6')}>6</button>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button className='numButton' onClick={() => setnums(nums + '7')}>7</button>
                    <button className='numButton' onClick={() => setnums(nums + '8')}>8</button>
                    <button className='numButton' onClick={() => setnums(nums + '9')}>9</button>
                </div>
                <div style={{display: 'flex', gap: '10px'}}>
                    <button className='opButton' onClick={() => setnums('')}>C</button>
                    <button className='numButton' onClick={() => setnums(nums + '0')}>0</button>
                    <button className='opButton' onClick={() => setnums(eval(nums).toString())}>=</button>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                <button className='funButton' onClick={() => setnums(nums + '+')}>+</button>
                <button className='funButton' onClick={() => setnums(nums + '-')}>-</button>
                <button className='funButton' onClick={() => setnums(nums + '*')}>*</button>
                <button className='funButton' onClick={() => setnums(nums + '/')}>/</button>
            </div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '10px', marginTop: '30px', justifyContent: 'center'}}>
            <button className='funButton' onClick={() => setnums(nums + '(')}>(</button>
            <button className='funButton' onClick={() => setnums(nums + ')')}>)</button>
            <button className='funButton' onClick={() => setnums(nums + '**')}>^</button>
            <button className='dangerButton' style={{marginLeft: '20px'}} onClick={() => window.location.reload(true)}>R</button>
        </div>
    </>
    )
}

export default Buttons