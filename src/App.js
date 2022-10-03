import './App.css';
import { Button } from '@mui/material';
import { Box } from '@mui/system';

import Navbar from './components/navbar/navbar.component';
import Score from './components/score/score.component';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Score />
    </Box>
  );
}

export default App;
