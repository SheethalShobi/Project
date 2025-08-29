import { useState } from "react";
import { Box, TextField, Button, Typography, Paper, Divider } from "@mui/material";

const flights = [
  { airline: "Delta", from: "NYC", to: "Paris", price: 500 },
  { airline: "Emirates", from: "NYC", to: "Dubai", price: 800 },
  { airline: "Qatar Airways", from: "London", to: "Doha", price: 450 },
];

export default function Recommendation() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = async () => {
    try {
      const res = await fetch(`/api/recommendation/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, flights }),
      });
      const data = await res.json();
      setResponse(data.recommendation);
    } catch (err) {
      console.error(err);
      setResponse("Failed to get recommendation.");
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: "center", fontWeight: 600 }}>
        Ask AI for Travel Recommendations
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
          Your Question:
        </Typography>
        <TextField
          label="Type your question..."
          variant="outlined"
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={handleAsk}
          sx={{ mt: 2, backgroundColor: "#1976d2", "&:hover": { backgroundColor: "#115293" } }}
        >
          Ask AI
        </Button>
      </Paper>

      {response && (
        <Paper elevation={3} sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
            AI Recommendation:
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {response}
          </Typography>
        </Paper>
      )}
    </Box>
  );
}
