import './login.css'
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { login } from "../../redux/apiCalls";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        login(dispatch,{username, password})
    }
    return ( 
        <div className="login">
            <div className="wrapper">
                <h2 className="title">SIGN IN</h2>
                <form className="form">
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleLogin}>LOGIN</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;