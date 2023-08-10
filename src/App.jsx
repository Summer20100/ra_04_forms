import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Steps from './components/Steps/Steps'
import Inverter from './components/Inverter/Inverter'
import Photo from './components/Photo/Photo'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Inverter />
            <Steps />
            <Photo />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
