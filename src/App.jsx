import React from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  useMediaQuery,
  Container,
  Grid,
  Box,
} from "@mui/material";
import { deepOrange, grey } from "@mui/material/colors";
import AboutIcons from "./components/AboutIcons";
import { useMemo } from "react";
import StatBox from "./components/StatBox";
import CareerTimeline from "./components/CareerTimeline";
import SkillsList from "./components/SkillsList";
import DateTime from "./components/DateTime";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: prefersDarkMode ? deepOrange[900] : deepOrange[500],
          },
          background: {
            default: prefersDarkMode ? grey[900] : grey[100],
            paper: prefersDarkMode ? grey[800] : "#fff",
          },
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box textAlign="center" my={4}>
          <h1>Clarissa Fuller</h1>
          <img
            src="https://avatars.githubusercontent.com/u/141360959?v=4"
            alt="Clarissa Fuller"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
          <h2>web development, data analysis, and social media</h2>
          <DateTime />
          <StatBox />
          <h2>About Me</h2>
          <AboutIcons />
          <CareerTimeline />
          <h2>Skills</h2>
          <SkillsList />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
