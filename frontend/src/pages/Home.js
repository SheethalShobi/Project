import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  const balloonBg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80";

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        px: 2,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.7))`,
          zIndex: 1,
        },
        '& img': {
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          top: 0,
          left: 0,
          zIndex: 0,
          animation: 'float 15s ease-in-out infinite',
        },
        '@keyframes float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      }}
    >
      {/* Background Image */}
      <img src={balloonBg} alt="Hot Air Balloons" />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          Welcome to TravelWorld
        </Typography>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Explore your next holiday or flight!
        </Typography>
        <Box>
          <Button
            variant="contained"
            component={Link}
            to="/holidays"
            sx={{ mr: 2 }}
          >
            View Holidays
          </Button>
          <Button variant="contained" component={Link} to="/flights">
            Book Flights
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
