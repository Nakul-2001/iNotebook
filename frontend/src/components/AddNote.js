import React, { useState } from 'react';
import styled from 'styled-components';
import { addNote } from '../Redux/apiCalls';
import { incrementNotes } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top:20px;
  margin-bottom: 20px;
  border:1px solid purple;
  border-radius:10px;
  padding:10px;
`;

const Title = styled.div`
  font-size:50px;
  font-weight:bolder;
  text-align:center;
  margin-bottom:10px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  height: 40px;
  border: 1px solid #ccc;
  font-weight:bold;
  border-radius:5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius:5px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: purple;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const AddNotes = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    e.preventDefault();
    addNote({title,description,tag});
    dispatch(incrementNotes());
    setTitle('');
    setDescription('');
    setTag('');
  };

  return (
    <Container>
      <Title>Write Your Notes Here</Title>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea rows="14"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <Button onClick={handleAddNote}>Add</Button>
    </Container>
  );
};

export default AddNotes;

