import './App.css';
import Image from './components/Image/Image';
import Navbar from './components/Navbar/Navbar';
import {images} from './images'

console.log(images)

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='images'>
        {
          images.map(image => {
            return (<Image imageName={image.imageName} imageDescription={image.imageDescription} imageUrl={image.imageUrl}></Image>)
          })
        }
      </div>
    </div>
  );
}

export default App;
