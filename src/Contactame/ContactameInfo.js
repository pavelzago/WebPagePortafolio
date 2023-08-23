import { React } from "react";
import "./Contactame.css";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function ContactInfo() {
  return (
    <>
      <h1>Talk with me</h1>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon className="ColorIconContact" />
          </ListItemIcon>
          <ListItemText primary="pavelzambranogomez@gmail.com" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <WhatsAppIcon className="ColorIconContact" />
          </ListItemIcon>
          <ListItemText>
            <a
              className="OffDecotaror"
              href="https://wa.me/+573167502508"
              target="_blank"
            >
              WhatsApp
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <LinkedInIcon className="ColorIconContact" />
          </ListItemIcon>
          <ListItemText>
            <a
              className="OffDecotaror"
              href="https://www.linkedin.com/in/pavel-zambrano-gomez/"
              target="_blank"
            >
              LinkedIn
            </a>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <GitHubIcon className="ColorIconContact" />
          </ListItemIcon>
          <ListItemText>
            <a
              className="OffDecotaror"
              href="https://github.com/pavelzago"
              target="_blank"
            >
              GitHub
            </a>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
}

export default ContactInfo;
