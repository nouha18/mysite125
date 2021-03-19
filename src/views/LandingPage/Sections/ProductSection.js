import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MobileFriendlySharp from "@material-ui/icons/MobileFriendlySharp";
import Computer from "@material-ui/icons/Computer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";
import InfoArea from "../../../components/InfoArea/InfoArea.js";
import styles from "./productStyle.js";


const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk projects</h2>
          <h5 className={classes.description}>
           In terms of ISO 56002:2019, i will talk about my expertise and projects, new technologies i used like for example Reactjs,React Native, Angular-cli , Nodejs, MongoDb GraphQl Api, Symfony, CodeIgniter,Electron ...           {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Web Application"
                description="We are building new uptodated responsive websites with UI/UX approved designs and animations."
              icon={Computer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mobile And SmartWatches Apps"
              description="New technologies means innovation ISO 56002:2019 with fingerprint, face detections and HealthTech wear Tech."
              icon={MobileFriendlySharp}
              iconColor="danger"
              vertical
            /> 
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="User Security"
              description="Data security refers to the process of protecting data from unauthorized access throughout its lifecycle."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
