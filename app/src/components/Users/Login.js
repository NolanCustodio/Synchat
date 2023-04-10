import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';

import {loginUser} from '../databaseQueries/users'

const Login = () => {
    const dispatch = useDispatch();

    const [newUsername, setUsername] = useState("");
    const [newPassword, setPassword] = useState("");

    return(
        <div>
            Login

            <form onSubmit={(e) => {
                e.preventDefault();
                loginUser(dispatch, newUsername, newPassword);
            }}>

                <div className='form-group'>
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>

                <div className='form-group'>
                    <input 
                        className="form-control" 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>

                <button className='btn btn-primary'>Login</button>
            
            </form>
        </div>
        
    )
}

export default Login;