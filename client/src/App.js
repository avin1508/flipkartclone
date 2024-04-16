
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import { Box } from '@mui/material';

function App() {
  return (
    <>
    <Header/>
    <Box style={{marginTop:54}}>
    <Home/>
    </Box>
    </>
  );
}

export default App;
