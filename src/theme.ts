import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ab391",
    },
    secondary: {
      main: "#000",
    },
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    palette: {
      primary: {
        main: string;
      };
      secondary: { main: string };
    };
  }
  // allow configuration using `createTheme`
  //   interface ThemeOptions {
  //     palette?: {
  //       primary?: {
  //         main?: string;
  //       };
  //     };
  //   }
}
export default theme;
