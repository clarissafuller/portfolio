import React from "react";
import Box from "@mui/material/Box";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import YardIcon from "@mui/icons-material/Yard";
import CookieIcon from "@mui/icons-material/Cookie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

export default function AboutIcons() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        mt: 2,
        flexWrap: "wrap", 
      }}
    >
      <DownhillSkiingIcon sx={{ fontSize: 40 }} />
      <YardIcon sx={{ fontSize: 40 }} />
      <CookieIcon sx={{ fontSize: 40 }} />
      <AutoStoriesIcon sx={{ fontSize: 40 }} />
      <SportsEsportsIcon sx={{ fontSize: 40 }} />
      <SportsVolleyballIcon sx={{ fontSize: 40 }} />
      <GolfCourseIcon sx={{ fontSize: 40 }} />
      <LocalAirportIcon sx={{ fontSize: 40 }} />
      <EmojiNatureIcon sx={{ fontSize: 40 }} />
    </Box>
  );
}
