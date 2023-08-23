import { React } from "react";
import "./Contactame.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ContactameInfo from './ContactameInfo';
import ContactameForm from './ContactameForm';

function Contactame() {

  return (
    <Box className="Background1" sx={{ flexGrow: 1, py: 5 }}>
      <Grid container spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid item xs={12} md={6}>
          <Grid item sx={{ textAlign: "center", pl: 10, pt: 5 }} className="BackGroundContact">
           <ContactameInfo/>
          </Grid>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={6} sx={{ px: 5 }}>
          <ContactameForm/>
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
        <Grid item xs={12} md={12}>
          <Grid item className="BackGroundContact" sx={{ textAlign: "center", pt: 1 }}>
            <ContactameInfo/>
          </Grid>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={12}>
          <ContactameForm/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contactame;
