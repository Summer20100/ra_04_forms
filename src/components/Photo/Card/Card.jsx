import s from './Card.module.css'
import { useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Card = ({onClose, url }) => { 

  let setCard = url.map((itm) => 
    <>
      <div className={ s.card }  key={ itm.id } style={!itm.url || itm.url === '' ? {display: 'none'} : {display: 'block'}}>
        <img src={ itm.url } className={ s.img }/>
        <HighlightOffIcon className={ s.close } onClick={ () => onClose(itm.id) } />
      </div>
    </>  
  )
  
  return (
    <>
      { setCard }
    </>
  )
}

export default Card 