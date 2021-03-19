import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import styles from "./workStyle.js";
const useStyles = makeStyles(styles);
export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Mission</h2>
          <h4 className={classes.description}>
            Not eating as well !! As a computing science engineer and a developer, my mission is to help trainers and users to learn coding very well.
            That's all i wish.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
