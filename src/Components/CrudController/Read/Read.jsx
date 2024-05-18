import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import './Read.css';
export default function Read() {
  let { state, dispatch } = useContext(UserContext);

  let { Id } = useParams();
  console.log(Id);

  useEffect(() => {
    axios.get(`http://localhost:3000/users/${Id}`).then((d) => {
      console.log(d.data);
      dispatch({
        type: 'READ_USER',
        payload: d.data,
      });
    });
  }, []);

  return (
    <div className='display-data'>
      <h1>User Data</h1>
      <div>
        <h2>Name:{state.details.user_name} </h2>
        <h2>Email:{state.details.user_email}</h2>
        <h2>phone:{state.details.user_phone}</h2>
      </div>
      <aside>
        {/* //! using link component from 'react-router-dom' to redirect the user  */}
        <Link to={`/update/${Id}`}>Update</Link>
        <Link to={`/`}>Back</Link>
      </aside>
    </div>
  );
}
