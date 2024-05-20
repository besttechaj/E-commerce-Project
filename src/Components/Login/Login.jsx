import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  let navigate = useNavigate();

  //* declaring error
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

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

    // Validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let newErrors = {};

    if (!user.user_email.trim() || !emailRegex.test(user.user_email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!user.user_password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);

    // If there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Submit the form
      console.log('Form submitted:', user);
      // Reset form data
      setUser({
        user_email: '',
        user_password: '',
      });
    }
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
            {errors.email && <span>{errors.email}</span>}
            <input
              type='password'
              name='user_password'
              id='user_password'
              placeholder='Enter your Password'
              onChange={handleChange}
              value={user.user_password}
            />
            {errors.password && <span>{errors.password}</span>}
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
