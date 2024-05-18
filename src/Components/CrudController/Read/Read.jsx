import { createPortal } from 'react-dom';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import './Read.css';
export default function Read() {
  let { state, dispatch } = useContext(UserContext);

  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:3000/ecommerceData/${id}`).then((d) => {
      console.log(d.data);
      dispatch({
        type: 'READ_USER',
        payload: d.data,
      });
    });
  }, []);

  let temp =
    (console.log(state),
    (
      <div className='display-data'>
        <h1>Read User Data Information</h1>
        <div>
          <h2>ID:{state.readData.id} </h2>
          <h2>Name:{state.readData.user_name} </h2>
          <h2>Email:{state.readData.user_email}</h2>
          <h2>phone:{state.readData.user_phone}</h2>
          <h2>password:{state.readData.user_password}</h2>
        </div>
        <aside>
          <Link to={`/update/${id}`}>Update</Link>
          <Link to={`/admin`}>Back</Link>
        </aside>
      </div>
    ));

  return createPortal(temp, document.getElementById('portal-read'));
}
