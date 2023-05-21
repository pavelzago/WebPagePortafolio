import { React } from "react";
import "./Contactame.css";
import Card from "../AboutMe/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Contactame() {
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
          <Box sx={{ pl: 10, pt: 5 }}>
            <h1>Talk with me</h1>
            <Card
              title={"Email"}
              description={"pavelzambranogomez@gmail.com"}
              icon={<MoreVertIcon />}
            />
          </Box>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={6}>
          <Box sx={{ pl: 10, pt: 5 }}>
            <h1> Contact Me</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {" "}
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Box>
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
        <Grid item xs={12} md={12}>
          <Box sx={{ pl: 2, pt: 2 }}>
            <h1>Talk with me</h1>
            <Card
              title={"Email"}
              description={"pavelzambranogomez@gmail.com"}
              icon={<MoreVertIcon />}
            />
          </Box>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid item xs={12} md={12}>
          <Box sx={{ pl: 4, pt: 2 }}>
            <h1> Contact Me</h1>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                {" "}
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                />
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contactame;
