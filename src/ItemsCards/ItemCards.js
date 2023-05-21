import { React } from "react";
import "./ItemCards.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import GTranslateIcon from "@mui/icons-material/GTranslate";

import Time from "../Images/Time.png";
import Projects from "../Images/Projects.png";
import English from "../Images/English.png";




function ItemCards() {
  return (
    <Box className="Background1" sx={{marginTop: '12px'}}>
      <Grid container spacing={2} sx={{textAlign: 'center', py:2, display: { xs: "none", md:"flex"}}}>
            <Grid item  xs={4}>
            <img className="imagenIcono" src={Time} alt="Icono reloj" />
            <h3>Experience</h3>
            <p>2 year</p>
            </Grid>

            <Grid item xs={4}>
              <img className="imagenIcono" src={Projects} alt="Icono proyectos" />
              <h3>Projects</h3>
              <p>8 Completed</p>
            </Grid>

            <Grid item xs={4}>
              <img className="imagenIcono" src={English} alt="Icono ingles" />
              <h3>English</h3>
              <p>B2 Advanced</p>
            </Grid>
        </Grid>

      {/* ________Responsive_______ */}

      <Grid container spacing={2} sx={{textAlign: 'center', pt:5, pb:10, pl:2, display: { xs: "flex", md:"none"}}}>
            <Grid item  xs={4}>
            <img className="imagenIconoMobile" src={Time} alt="Icono reloj" />
            <h4 className="tamañoTitulo">Experience</h4>
            <p className="pLetra">2 year</p>
            </Grid>

            <Grid item xs={4}>
              <img className="imagenIconoMobile" src={Projects} alt="Icono proyectos" />
              <h4 className="tamañoTitulo">Projects</h4>
              <p className="pLetra">8 Completed</p>
            </Grid>

            <Grid item xs={4}>
              <img className="imagenIconoMobile" src={English} alt="Icono ingles" />
              <h4 className="tamañoTitulo">English</h4>
              <p className="pLetra">B2 Advanced</p>
            </Grid>
        </Grid>
    </Box>
  );
}

export default ItemCards;
