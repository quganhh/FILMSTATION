import React from "react";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  footer: {
    padding: "1rem",
    background: "#f1f1f1",
    textAlign: "center",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <CardMedia
        component="img"
        height="100"
        src="/ftpic.png"
        alt="Footer image"
      />
    </div>
  );
}

export default Footer;
