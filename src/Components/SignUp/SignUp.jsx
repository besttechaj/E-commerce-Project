import { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  let navigate = useNavigate();

  //* Declaring state
  let [user, setUser] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
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

    axios
      .post(`http://localhost:3000/ecommerceData`, {
        ...user,
      })
      .then(
        (d) => console.log(d),
        (e) => console.log(e)
      );

    setUser({
      user_name: '',
      user_email: '',
      user_phone: '',
      user_password: '',
    });

    navigate('/');
  };
  return (
    <div className='signup_outer'>
      <div className='signup_inner1'>
        <h1>
          Start Learning with <span style={{ color: '#03c7e8' }}>Qspider</span>.
        </h1>
      </div>
      <div className='signup_inner2'>
        <div className='signup_inner2A'>
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
              type='text'
              name='user_name'
              id='user_name'
              placeholder='Enter your Name'
              onChange={handleChange}
              value={user.user_name}
            />
            <input
              type='password'
              name='user_password'
              id='user_password'
              placeholder='Enter your Password'
              onChange={handleChange}
              value={user.user_password}
            />
            <input
              type='email'
              name='user_email'
              id='user_email'
              placeholder='Enter your Email'
              onChange={handleChange}
              value={user.user_email}
            />
            <input
              type='text'
              name='user_phone'
              id='user_phone'
              placeholder='Enter your Phone Number'
              onChange={handleChange}
              value={user.user_phone}
            />
            <div className='signup_inner3' id='terms&conditions'>
              <input type='checkbox' />
                <h5>
                  By creating an account, you agree to the Terms of Service and
                  Honor Code and you acknowledge that edX and each Member
                  process your personal data in accordance with the Privacy
                  Policy.
                </h5>
            </div>

            <button type='submit'>Create an Account for free</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
