import React from 'react'
import { Box ,Typography,styled} from '@mui/material'
import { navData } from '../constats/data'



const Component = styled(Box)
`
display:flex;
margin:55px 130px 0 130px;
justify-content:space-between`

const Container = styled(Box)
`
padding:8px 5px;
text-align: center`

const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`

const navbar = () => {
  return (
    <Component >
      {
        navData.map(temp =>(
         <Container>
             <img src={temp.url} alt='nav' style={{width:64}}/>
            <Text>{temp.text}</Text>
        </Container>
        ))

      }
    </Component>
  )
}

export default navbar
