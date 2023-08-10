import {useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import s from './Inverter.module.css'

const Inverter = () => {
  let colorHEX = 'Введите цвет в HEX'
  let colorRGB = 'Цвет в colorRGB'

  let [invert, setInvert] = useState('')

  const onInvert = (ev) => {
    setInvert(ev)
  }

  function hexToRgb(hex) {
    const red = parseInt(hex.substring(1, 3), 16);
    const green = parseInt(hex.substring(3, 5), 16);
    const blue = parseInt(hex.substring(5, 7), 16);
  
    return {
      r: red,
      g: green,
      b: blue
    };
  }

  let count = invert.length
  if (invert[0] !== '#') {
    colorRGB = 'Начните с  #'
    invert = '#dbdbdb'
  } else if (invert.length < 7 ) {
    colorRGB = `Введите ещё ${7-count} цифр`
    invert = '#e74c3c'
  } else if (invert.length > 7) {
    colorRGB = 'Много цифр HEX'
    invert = '#e74c3c'
  } else {
    let rgb = hexToRgb(invert)
    colorRGB = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  return (
    <Routes>
      <Route path='/hex2rgb' element={
        <div style={{backgroundColor: `${invert}`}}  className={ s.container }>
          <input 
            className={ s.colorHEX }
            maxLength='7' 
            type="text" placeholder={ colorHEX }
            onChange={(ev) => onInvert(ev.target.value)}
          />
          <div className={ s.colorRGB }>
            <div className={ s.backdround }></div>
            <div className={ s.color }>
              { colorRGB }
            </div>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Inverter


