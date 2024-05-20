import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate();

  //* Declaring state
  let [user, setUser] = useState({
    user_email: '',
    user_password: '',
  });

  //* handler change
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //* submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  //todo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const VerifyingUser = () => {
    axios.get(``).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );
  };

  return (
    <div className='login'>
      <div className='login_inner1'>
        <h1>
          Start Learning with
          <span style={{ color: '#03c7e8' }}> Qspider</span>.
        </h1>
      </div>
      <div className='login_inner2'>
        <div className='login_inner2A'>
          <div className='btnCombo'>
            <button className='btn' onClick={() => navigate('/signup')}>
              Register
            </button>
            <button className='btn' onClick={() => navigate('/login')}>
              Sign in
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='user_email'
              id='user_email'
              placeholder='Enter your Email'
              onChange={handleChange}
              value={user.user_email}
            />

            <input
              type='password'
              name='user_password'
              id='user_password'
              placeholder='Enter your Password'
              onChange={handleChange}
              value={user.user_password}
            />

            <button type='submit'>Login</button>
            <br />
            <p>Forgot password ?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
