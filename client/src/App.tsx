import './App.css';

import Navbar from './Components/Navbar/Navbar';

const App = (props: any) => {

  return (
    <div class="debug-container">
      <Navbar/>

      {/* Displays routes */}
      {props.children}
    </div>
  )
}

export default App
