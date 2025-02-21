import { useContext, useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
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
      VerifyingUser();
      // console.log('Form submitted:', user);
      // Reset form data
      setUser({
        user_email: '',
        user_password: '',
      });
    }
  };

  //todo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  let { dispatch } = useContext(UserContext);

  const VerifyingUser = () => {
    axios.get(`http://localhost:3000/ecommerceData`).then(
      (d) => {
        let temp = [...d.data];
        console.log(temp);

        let res = temp.includes(user.user_email);
        console.log(res);

        // for (let Check_email in temp) {
        //   if (Check_email.user_email === user.user_email) {
        //     console.log('credentials matched');
        //     dispatch({
        //       type: 'USER_LOGGEDIN',
        //     });
        //     return navigate('');
        //   } else {
        //     alert(
        //       'Credentials are not matching, please create a new account if you are a new user'
        //     );
        //   }
        // }
      },
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
