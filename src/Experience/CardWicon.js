import * as React from "react";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItem } from "@mui/material";


export default function NestedList(props) {
  return (
    <List
      sx={{ width: "100%", maxWidth: 560, bgcolor: "#060F1A" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {props.data.map((item) => (
        <ListItem key={item.id}> 
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label}/>
        </ListItem>
      ))}
    </List>
  );
}
