import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import ForgetPassword from './Components/ForgetPassword'
import Feed from './Components/Feed';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {AuthProvider} from './Context/AuthContext'
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa'

function App() {
  return (
    <Router>
      <AuthProvider>
          <Routes>
            {/* <Route exact path='/' element={< Banner />} ></Route> */}
            <Route exact path='/login' element={< Login />}></Route>
            <Route exact path='/signup' element={< Signup />}></Route>
            {/* <Route exact path='/forgetpassword' element={< ForgetPassword />}/> */}
            {/* <PrivateRoute exact path='/' element={<Feed/>}/> */}
            <Route exact path='/profile/:id' element={<PrivateRoute><Profile/></PrivateRoute>}></Route>
            <Route exact path='/' element={<PrivateRoute><Feed/></PrivateRoute>}></Route>
          </Routes>
      </AuthProvider>
    </Router>
    // <Ioa/>
  );
}

export default App;
