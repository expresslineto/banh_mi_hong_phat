import React from "react";

import "./App.css";
import MenuForm from "./menu";
import list from "./image/image";

import logo from "./image/logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  img: {
    margin: 0,
    display: "flex",
    maxWidth: "100px",
    backgroundColor: "white",
    alignItems: "center",
  },
  storeInfo: {
    fontFamily: "Helvetica",
    fontStyle: "italic",
    color: "#13274b",
    
  },
}));

function App() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div className="App">
      <Paper>
        <Grid container>
          <Grid xs={4}>
            <figure className={classes.img}>
              <img className={classes.img} src={logo} alt="store" />
            </figure>{" "}
          </Grid>{" "}
          <Grid xs={4} className={classes.storeInfo}>
            <h5>phone: 408-223-6828 | 408-508-8179 </h5>
            <h5>address: 1928 Aborn Road , San Jose, CA 95121</h5>{" "}
          </Grid>
          <Grid xs={4} className={classes.storeInfo}>
            <h4> Open 7 Days A Week</h4>
            <h4> 6:00am - 8:00pm</h4>
          </Grid>
        </Grid>
      </Paper>

      {list.map((item, index) => {
        return <MenuForm id={index} itemsImage={item.itemsImage} />;
      })}
    </div>
  );
}

export default App;
