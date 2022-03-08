import React from "react";

import "./App.css";
import MenuForm from "./menu";
import list from "./image/image";


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
              
            </figure>{" "}
          </Grid>{" "}
          <Grid xs={8} className={classes.storeInfo}>
            <h4> </h4> <h4> </h4>{" "}
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
