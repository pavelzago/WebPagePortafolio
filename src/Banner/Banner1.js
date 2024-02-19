import { React } from "react";
import "./Banner1.css";
import ImagenPrincipal from "../Images/FotoPrincipalBanner1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function BannerPrincipal() {
  const handleDownload = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1W0JCd_6Cf2mjn3na-XwFYWHH8qpbRTmg/view?usp=sharing';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'HVPavelZambrano.pdf';
    link.click();
  };

  const handleDownloadEnglish = () => {
    const pdfUrl = 'https://drive.google.com/file/d/1CgUegVfgoYj9ZJi8URPo-MiOz16UloSN/view?usp=sharing';
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
              <Button variant="contained" onClick={handleDownload}>Download HV Español</Button>
              <Button variant="contained" onClick={handleDownloadEnglish}>Download HV English</Button>
              <Button variant="outlined" href="https://github.com/pavelzago" target="_blank">Projects</Button>
              <Button variant="outlined" href="https://drive.google.com/drive/folders/1tMwZZSiw6Yu6eHs87MzUOGwLaoT1i-9s?usp=drive_link" target="_blank">Certificates</Button>
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
              <Button sx={{fontSize: 10, pl:2 }} variant="outlined" href="https://drive.google.com/drive/folders/1tMwZZSiw6Yu6eHs87MzUOGwLaoT1i-9s?usp=drive_link" target="_blank">Certificates</Button>
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
