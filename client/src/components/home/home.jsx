import{ React,  Fragment } from 'react'
import Navbar from './navbar'
import Banner from './banner'
import { Box } from '@mui/material'
import styled from '@emotion/styled'

const Component= styled(Box)
`
padding: 10px;
background:#F2F2F2;
`

function home() {
  return (
    <Fragment>
       <Navbar/>
       <Component>
       <Banner/>
       </Component>
    </Fragment>
  )
}

export default home
