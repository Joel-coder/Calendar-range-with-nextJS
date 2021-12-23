import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: red.A400,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      electricIndigo: "#5900FE",
      whiteSmoke: "#F3F3F3",
    },
    buttonPrimary: {
      main: "#4d96fb",
    },
    text: {
      heather: "#ADB5BD",
    },
  },
  secondary: {
    main: "#19857b",
  },
  error: {
    main: red.A400,
  },
  background: {
    default: "#fff",
  },
  buttonPrimary: {
    main: "#4d96fb",
  },
});

export default theme;
