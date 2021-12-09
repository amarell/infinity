import './App.css';
import Image from './components/Image/Image';
import {images} from './images'

console.log(images)

function App() {
  return (
    <div className="App">
      <Image imageUrl = 'something' imageName='Mountain' imageDescription = 'Beautiful mountain'></Image>


    </div>
  );
}

export default App;
