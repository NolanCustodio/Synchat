// import { createSignal } from 'solid-js';
// import solidLogo from './assets/solid.svg';
// import viteLogo from '/vite.svg';
import './App.css';

// import { Buffer } from 'buffer';
// window.Buffer = Buffer;

import Navbar from './Components/Navbar/Navbar';

const App = (props: any) => {
  // const [count, setCount] = createSignal(0)

  return (
    <div class="debug-container">
      <Navbar/>

      {/* Displays routes */}
      {props.children}
    </div>
  )
}

export default App
