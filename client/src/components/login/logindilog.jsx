import React from 'react'
import {Box, Dialog,TextField,Typography,Button}from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { authenticateSignup } from '../../service/api';


const Component = styled(Box)`
height:70vh;
width:90vh
`;
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 28%;
    height: 83%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
    }
    
`;

const Wrapper= styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
&>div,&>button,&>p{
  margin-top:20px
}
`;
const LoginButton = styled(Button)`
text-transform: none;
background: #FB641B;
color: #fff;
height: 48px;
border-radius: 2px;
`;
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;  
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const accountInitialValues = {
  login:{
    view: 'login',
    heading:'Login',
    subHeading:'Get ascess your orders,wishlist and Recomadations'
  },
  signup:{
    view:'signup',
    heading:'Looks like you are new here!',
    subHeading:'signup with your mobile number to get started'
  }
}
const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  phone: ''
}


   
const Logindilog = ({ open, setOpen }) => {
  const [ account, toggleAccount ] = useState(accountInitialValues.login);
  const [signup , setsignup] = useState(signupInitialValues)


  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
}

  const handleClose = () => {
    setOpen(false);  
    toggleAccount(accountInitialValues.login);
}
const onInputChange = (e) =>{
  setsignup({...signup,[e.target.value]:e.target.value});
  console.log(signup);
}


const signupUser = async() => {
  let response = await authenticateSignup(signup);
  if(!response) return;
}


  return (
    <Dialog open = {open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
      <Component>
        <Box style = {{display:'flex',height:'100%'}}>
        <Image>
          <Typography variant='h5'>{account.heading}</Typography>
          <Typography>{account.subHeading}</Typography>
        </Image>
        {
         account.view ==='login'?
        <Wrapper>
          <TextField variant='standard' label ="Enter Email/Mobile number"/>
          <TextField variant='standard' label ="Enter password"/>
          <Text>By continuing,you agree to flipkart's term of use and privacy policy.</Text>
          <LoginButton >Login</LoginButton>
          <Typography style={{display:'flex',justifyContent:'center'}}>OR</Typography>
          <RequestOTP >Request otp</RequestOTP>
          <CreateAccount onClick={() => toggleSignup() }>New to flipkart? create an account</CreateAccount>
        </Wrapper>
        :
            <Wrapper>  
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
              <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>           
            </Wrapper>
        } 
        </Box>
      </Component>
    </Dialog>
  )
}

export default Logindilog
