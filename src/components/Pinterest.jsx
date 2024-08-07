import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FeedIcon from "@mui/icons-material/Feed";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import PodcastsIcon from "@mui/icons-material/Podcasts";

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

export default function Pinterest() {
  const cardsData = [
    {
      title: "Avg Monthly Pinterest Impressions",
      number: 22000,
      detail: "clicks, views, and more",
    },
    {
      title: "Avg Monthly Pinterest Engagement",
      number: 2000,
      detail: "mostly clicks and saves",
    },
    {
      title: "Avg Monthly Pinterest Saves",
      number: 300,
      detail: "saves",
    },
    {
      title: "Avg Monthly Youtube Views",
      number: 3500,
      detail: "long and short form content",
    },
    {
      title: "Avg Monthly Content Videos Made",
      number: 35,
      detail: "across all socials and clients",
    },
    {
      title: "Avg Monthly Youtube Watch Time",
      number: 21,
      detail: "hours",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        <PinterestIcon sx={{ fontSize: 40 }} />
        <FeedIcon sx={{ fontSize: 40 }} />
        <CameraAltIcon sx={{ fontSize: 40 }} />
        <VideoCameraFrontIcon sx={{ fontSize: 40 }} />
        <PodcastsIcon sx={{ fontSize: 40 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 4,
          flexWrap: "wrap",
        }}
      >
        {cardsData.map((card, index) => (
          <Box key={index} sx={{ maxWidth: 275 }}>
            <CustomCard
              title={card.title}
              number={card.number}
              detail={card.detail}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
