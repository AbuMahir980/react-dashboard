import {Link} from 'react-router-dom';

const Signup = () => {
    return(
        <>
            <div className="container">
                <div>
                    <label htmlFor="firstname">First Name</label><br />
                    <input type="text" name="firstname" id="firstname" />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label><br />
                    <input type="text" name="lastname" id="lastname" />
                </div>
                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="username">Username</label><br />
                    <input type="text" name="firstname" id="firstname" />
                </div>
                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="password">Confirm Password</label><br />
                    <input type="password" name="password" id="password" />
                </div>
                <div id="signup-btn">
                    <Link to='/login'><input type="submit" value="Sign Up" /></Link>
                </div>
            </div>
        </>
    )
}

export default Signup