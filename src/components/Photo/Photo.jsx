import s from './Photo.module.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Card from './Card/Card'


const Photo = () => {
  const [close, setClose] = useState()
  const [url, setUrl] = useState([
    {id: '', url: ''}
  ])

  const onClose = (id) => {
    setUrl([...url].filter((itm) => {
      return itm.id !== id
    }))
  }

  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    if (urls[0] ) {
      setUrl([...url, {id: new Date().getTime(), url: urls[0] } ])
    }
  } 

  
  return (
    <Routes>
      <Route path='/photo' element={
        <div className={ s.container }>
          <div className={ s.clickSelect }> 
            <span>Click to select</span>  
          </div>
          <input type="file" className={ s.clickSelectInput } onClick={ handleSelect }/>
          <div className={ s.cards }>
            <Card onClose={ onClose } url={ url } />
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Photo 