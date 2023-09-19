import "./App.css";
import { React } from "react";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "./ReponsiveAppBar";
import BannerPrincipal from "./Banner/Banner1";
import AboutMe from "./AboutMe/AboutMe";
import Skills from "./Experience/Skills";
// import Proyectos from "./Proyectos/Proyectos";
import Contactame from "./Contactame/Contactame";
import ItemCards from "./ItemsCards/ItemCards";
// import {Helmet} from "react-helmet";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <Box
      sx={{
        width: "auto",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pavel Zambrano G</title>
        <link rel="canonical" href="https://web-page-portafolio-pavelzago.vercel.app/" />
        <meta name="description" content="Portfolio Pavelzago" />
      </Helmet>
      </HelmetProvider>
      <div>
        <ResponsiveAppBar />
        <div>
          <BannerPrincipal />
        </div>
        <div>
          <ItemCards />
        </div>
        <div>
          <AboutMe />
        </div>
        <div>
          <Skills />
        </div>
        {/* <div>
          <Proyectos/>
        </div> */}
        <div>
          <Contactame />
        </div>
      </div>
    </Box>
  );
}

export default App;
