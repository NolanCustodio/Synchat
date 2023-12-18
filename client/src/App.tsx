// import { createSignal } from 'solid-js';
// import solidLogo from './assets/solid.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

const App = (props: any) => {
  // const [count, setCount] = createSignal(0)

  return (
    <>
      <Navbar/>

      {/* Displays routes */}
      {props.children}
    </>
  )
}

export default App
