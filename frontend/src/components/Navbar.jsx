import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#006d5b" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TravelWorld
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/profile">Profile</Button> 
        <Button color="inherit" component={Link} to="/holidays">Holidays</Button>
        <Button color="inherit" component={Link} to="/flights">Flights</Button>
        
        <Button color="inherit" component={Link} to="/recommendation">AI Guide</Button>
      </Toolbar>
    </AppBar>
  );
}
