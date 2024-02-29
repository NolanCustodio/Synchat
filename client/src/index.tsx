/* @refresh reload */
import { lazy } from 'solid-js'
import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import './index.css'
import App from './App'

//myfiles
const HomePage = lazy(() => import("./Components/HomePage/HomePage"));
const LandingPage = lazy(() => import("./Components/LandingPage/LandingPage"));
const Groups = lazy(() => import("./Components/Groups/Groups"));

//user auth
import { cookieRequest } from './Components/User/Session/sessionAuth'
await cookieRequest();

const SignUp = lazy(() => import ("./Components/User/SignUp"));
const Login = lazy(() => import ("./Components/User/Login"));

//debug
const Error = lazy(() => import("./Components/Error/Error"))

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={LandingPage}/>
        <Route path="/Home" component={HomePage}/>
        <Route path="/Groups" component={Groups}/>
        
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        
        <Route path="/Error" component={Error}/>
        
    </Router>
), 
root!);
