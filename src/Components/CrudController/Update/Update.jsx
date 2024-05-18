import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Update() {
  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/ecommerceData/${id}`).then(
      (d) => {
        console.log(d);
        console.log(d.data);
        setUserUserDetails(d.data);
      },
      (e) => console.log(e)
    );
  }, []);

  let [userDetails, setUserUserDetails] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
    user_phone: '',
  });

  const handleChange = (e) => {
    setUserUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);

    axios.put(`http://localhost:3000/ecommerceData/${id}`, userDetails).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    navigate('/');
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            onChange={handleChange}
            id='user_name'
            name='user_name'
            value={userDetails.user_name}
          />
          readData
          <input
            type='password'
            onChange={handleChange}
            id='user_password'
            name='user_password'
            value={userDetails.user_password}
          />
          readData
          <input
            type='text'
            onChange={handleChange}
            id='user_email'
            name='user_email'
            value={userDetails.user_email}
          />
          readData
          <input
            type='text'
            onChange={handleChange}
            id='user_phone'
            name='user_phone'
            value={userDetails.user_phone}
          />
          <button type='submit'>Submit</button>
          <button type='click' onClick={() => navigate(-1)}>
            Go Back
          </button>
        </form>
      </div>
    </div>
  );
}
