import { Box, Grid, Card, CardContent, Typography, CardActions, Button, CardMedia } from "@mui/material";

export default function Flights() {
  const flights = [
    {
      airline: "Delta",
      from: "New York",
      to: "Paris",
      price: 500,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df", // airplane in sky
    },
    {
      airline: "Emirates",
      from: "New York",
      to: "Dubai",
      price: 800,
      image: "https://images.unsplash.com/photo-1586015555751-63c7cfbb740d", // Emirates plane
    },
    {
      airline: "Qatar Airways",
      from: "London",
      to: "Doha",
      price: 450,
      image: "https://images.unsplash.com/photo-1612462743562-d4b7c83413cf", // Qatar Airways jet
    },
    {
      airline: "Air India",
      from: "Mumbai",
      to: "Singapore",
      price: 300,
      image: "https://images.unsplash.com/photo-1586015272710-bd08f6d9e9c4", // Air India plane
    },
    {
      airline: "Singapore Airlines",
      from: "Singapore",
      to: "Tokyo",
      price: 650,
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df", // Singapore Airlines
    },
    {
      airline: "Lufthansa",
      from: "Berlin",
      to: "New York",
      price: 700,
      image: "https://images.unsplash.com/photo-1606761568499-6d6ae59a4e9c", // Lufthansa plane
    },
  ];

  const handleBook = (flight) => {
    alert(`Flight booked: ${flight.airline} from ${flight.from} → ${flight.to}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Available Flights
      </Typography>
      <Grid container spacing={3}>
        {flights.map((f, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="160"
                image={f.image}
                alt={f.airline}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{f.airline}</Typography>
                <Typography>
                  {f.from} → {f.to}
                </Typography>
                <Typography variant="subtitle1">${f.price}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" onClick={() => handleBook(f)}>
                  Book
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
