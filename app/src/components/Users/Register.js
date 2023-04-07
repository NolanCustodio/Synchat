import React, {useState} from 'react';

import { insertNewUser } from '../databaseQueries/users';

const Register = () => {
    const [newUsername, setUsername] = useState("");
    const [newEmail, setEmail] = useState("");
    const [newPassword, setPassword] = useState("");

    return(
        <div>
            Register
            <form onSubmit={(e) => {
                e.preventDefault();
                insertNewUser(newUsername, newEmail, newPassword);
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
                        type="text" 
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
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
                
                <button className='btn btn-primary'>Create Account</button>
            </form>                
        </div>
    )
}

export default Register;