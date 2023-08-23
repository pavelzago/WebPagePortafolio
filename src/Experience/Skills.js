import { React } from "react";
import "./Skills.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CardWicon from "./CardWicon";


const data = [
  { icon: <CheckCircleIcon />, label: 'Critical Thinking', id:0 },
  { icon: <CheckCircleIcon />, label: 'Communication Skills', id:1 },
  { icon: <CheckCircleIcon />, label: 'Liderazgo', id:2 },
  { icon: <CheckCircleIcon />, label: 'Leadership', id:3 },
  { icon: <CheckCircleIcon />, label: 'Empathy', id:4 },
  { icon: <CheckCircleIcon />, label: 'Team Work', id:5 },
  { icon: <CheckCircleIcon />, label: 'Creativity', id:6 },
  { icon: <CheckCircleIcon />, label: 'Troubleshooting', id:7 },
];

const data2 = [
  { icon: <CheckCircleIcon />, label: 'HTML, CSS', id:11 },
  { icon: <CheckCircleIcon />, label: 'Git, GitHub', id:22 },
  { icon: <CheckCircleIcon />, label: 'JavaScript', id:33 },
  { icon: <CheckCircleIcon />, label: 'ReactJS', id:44 },
  { icon: <CheckCircleIcon />, label: 'NodeJS', id:55 },
  { icon: <CheckCircleIcon />, label: 'DataBases', id:66 },
  { icon: <CheckCircleIcon />, label: 'Scrum', id:77 },
  { icon: <CheckCircleIcon />, label: 'Figma', id:88 },
];



function Skills() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1, pb: 5 }}>
      <Grid container spacing={2} sx={{display: { xs: "none", md: "flex" }}}
      >
        <Grid  sx={{ width: "100%", maxWidth: 560}} item xs={12} md={6}>
          <Box sx={{ pt: 5, pl: 15}}>
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
