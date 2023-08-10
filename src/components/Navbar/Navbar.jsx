import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={ s.navbar }>
      <NavLink to='/hex2rgb'>
        <input type='button' className={ s.button } value='CONVERT COLOR' />
      </NavLink>
      
      <NavLink to='/steps'>
        <input type='button' className={ s.button } value='TRAINING' />
      </NavLink>
      
      <NavLink to='/photo'>
        <input type='button' className={ s.button } value='PHOTO' />
      </NavLink>    
    </div>
    
  )
}

export default Navbar 