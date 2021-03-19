import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "../../components/Parallax/Parallax.js";
import logo from './landing-bg.jpg';
import styles from "./Sections/landingPageStyle.js";
// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  //const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent***"
        routes={dashboardRoutes}
        brand="Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}/>
      <Parallax filter image={logo}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h1 className={classes.title}>We Code, So we exist.</h1>
                 <br/><h4>My personal philosophy when it comes to learning</h4>
                 <h4> How to code is closely related to self motivation. </h4>
                   <h4>By keeping things positive,we will learn more and build our future together. </h4>
                <br />

              <Button
                color="rose"
                size="lg"
                href="https://www.youtube.com/channel/UCsnFKMn8xNBcKydSAh8XigA?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                My Youtube Channel
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
