import React, {useState} from 'react';
import './login-page.scss'



const LoginPage = ({onLogOut, onLogIn, isLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogIn(username, password)
    };

    if(isLoggedIn){

        return (
            <div className='already-login'>
                <h2> Welcome </h2>
                <p>Now you can see your contacts or logout</p>

                <button className='btn btn-primary' onClick={() => onLogOut()}>
                    LogOut
                </button>
            </div>
        )
    }

    return (
        <section className='login-page '>
            <div className="box">
                <div className="form">
                    <h2>Login</h2>
                    <form  onSubmit={handleSubmit}>
                        <div className="inputBx">
                            <input type="text" name="username" placeholder='Username'
                                   onChange={(event) => setUsername(event.target.value)}
                            />
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="inputBx">
                            <input type="password" name="password" placeholder='Password'
                                   onChange={(event) => setPassword(event.target.value)}
                            />
                            <i className="fas fa-lock"></i>
                        </div>
                        <label className='remember'>
                            <input type="checkbox"/>
                            Remember Me
                        </label>
                        <div className="inputBx" >
                            <input type="submit" name="submit"  value='Login'/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;