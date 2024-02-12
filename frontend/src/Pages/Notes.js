import React, { useEffect, useState } from 'react'
import Navbar2 from '../components/Navbar2';
import {useSelector } from 'react-redux';
import { getNotes } from '../Redux/apiCalls';
import Note from '../components/Note'
import styled from 'styled-components';

const Container = styled.div`
  margin-top:50px;
  width:100%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
`;

function Notes() {

  const [notes,setNotes] = useState([]);
  const {numNotes} = useSelector((state)=>state.user);

  useEffect(()=>{
    console.log("in useEffect of fetching notes");
    const get = async () => {
      try{
        const currNotes = await getNotes();
        console.log(currNotes);
        setNotes(currNotes);
      }
      catch(err){
        console.log(err);
      }
    }
    get();
  },[numNotes]);

  return (
    <div>
      <Navbar2></Navbar2>
      <Container>
        {notes?.map((note) => 
          <Note note={note} key={note._id}></Note>
        )}
      </Container>
    </div>
  )
}

export default Notes
