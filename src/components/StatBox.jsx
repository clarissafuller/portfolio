import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomCard({ title, number, description, detail, buttonText }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {number}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          {detail}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{buttonText}</Button>
      </CardActions>
    </Card>
  );
}

export default function OutlinedCard() {
  // Example data for multiple cards
  const cardsData = [
    {
      title: "Number of Github Projects",
      number: 6,
      description: "adjective",
      detail: "well meaning and kindly.",
      buttonText: "Learn More",
    },
    {
      title: "Number of Blog Posts",
      number: 12,
      description: "noun",
      detail: "a piece of writing published on the web.",
      buttonText: "Read More",
    },
    {
      title: "Number of Courses Completed",
      number: 8,
      description: "noun",
      detail: "completed educational courses.",
      buttonText: "View Details",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap", // Allows the cards to wrap on smaller screens
        gap: 2,
        minHeight: "100vh",
      }}
    >
      {cardsData.map((card, index) => (
        <Box key={index} sx={{ maxWidth: 275 }}>
          <CustomCard
            title={card.title}
            number={card.number}
            description={card.description}
            detail={card.detail}
            buttonText={card.buttonText}
          />
        </Box>
      ))}
    </Box>
  );
}
