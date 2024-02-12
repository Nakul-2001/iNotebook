import React from 'react'
import styled from 'styled-components'
import { deleteNote } from '../Redux/apiCalls'
import { useDispatch } from 'react-redux'
import { MdDeleteForever } from "react-icons/md";
import { decrementNotes } from '../Redux/userSlice';

const Container = styled.div`
  width:30%;
  margin:5px;
  border-radius:20px;
  border:1px solid grey;
  border-left:10px solid purple;
  display: flex;
  flex-direction:column;
  gap:3vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

const Title = styled.div`
  width:100%;
  color:purple;
  margin-top:5px;
  font-size:30px;
  text-align:center;
  font-weight:bolder;
`

const Desc = styled.div`
  width:95%;
  height:50vh;
  overflow:scroll;
  color:grey;
  margin-top:5px;
  margin-left:5px;
  font-size:20px;
  &::-webkit-scrollbar{display:none};
`

const Tags = styled.div`
  color:black;
  font-weight:bolder;
  padding:5px;
  font-size:20px;
  margin-left:5px;
`

const Tag = styled.span`
  border-radius:2px;
  background-color:grey;
  color:white;
  font-weight:bolder;
  padding:2px;
  font-size:15px;
  margin-left:10px;
`

const Buttons = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  svg{
    font-size:xx-large;
    color:red;
  }
`

function Note({note}) {

  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    deleteNote(note._id);
    setTimeout(()=>{
      dispatch(decrementNotes());
    },1000);
  }

  return (
    <Container>
      <Title>{note.title}</Title>
      <Desc>{note.description}</Desc>
      <Tags>
        Tags:<Tag>{note.tag}</Tag>
        </Tags>
      <Buttons>
        <MdDeleteForever onClick={handleClick} />
      </Buttons>
    </Container>
  )
}

export default Note
