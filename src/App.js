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


function App() {
  return (
    <Box
      sx={{
        width: "auto",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <div>
        <ResponsiveAppBar />
        <div>
          <BannerPrincipal />
        </div>
        <div>
          <ItemCards/>
        </div>
        <div>
          <AboutMe/>
        </div>
        <div>
          <Skills/>
        </div>
        {/* <div>
          <Proyectos/>
        </div> */}
        <div>
          <Contactame/>
        </div>

      </div>
    </Box>
  );
}

export default App;
