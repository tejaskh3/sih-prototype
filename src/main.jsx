import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    white: { main: "#ffffff" },
    primary: { main: "#ffba09" },
    secondary: { main: "#3f43c8" },
    secondaryLight: { main: "#4c50e0" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
