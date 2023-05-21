import { React } from "react";
import "./Skills.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardWicon from "./CardWicon";


const data = [
  { icon: <CheckCircleIcon />, label: 'Pensamiento critico' },
  { icon: <CheckCircleIcon />, label: 'Habilidades de comunicación' },
  { icon: <CheckCircleIcon />, label: 'Liderazgo' },
  { icon: <CheckCircleIcon />, label: 'Cooperación' },
  { icon: <CheckCircleIcon />, label: 'Empatía' },
  { icon: <CheckCircleIcon />, label: 'Trabajo equipo' },
  { icon: <CheckCircleIcon />, label: 'Creatividad' },
  { icon: <CheckCircleIcon />, label: 'Solución de problemas' },
];

const data2 = [
  { icon: <CheckCircleIcon />, label: 'HTML, CSS' },
  { icon: <CheckCircleIcon />, label: 'Git, GitHub' },
  { icon: <CheckCircleIcon />, label: 'JavaScript' },
  { icon: <CheckCircleIcon />, label: 'ReactJS' },
  { icon: <CheckCircleIcon />, label: 'NodeJS' },
  { icon: <CheckCircleIcon />, label: 'DataBases' },
  { icon: <CheckCircleIcon />, label: 'Scrum' },
  { icon: <CheckCircleIcon />, label: 'Figma' },
];



function Skills() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1, pt: 5 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ pl: 5, pt: 5 }}>
            <h1> Soft Skills</h1>
            <CardWicon data={data}/>
          </Box>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={6}>
          <Box sx={{ pl: 5, pt: 5 }}>
            <h1> Technical Skills</h1>
            <CardWicon data={data2}/>
          </Box>
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
          <Box sx={{ pl: 2, pr:2 }}>
            <h1> Soft Skills</h1>
            <CardWicon data={data}/>
          </Box>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={6}>
          <Box sx={{ pl:2, pr:2 }}>
            <h1> Technical Skills</h1>
            <CardWicon data={data2}/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
