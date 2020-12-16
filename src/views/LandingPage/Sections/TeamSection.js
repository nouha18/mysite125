import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import Button from "../../../components/CustomButtons/Button.js";
import Card from "../../../components/Card/Card.js";
import CardBody from "../../../components/Card/CardBody.js";
import CardFooter from "../../../components/Card/CardFooter.js";

import styles from "./teamStyle.js";

import team1 from "./avatar.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here we go, let me introduce mySelf</h2>
      <div>
     
        <GridContainer justify="center">
          <GridItem  xs={12} sm={12} md={8}>
            <Card plain>
              <GridItem xs={12} sm={6} md={8} center className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Nouha Mb
                <br />
                <small className={classes.smallTitle}> FullStack Developer</small>
                <br />
                <small className={classes.smallTitle}>Computing Science Engineer</small>
                <p className={classes.description}>
                This is a Landing page of my Portfolio i'am working,which illustrate my work and my level as an experimented fullstack js developer.
               <a href="http://www.vowedtocode.tn"> Website </a>
                  Follow my website for more informations.
                </p>
              </h4>
             
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="default"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="default"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="default"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
           </Card>
          </GridItem>
          <GridItem xs={6} md={6}>
   
           
          </GridItem>
          </GridContainer>
      </div>
    </div>
  );
}
