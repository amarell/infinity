import './App.css';
import Image from './components/Image/Image';
import Navbar from './components/Navbar/Navbar';
import {imgs} from './images'
import React, {useState, useEffect} from 'react'
import Sidebar from './components/Sidebar/Sidebar';

console.log(imgs)

function App() {
  const [filteredImages, setFilteredImages] = useState([]) 
  const [search, setSearch] = useState("")

  useEffect(() => {
    let imageArray = imgs.filter(image => image.imageDescription.toLowerCase().includes(search.toLowerCase()) || image.imageName.toLowerCase().includes(search.toLowerCase()))
    setFilteredImages(imageArray);
  }, [search]);

  return (
    <div className="App">
      <div className='navbar'>
        <Navbar search={search} setSearch={setSearch}></Navbar>
      </div>
      <div className='content'>
        
        <Sidebar></Sidebar>

        <div className='images'>
          {
            filteredImages.map(image => {
              return (<Image key={image.id} imageName={image.imageName} imageDescription={image.imageDescription} imageUrl={image.imageUrl}></Image>)
            })
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
