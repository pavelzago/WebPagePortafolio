import { React } from "react";
import "./AboutMe.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



function AboutMe() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            sx={{ pl: 10, pt: 5 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <h1> About Me</h1>
            <p className="ColorText">
              &lt;p&gt;Con capacidades para mejorar productos y procesos,
              incrementando la competitividad y productividad.&lt;/p&gt;
            </p>
          </Grid>
        </Grid>

        {/* _______2 parte_____ */}

        <Grid  item xs={12} md={6}>
          <Grid 
            sx={{ pl: 5, pr:8 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
          <div className="Divider">
            <p>
              Persona disciplinada, emprendedora, respetuosa y honesta. Con
              facultades para diseñar y/o desarrollar soluciones que combinen e
              integren el desarrollo de software y la automatización de
              procesos.
            </p>
            
            <p>
              Experiencia en desarrollo de proyectos de automatización y
              desarrollo web. Habilidad para el trabajo en equipo y excelente
              relaciones interpersonales , alto nivel de liderazgo orientado al
              logro de resultados.
            </p>

            </div>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Contact Me.</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      {/* ________Responsive_______ */}

      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "flex", md: "none" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            sx={{ pl: 4, pt: 2 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <h1> About Me</h1>
            <p className="ColorText">
              &lt;p&gt;Con capacidades para mejorar productos y procesos,
              incrementando la competitividad y productividad.&lt;/p&gt;
            </p>
          </Grid>
        </Grid>

        {/* _______2 parte_____ */}

        <Grid item xs={12} md={6}>
          <Grid
            sx={{ pl: 4, pr:4}}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <div className="DividerResponsive">
            <p>
              Persona disciplinada, emprendedora, respetuosa y honesta. Con
              facultades para diseñar y/o desarrollar soluciones que combinen e
              integren el desarrollo de software y la automatización de
              procesos.
            </p>
            <p>
              Experiencia en desarrollo de proyectos de automatización y
              desarrollo web. Habilidad para el trabajo en equipo y excelente
              relaciones interpersonales , alto nivel de liderazgo orientado al
              logro de resultados.
            </p>
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="contained">Contact Me.</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
