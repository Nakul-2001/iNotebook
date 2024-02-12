import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'
import AddNotes from '../components/AddNote';
import Body from '../components/Body';
import {useSelector } from 'react-redux'

function Home() {
  const {currentUser} = useSelector((state)=>state.user);
  return (
    <div>
      {!currentUser && <><Navbar1></Navbar1><Body></Body></>}
      {currentUser && <><Navbar2></Navbar2><AddNotes></AddNotes></>}
      <Footer></Footer>
    </div>
  )
}

export default Home
