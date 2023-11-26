import {Link} from 'react-router-dom'

const Login = () => {
    return(
        <>  
            <div className="container">
                <div className="img-container"></div>
                <div className="Login-container">
                    <div>
                        <label htmlFor="username">Username</label><br />
                        <input type="text" name="username" id="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" />
                    </div>
                </div>
                <div id="login-btn">
                    <Link to='/dashboard'><input type="submit" value="Log In" /></Link>
                </div>
                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </>
    )
}

export default Login 