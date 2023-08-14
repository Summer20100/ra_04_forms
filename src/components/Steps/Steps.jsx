import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import TodoList from './TodoList/TodoList'
import s from './Steps.module.css'

const Steps = () => {
  const [list, setList] = useState([
    { id: '1', date: '21.01.2023', dateInput: '2023-01-21', text: 5 },
    { id: '2', date: '22.01.2023', dateInput: '2023-01-22', text: 25 },
  ])

  let currentDay = new Date().getDate()
  if (currentDay < 10) currentDay = '0' + currentDay;

  let currentMonth = new Date().getMonth() + 1
  if (currentMonth < 10) currentMonth = '0' + currentMonth;
  let currentYear = new Date().getFullYear()
  let currentDateInput = currentYear + "-" + currentMonth + "-" + currentDay;
  let currentDateText = currentDay + "." + currentMonth + "." + currentYear;

  const [date, setDate] = useState({
    currentDateText,
    currentDateInput
  })

  const [text, setText] = useState('')
  const formatDate = (qwert) => {
    let day = qwert.target.value.substring(8, 10)
    let month = qwert.target.value.substring(5, 7)
    let year = qwert.target.value.substring(0, 4)
    return `${day}.${month}.${year}`
  }

  const onDate = (ev) => {
    ev.preventDefault()

    let day = ev.target.value.substring(8, 10)
    let month = ev.target.value.substring(5, 7)
    let year = ev.target.value.substring(0, 4)
    setDate({
      currentDateText: day + '.' + month + '.' + year,
      currentDateInput: year + '-' + month + '-' + day
    })
  }

  const onText = (ev) => {
    ev.preventDefault()
    setText(ev.target.value)
  }
 
  const summedObjectsArray = Object.values([...list].reduce((accumulator, obj) => {
    if (!accumulator[obj.dateInput]) {
      accumulator[obj.dateInput] = { ...obj };
    } else {
      accumulator[obj.dateInput].text += obj.text;
    }
    return accumulator;
  }, {}));

  const onListAdd = (ev) => {
    ev.preventDefault()
    setList([...list, { id: new Date().getTime(), date: date.currentDateText, dateInput: date.currentDateInput, text: parseInt(!text ? 0 : text) }])
    setText('')
  }

  const onListAdd01 = (ev) => {
    ev.preventDefault()
    setList([...summedObjectsArray])
    setText('')
  }
  
  const onEnter = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault()
      setList([...list, { id: new Date().getTime(), date: date.currentDateText, dateInput: date.currentDateInput, text: parseInt(!text ? 0 : text) }])
      setText('')
    }
  }

  const onDelite = (ev) => {
    setList(
      list.filter(item => {
        return item.id !== ev.id
      })
    )
  }

  const correctObjectName = (array, id, correctedName) => {
    const newArray = array.map(obj => {
      if (obj.id === id) {
        return { ...obj, text: parseInt(!correctedName ? 0 : correctedName) };
      }
      return obj;
    });
    return newArray;
  }

  const onChange = ({ ev, id }) => {
    let newArray = correctObjectName(list, id, parseInt(ev.target.value) )
    setList([...newArray])
    setText('')
  }

  const compareDates = (a, b) => {
    const dateA = new Date(a.dateInput);
    const dateB = new Date(b.dateInput);
    return dateB - dateA;
  }
  list.sort(compareDates)

  return (
    <Routes>
      <Route path='/steps' element={
        <div className={s.container}>
          <form action="#" className={s.form}>
            <div className={ s.element }>
              <label htmlFor='inputDate' style={{fontSize: '13px', padding: '15px 0'}}>Дата (ДД.ММ.ГГГГ)</label>
              <input id="inputDate" type="date" value={date.currentDateInput} className={s.inputDate} onChange={onDate} />
            </div>
            <div className={ s.element }>
              <label htmlFor='inputNumber' style={{fontSize: '13px', padding: '15px 0'}}>Пройдено км</label>
              <input id='inputNumber' type="number" value={text} className={s.inputText} onChange={onText} placeholder='Введите км' onKeyPress={onEnter} />
            </div>
            <input type="submit" className={s.inputBtn} onClick={onListAdd} value="OK" />
            <input type="button" className={s.inputBtn} onClick={onListAdd01} value="SUM" />
          </form>
          <div className="todolist">
            <div className={ s.title } >
              <span>Дата (ДД.ММ.ГГГГ)</span>
              <span>Пройдено км</span>
              <span>Действия</span>
            </div>
            <TodoList list={list} onChange={onChange} onDelite={onDelite} />
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Steps 