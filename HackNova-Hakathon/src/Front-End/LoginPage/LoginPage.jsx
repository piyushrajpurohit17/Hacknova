import '../LoginPage/LoginPage.css'
import SguLogo from "../../../public/logo1.png"


function LoginPage () {
    return (
        <div className="LoginPage">
              <div className="header">
        <img src={SguLogo} alt="SGU Logo" className="logo"/>
    </div>

    <div className="container">
        <form id="login-form" className="login-form">
            <h2 >Login</h2>
            <div className="form-group">
                <label htmlFor="user-id">User ID</label>
                <input type="text" id="user-id" placeholder="Enter your user ID" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="options">
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="submit-btn">Sign In</button>
            <div className="support">
                <a href="#">Need help? Contact Support</a>
            </div>
        </form>
    </div>
        </div>
    );
}

export default LoginPage;