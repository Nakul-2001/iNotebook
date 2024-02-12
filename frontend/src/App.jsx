import { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Notes from './Pages/Notes'
import AboutUs from './Pages/AboutUs'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './Redux/apiCalls'

function App() {

  const {auth} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("in useEffect");
    loadUser(dispatch);
  },[auth])


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={!auth ? <Login/> : <Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/Notes' element={<Notes/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
