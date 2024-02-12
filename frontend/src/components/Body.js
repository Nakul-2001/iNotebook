import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  display:flex;
`

const Image = styled.img`
  padding:5px;
  width:50%;
  height:520px;
`

const Text = styled.div`
  padding:5px;
`

const Title = styled.div`
  margin-top:30px;
  padding:20px;
  font-size:50px;
  font-weight:bolder;
  color:purple;
`

const Description = styled.div`
  margin-top:20px;
  padding:20px;
  font-size:25px;
  font-weight:bold;
  color:#bc87bc;
`

function Body() {
  return (
    <Container>
      <Image src='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HC1Kg0Ke4otaTdCLY9SKFA.png'></Image>
      <Text>
        <Title>Introducing iNotebook: </Title>
        <Description>Sign up or sign in for a personalized experience. Create, edit, and organize notes effortlessly. Delete unwanted notes with ease. View all your notes at a glance. Stay organized, productive, and inspired with iNotebook—your ultimate digital companion for capturing ideas on the go.<br/><br/>SignUp to continue..</Description>
      </Text>
    </Container>
  )
}

export default Body
