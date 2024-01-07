

import React, {useState} from 'react'

import './index.css'
import Footer from './Footer'
import Head from './Head'

function App() {


  // state
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')



  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault()

    if (weight === 0 || weight > 200 || height === 0 || height >2.3 || height < 0) {
      alert('Моля, въведете валидно тегло и височина')
    } else {
      let bmi = weight / (height * height)
      setBmi(bmi.toFixed(1))

      // Logic for message

      if (bmi < 19) {
        setMessage('Вие сте с поднормено тегло')
      } else if (bmi >= 19 && bmi < 25) {
        setMessage('Имате здравословно тегло')
      } else if (bmi >=25 && bmi < 30){
        setMessage('Вие сте с наднормено тегло')
      }
      else {
        setMessage('Затлъстяване')
      }
    }
  }

  //  show image based on bmi calculation
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 19) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 19 && bmi < 25) {
      imgSrc = require('../src/assets/healthy.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/overweight.png')
    } else  {
      imgSrc = require('../src/assets/pig.jpg')
    }
  }


  let reload = () => {
    window.location.reload()
  }

  return (
    <>
    <Head/>
    <div className="app">
      <div className='container'>
        <h2 className='center'>Индекс Телесна Маса</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Килограми (кг)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Височина (метри)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Сметни</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Ново</button>
          </div>
        </form>

        <div className='center'>
          <h3>Вашия Индекс Телесна Маса е: {bmi}</h3>
          <p>{message}</p>
        
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}


export default App;