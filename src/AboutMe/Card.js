import { React } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";





function CardAboutMe(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      {props.icon}
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardAboutMe;
