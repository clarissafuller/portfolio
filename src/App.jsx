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
import { useMemo } from "react";
import StatBox from "./components/StatBox";
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
          <StatBox />
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
