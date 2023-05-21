import { React } from "react";
import "./ItemCards.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WorkIcon from "@mui/icons-material/Work";
import GTranslateIcon from "@mui/icons-material/GTranslate";


function ItemCards() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1, pt: 5 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid item xs={12} md={12}>
          <Grid
            sx={{ p: 5 }}
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <AccessTimeIcon />
              <h3>Experience</h3>
              <p>2 year</p>
            </Grid>
            <Grid item xs={4}>
              <WorkIcon />
              <h3>Projects</h3>
              <p>8 Completed</p>
            </Grid>
            <Grid item xs={4}>
              <GTranslateIcon />
              <h3>English</h3>
              <p>B2 Advanced</p>
            </Grid>
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
        <Grid item xs={12} md={12}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Grid sx={{ pl: 3, pr: 2 }}>
                <AccessTimeIcon />
                <h5>Experience</h5>
                <p>1 year</p>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <WorkIcon />
              <h5>Projects</h5>
              <p>8 Completed</p>
            </Grid>
            <Grid item xs={4}>
            <Grid sx={{ pr: 2 }}>
              <GTranslateIcon />
              <h5>English</h5>
              <p>B2 Advanced</p>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ItemCards;
