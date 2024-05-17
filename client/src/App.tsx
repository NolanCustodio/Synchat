import { onMount } from 'solid-js';
import './App.css';

import Navbar from './Components/Nav/Navbar';

// import { getGroups } from './Components/Groups/getGroups'
// import { setUserGroups } from './stores/groupStore';

import { cookieRequest } from './Components/User/Session/sessionAuth'

const App = (props: any) => {
  onMount(async () => {
    
    await cookieRequest();
  })

  return (
    <div>
      <Navbar/>
      <div class="debug-container">
        {/* Displays routes */}
        {props.children}
      </div>
    </div>
  )
}

export default App
