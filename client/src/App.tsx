// import { createSignal } from 'solid-js';
// import solidLogo from './assets/solid.svg';
// import viteLogo from '/vite.svg';
import './App.css';


//myfiles
import Test from './Components/Test';
import Navbar from './Components/Navbar/Navbar';

function App() {
  // const [count, setCount] = createSignal(0)

  return (
    <div>
      {/* <p>Hi</p> */}
      <Test/>
      <Navbar/>
    </div>
  )
}

export default App
