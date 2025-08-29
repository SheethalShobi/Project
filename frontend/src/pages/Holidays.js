import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Holidays() {
  const holidays = [
    { name: "Paris", country: "France", bestTime: "Apr-Jun", description: "City of lights with romantic vibes, Eiffel Tower, and great cuisine.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", rating: 4.8 },
    { name: "Maldives", country: "Maldives", bestTime: "Nov-Apr", description: "Tropical paradise with crystal-clear waters and overwater villas.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", rating: 4.9 },
    { name: "Kyoto", country: "Japan", bestTime: "Mar-Apr", description: "Cherry blossom season, historic temples, and traditional culture.", image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", rating: 4.7 },
    { name: "Santorini", country: "Greece", bestTime: "May-Sep", description: "Famous white-washed buildings, blue domes, and sunsets over the sea.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", rating: 4.8 },
    { name: "Bali", country: "Indonesia", bestTime: "Apr-Oct", description: "Beaches, temples, rice terraces, and tropical adventures.", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", rating: 4.6 },
    { name: "New York", country: "USA", bestTime: "Sep-Nov", description: "City that never sleeps, iconic skyline, Broadway, and Central Park.", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80", rating: 4.7 },
  ];

  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const handleView = (holiday) => {
    alert(`You selected ${holiday.name}!`);
  };

  // Add handleBook function
  const handleBook = async (holiday) => {
    try {
      const res = await fetch("http://holidays-service:5002/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          holiday: holiday.name,
          user: "test@test.com",
          days: 5,
        }),
      });
      const data = await res.json();
      setSnackbar({ open: true, message: `Booked holiday: ${data.holiday || holiday.name}`, severity: "success" });
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "Failed to book holiday", severity: "error" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Holiday Destinations</Typography>
      <Grid container spacing={3}>
        {holidays.map((h, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ maxWidth: 345, height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia component="img" height="180" image={h.image} alt={h.name} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{h.name}</Typography>
                <Typography color="text.secondary">{h.country} | Best Time: {h.bestTime}</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{h.description}</Typography>
                <Rating value={h.rating} precision={0.5} readOnly sx={{ mt: 1 }} />
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => handleView(h)}>View</Button>
                <Button size="small" variant="outlined" onClick={() => handleBook(h)}>Book</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      //feedback 
      <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
