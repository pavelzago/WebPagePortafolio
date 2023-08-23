import { React } from "react";
import "./AboutMe.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function AboutMe() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1, pb:6 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            sx={{ px: 25, pt: 5 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <h1> About Me</h1>
            <p className="ColorText">
              &lt;p&gt;With capabilities to improve products and processes, increasing competitiveness and productivity&lt;/p&gt;
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
            Disciplined, enterprising, respectful and honest person. With powers to design and/or develop solutions that combine and integrate software development and process automation.
            </p>
            
            <p>
            Experience in development of automation projects and web development. Ability for teamwork and excellent interpersonal relationships, high level of leadership oriented to achieve results.
            </p>

            </div>
         
            <Stack spacing={2} direction="row">
              <Button variant="contained" href="https://wa.me/+573167502508" target="_blank">Contact Me.</Button>
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
              &lt;p&gt;With capabilities to improve products and processes, increasing competitiveness and productivity.&lt;/p&gt;
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
            Disciplined, enterprising, respectful and honest person. With powers to design and/or develop solutions that combine and integrate software development and process automation.
            </p>
            <p>
            Experience in development of automation projects and web development. Ability for teamwork and excellent interpersonal relationships, high level of leadership oriented to achieve results.
            </p>
            </div>
            <Stack spacing={2} direction="row">
              <Button variant="contained" href="https://wa.me/+573167502508" target="_blank">Contact Me.</Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
