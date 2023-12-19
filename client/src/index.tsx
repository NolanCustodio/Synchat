/* @refresh reload */
import { lazy } from 'solid-js'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import './index.css'
import App from './App'

//myfiles
const Test = lazy(() => import("./Components/Test"));
const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const LandingPage = lazy(() => import("./Components/LandingPage/LandingPage"));
const Groups = lazy(() => import("./Components/Groups/Groups"));

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={Test}/>
        <Route path="/LandingPage" component={LandingPage}/>
        <Route path="/HomePage" component={HomePage}/>
        <Route path="/Groups" component={Groups}/>
    </Router>
), 
root!);
