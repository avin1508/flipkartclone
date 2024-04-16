import React from 'react'
import Search from './search'
import Custombutton from './custombutton'
import {AppBar,Toolbar,styled,Box,Typography} from "@mui/material"

const Styledheader = styled(AppBar)
`
background: #2874f0;
height:55px
`
const Component = styled(Box)
`
margin-left: 12%;
line-height: 0;
`
const Subheading = styled(Typography)
`font-size: 10px;
font-style:italic;
`
const Plusimg = styled('img')(
    {
       width:10 ,
       height:10,
       marginLeft:4

    }
)
const Btn = styled(Box)`

`

const header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


  return (
    <Styledheader>
        <Toolbar style={{minHeight:55}}>
            <Component>
                <img src={logoURL} alt='logo' style={{width: 75}}/>
                <Box style = {{display: 'flex'}}>
                    <Subheading>Explore&nbsp;
                    <Box component= "span" style={{color:'#FFE500'}}>Plus</Box>
                    </Subheading>
                    <Plusimg src={subURL} alt="slogo" />
                </Box>
            </Component>
            <Search/>
           <Btn>
           <Custombutton/>
           </Btn>
        </Toolbar>
    </Styledheader>
  )
}

export default header
