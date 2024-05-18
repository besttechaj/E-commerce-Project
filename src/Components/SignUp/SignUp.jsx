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
    <div>
      <h1>SignUp Page</h1>
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
        <button type='submit'>SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
