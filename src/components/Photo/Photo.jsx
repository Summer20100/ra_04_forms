import s from './Photo.module.css'
import { Route, Routes } from 'react-router-dom'


const Photo = () => {
  return (
    <Routes>
      <Route path='/photo' element={
        <div className={ s.container }>
          Photo пока не сделал
        </div>
      } />
    </Routes>
  )
}

export default Photo 