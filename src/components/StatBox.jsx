import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CustomCard({
  title,
  number,
  description,
  detail,
  buttonText,
  scrollToId,
}) {
  const handleScroll = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
        <Button size="small" onClick={handleScroll}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
}

export default function OutlinedCard() {
  const cardsData = [
    {
      title: "Number of Github Projects",
      number: 6,
      description: "active",
      detail: "more details on ReadMe pages",
      buttonText: "Learn More",
      scrollToId: "career-timeline",
    },
    {
      title: "In the workforce",
      number: 7,
      description: "years",
      detail: "experienced and motivated",
      buttonText: "Read More",
      scrollToId: "career-timeline",
    },
    {
      title: "I've built or worked on",
      number: 10,
      description: "websites",
      detail: "from scratch or built better",
      buttonText: "View Details",
      scrollToId: "career-timeline",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: 2,
        py: 2,
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
            scrollToId={card.scrollToId}
          />
        </Box>
      ))}
    </Box>
  );
}
