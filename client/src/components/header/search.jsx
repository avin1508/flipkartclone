import { InputBase ,Box,styled} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

const Searchbox = styled(Box)`
background: #FFF;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const Inputsearch = styled(InputBase)`
width:100%;
padding-left: 20px;
`
const Icon = styled(Box)`
color:blue;
margin-top:2px;
display:flex;
`

const search = () => {
  return (
    <Searchbox>
        <Inputsearch
        placeholder='search for product,brands and more'
        />
        <Icon>
            <SearchIcon/>
        </Icon>
    </Searchbox>
  )
}

export default search
