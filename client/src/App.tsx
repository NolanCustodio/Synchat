import { onMount } from 'solid-js';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { getGroups } from './Components/Groups/getGroups'

import { setUserGroups } from './stores/groupStore';

const App = (props: any) => {
  onMount(async () => {
    const userGroups = await getGroups()
    setUserGroups(userGroups);
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
