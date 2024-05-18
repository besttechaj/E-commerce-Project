import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Blocks from './Components/Blocks/Blocks';
import Courses from './Components/Courses/Courses';
import Article from './Components/Articles/Article';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Admin from './Components/Admin/Admin';
import { UserContext_Provider } from './context/UserContext';
import reducerFn from './reducer/CustomerReducer/CustomerReducer';
import Read from './Components/CrudController/Read/Read';
import Update from './Components/CrudController/Update/Update';

export default function App() {
  //* reducer : manage user data
  let [state, dispatch] = useReducer(reducerFn, {
    details: [],
    Courses: [],
    readData: [],
  });

  return (
    console.log(state),
    (
      <BrowserRouter>
        <UserContext_Provider value={{ state, dispatch, reducerFn }}>
          <Navbar />
          <Routes>
            <Route path='' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/blocks' element={<Blocks />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/articles' element={<Article />} />
            {/* nested routing  */}
            <Route path='/admin' element={<Admin />}>
              <Route path='/admin/read/:id' element={<Read />} />
              <Route path='/admin/update/:id' element={<Update />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </UserContext_Provider>
      </BrowserRouter>
    )
  );
}
