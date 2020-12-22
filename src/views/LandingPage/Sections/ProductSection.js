import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Chat from "@material-ui/icons/Chat";
import Fingerprint from "@material-ui/icons/Fingerprint";
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
            In this section, i will talk about my expertise and projects, new technologies i used like for example Reactjs,React Native, Angular-cli , Nodejs, MongoDb GraphQl Api, Symfony, CodeIgniter,Electron ...           {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Chat Apps : ChatKit"
                description="If you have a new chat App idea and you don't know how to bring it to life, we are here to build it for you."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="New technologies means new authentication ways used in endless application offering to user a permanent security solution."
              icon={Fingerprint}
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
