import { onMount } from 'solid-js';
import './App.css';

import Navbar from './Components/Navbar/Navbar';

// import { getGroups } from './Components/Groups/getGroups'
// import { setUserGroups } from './stores/groupStore';

import { cookieRequest } from './Components/User/Session/sessionAuth'

const App = (props: any) => {
  onMount(async () => {
    
    await cookieRequest();
  })

  return (
    <div class="debug-container">
      <Navbar/>

      {/* Displays routes */}
      {props.children}
    </div>
  )
}

export default App
