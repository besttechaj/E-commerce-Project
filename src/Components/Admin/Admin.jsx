import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import './Admin.css';
const Admin = () => {
  let { state, dispatch } = useContext(UserContext);

  let [modal, setModal] = useState(false);
  console.log(modal);

  useEffect(() => {
    console.log('useEffect');

    axios.get(`http://localhost:3000/ecommerceData`).then(
      (d) => {
        dispatch({
          type: 'FETCH_DATA',
          payload: d.data,
        });
      },
      (e) => console.log(e)
    );
  }, [dispatch]);

  let target =
    (console.log('running temp'),
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
                {
                  /* console.log(v); */
                }
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
                        {/* //! read account  */}
                        <NavLink
                          to={`read/${id}`}
                          onClick={() => setModal(true)}
                        >
                          Read Account Details
                        </NavLink>

                        {/* //! update account  */}
                        <NavLink
                          to={`update/${id}`}
                          onClick={() => setModal(true)}
                        >
                          Update Account Details
                        </NavLink>

                        {/* //! delete account  */}
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
    ));

  return modal ? <Outlet /> : target;
};

export default Admin;
