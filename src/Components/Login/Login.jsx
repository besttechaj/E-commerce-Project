import { useState } from 'react';
import './Login.css';
import axios from 'axios';
const Login = () => {
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

  const VerifyingUser = () => {
    axios.get(``).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );
  };

  return (
    <div className='login'>
      <div className='login_inner'>
        <h1>Login Page</h1>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
