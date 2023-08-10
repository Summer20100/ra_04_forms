import s from './TodoItm.module.css'
import { useState, useEffect } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';

const TodoItm = ({ date, text, onDelite, onChange, id }) => {
  let [changeText, setChangeText] = useState('none')

  const onChangeText = () => {
    if (changeText === 'none') {
      return setChangeText('')
    } else {
      return setChangeText('none')
    }
  }

  const onPress = (ev) => {
    if (ev.key === 'Enter') {
      setChangeText('none')
    }
  }

  return (
    <>
      <div className={s.todoItm} >
        <div className={s.info}>
          <div>{date}</div>
          <div>{text}</div>
        </div>
        <div className={s.icons}>
          <EditCalendarIcon onClick={onChangeText} style={{ marginRight: '15px' }} />
          <DeleteForeverIcon onClick={() => onDelite({ id })} />
        </div>
      </div>
      <div className={ s.correctVal } style={{ display: changeText }} >
        <label htmlFor='correctInp'>Новое значение КГ:</label>
        <input id='correctInp' onChange={(ev) => onChange({ ev, id })} value={text} onKeyPress={onPress} />
      </div>
    </>
  )
}

export default TodoItm 