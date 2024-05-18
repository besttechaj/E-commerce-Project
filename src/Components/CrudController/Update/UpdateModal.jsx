import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Update() {
  let navigate = useNavigate();

  let [state, setState] = useState({
    id: '',
    name: '',
    phone: '',
    email: '',
  });

  //! Using the dynamic routing (eg id), we are redirected to the update component. Now to fetch the data for the particular user we have to first target the url's endpoint id and using id we can fetch the data from axios.get(): to get the the user's details. Hence to get the endpoint we have a method inside 'react-router-dom package' known as "useParams". This method will not take any argument. The return type of useParam hook is an object.
  //! destructuring object to get the required id

  let { Id } = useParams();

  //! Since we have fetched the id from the endpoint using "useParam" method. Now we want to fetch the user's details based on id after the component's get mounted. Hence we have one hook that is "useEffect" which will run only once after the component get mounted. So now we can make axios.get() call inside it to fetch the user's details using it's id that we have already fetched from url.

  useEffect(
    () => {
      axios.get(`http://localhost:3000/users/${Id}`).then(
        (d) => {
          console.log(d);
          setState(d.data);
        },
        (e) => console.log(e)
      );
    },
    //! empty dependency list otherwise it will go to infinite loop if state changes

    []
  );

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...state });
    //! After submitting the form we want to send the updated data to the data base for a particular user, hence we have a method inside axios that is axios.put/patch(). put/patch() will take 3 parameters which are "url" and "data" (Please Note while sending the data to the database, the identifier should have the same that you have in database) and config (for custom configurations like authorization, content-type, data format ant many more). axios.put/patch() will return one promise hence we have to handle it.

    axios.put(`http://localhost:3000/users/${Id}`, state).then(
      (d) => console.log(d),
      (e) => console.log(e)
    );

    //! We are using button tag that's why we are unable to use "link" component to re-direct the user to different path whenever someone click on the button, So to perform such type of functionality for any button or react's element, we have one method "useNavigate" present inside the 'react-router-dom' package.
    navigate('/');
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='number' name='id' id='id' onChange={handleChange} />
          <input
            type='text'
            onChange={handleChange}
            id='name'
            name='name'
            value={state.name}
          />
          <input
            type='text'
            onChange={handleChange}
            id='phone'
            name='phone'
            value={state.phone}
          />
          <input
            type='email'
            onChange={handleChange}
            id='email'
            name='email'
            value={state.email}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}
