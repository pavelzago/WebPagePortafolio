import { React } from "react";
import "./Banner1.css";
import ImagenPrincipal from "../Images/FotoPrincipalBanner1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function BannerPrincipal() {
  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1P96ricGbHbs4Qad1zjD-P_KznBeSVSMz/view?usp=drive_link';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'HVPavelZambrano.pdf';
    link.click();
  };
  return (
    <Box className="Background" sx={{ flexGrow: 1, pt: 5 }}>
      <Grid container 
       sx={{
        display: { xs: "none", md: "flex" },
      }}
      >
        <Grid item xs={12} md={8} >
          <Box sx={{ pl: 30, pt: 10 }}>
            <h3> Hey There,</h3>
            <h1> I'm, Pavel Zambrano Gómez</h1>
            <h2> Front End Developer</h2>
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={handleDownload}>Download HV</Button>
              <Button variant="outlined" href="https://github.com/pavelzago" target="_blank">Projects</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <img className="ImagenPrincipal" src={ImagenPrincipal} alt="Ima" />
        </Grid>
      </Grid>

      <Grid container 
       sx={{
        display: { xs: "flex", md: "none" },
      }}
      >
        <Grid item xs={12} md={12} >
          <Box sx={{ pl: 4, pt: 5, pr:4 }}>
            <h3> Hey There,</h3>
            <h1> I'm, Pavel Zambrano Gómez</h1>
            <h2> Front End Developer</h2>
            <Stack spacing={2} direction="row">
              <Button sx={{fontSize: 11 }} variant="contained" onClick={handleDownload}>Download HV</Button>
              <Button sx={{fontSize: 11 }} variant="outlined" href="https://github.com/pavelzago" target="_blank">Projects</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} mt={5}>
          <img className="ResponsiveIma" src={ImagenPrincipal} alt="ImaResponsive" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BannerPrincipal;
