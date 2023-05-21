import { React } from "react";
import "./Contactame.css";
import Card from "../AboutMe/Card";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from "@mui/material/Button";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


function Contactame() {
  return (
    <Box className="Background1" sx={{ flexGrow: 1, py: 5 }}>
      <Grid container spacing={2}  sx={{ display: { xs: "none", md: "flex" }}}>
        <Grid container xs={12} md={6}>
          <Grid className="BackGroundContact" item sx={{textAlign: 'center', pl: 10, pt: 5 }}>
            <div>
            <h1>Talk with me</h1>
            <List>
                <ListItem>
                  <ListItemIcon >
                    <EmailIcon className="ColorIconContact" />
                  </ListItemIcon>
                  <ListItemText
                    primary="pavelzambranogomez@gmail.com"/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WhatsAppIcon className="ColorIconContact"  />
                  </ListItemIcon>
                  <ListItemText>
                   <a className="OffDecotaror" href="https://wa.me/+573167502508" target="_blank">WhatsApp</a>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon className="ColorIconContact"  />
                  </ListItemIcon>
                  <ListItemText>
                   <a className="OffDecotaror" href="https://www.linkedin.com/in/pavel-zambrano-gomez/" target="_blank">LinkedIn</a>
                  </ListItemText>
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <GitHubIcon className="ColorIconContact" />
                  </ListItemIcon>
                  <ListItemText>
                   <a className="OffDecotaror" href="https://github.com/pavelzago" target="_blank">GitHub</a>
                  </ListItemText>
                </ListItem>

            </List>
            </div>
          </Grid>
        </Grid>

        {/*______________ mitad 2__________  */}

        <Grid container xs={12} md={6} sx={{px:5}}>
         
            <h1>Let's&ensp; </h1><h1 className="colorTalk"> talk</h1>
            <Grid container component="form" sx={{"& > :not(style)": { m: 1, width: "25ch" }}}
              noValidate
              autoComplete="off">
                  <Grid item xs={12} md={12}>
                  <p className="marginContact">If you want to contact me, fill out the form and i will get back to you soon.</p>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{width:"100%"}}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{width:"100%"}}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                {" "}
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  sx={{width:"100%"}}
                />
              </Grid>
              <Grid item xs={12} md={12} sx={{textAlign: 'right'}}>
              <Button variant="contained">Enviar</Button>
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
          <Box sx={{ pl: 2, pt: 2 }}>
            <h1>Talk with me</h1>
            <Card
              title={"Email"}
              description={"pavelzambranogomez@gmail.com"}
              icon={<EmailIcon />}
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
