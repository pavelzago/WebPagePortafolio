import { React, useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { amber, blueGrey} from '@mui/material/colors';


export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'light'
          ? {
            main:'#fff'
            }
          : {
            main: amber[300],
            }),
      },
      ...(mode === 'dark' && {
        background: {
          default: "#141F2D",
          paper: "#141F2D",
        },
      }),
      text: {
        ...(mode === 'light'
          ? {
              primary: blueGrey[800],
              secondary: blueGrey[800],
            }
          : {
              primary: '#fff',
              secondary: blueGrey[500],
            }),
      },
    },
  });

  
function Home({ children }) {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );

  const theme = createTheme(getDesignTokens(mode));
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default Home;
