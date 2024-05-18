import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Blocks from './Components/Blocks/Blocks';
import Course from './Components/Course/Course';
import Article from './Components/Articles/Article';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Admin from './Components/Admin/Admin';
import { UserContext_Provider } from './context/UserContext';
import reducerFn from './reducer/CustomerReducer/CustomerReducer';

export default function App() {
  //* reducer : manage user data
  let [state, dispatch] = useReducer(reducerFn, {
    details: [],
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
            <Route path='/course' element={<Course />} />
            <Route path='/articles' element={<Article />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </UserContext_Provider>
      </BrowserRouter>
    )
  );
}
