import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // пока просто светлая тема
    primary: {
      main: "#1976d2", // синий цвет Material UI
    },
    secondary: {
      main: "#9c27b0", // фиолетовый
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
  },
});

export default theme;
