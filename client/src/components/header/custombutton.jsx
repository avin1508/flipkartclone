import React from 'react'
import { useState } from 'react';
import{Box,Button, Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Logindilog from '../login/logindilog'



const Wrapper = styled(Box)
`
display:flex;
margin:0 3% 0 auto;
&>button,&>p,&div{
  margin-right:40px;
  font-size:14px;
  align-item:center;
}
`
const Conta = styled(Box)
`display:flex;
`
const Loginbtn = styled(Button)
`
margin-left:20px;
background:#FFFFFF;
color:#2874f0;
border-radius:2px;
box-shadow:none;
padding:5px 40px;
height:32px;`


const CustomButtons = () => {
    
  const [ open ,setOpen] = useState(false)
   const openDialog = () => {
    setOpen(true);
   }

  return (
    <Wrapper>
    <Loginbtn variant='contained' onClick={()=> openDialog()}>Login</Loginbtn>
    <Typography style={{marginTop:3,width:135}}>Become a Seller</Typography>
    <Typography style={{marginTop:3}}>More</Typography>
    <Conta>
      <ShoppingCartIcon/>
      <Typography>Cart</Typography>
    </Conta>
    <Logindilog  open = {open} setOpen= {setOpen}/>
  </Wrapper>
  )
}

export default CustomButtons;
