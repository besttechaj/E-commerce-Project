import React, { useContext } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
const Admin = () => {
  let { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    console.log('running');
    axios.get(`http://localhost:3000/ecommerceData`).then(
      (d) => {
        dispatch({
          type: 'FETCH_DATA',
          payload: d.data,
        });
      },
      (e) => console.log(e)
    );
  }, []);

  return (
    console.log(state),
    (
      <>
        <div>
          <h1>
            Welcome to the admin database component, only admin is allowed to
            view this page
          </h1>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {state.details.map((v, i) => {
                console.log(v);
                let { id, user_name, user_email, user_password, user_phone } =
                  v;

                return (
                  <React.Fragment key={i}>
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{user_name}</td>
                      <td>{user_email}</td>
                      <td>{user_password}</td>
                      <td>{user_phone}</td>

                      <td>
                        <NavLink to={`read/${id}`}>
                          Read Account Details
                        </NavLink>
                        <NavLink to={`update/${id}`}>
                          Update Account Details
                        </NavLink>
                        <NavLink
                          onClick={() => {
                            axios
                              .delete(
                                `http://localhost:3000/ecommerceData/${id}`
                              )
                              .then(
                                (d) => console.log(d),
                                (e) => console.log(e)
                              );

                            window.location.reload();
                          }}
                        >
                          Delete Account
                        </NavLink>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    )
  );
};

export default Admin;
