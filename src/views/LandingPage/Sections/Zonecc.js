import React from 'react';
import Paper from '@material-ui/core/Paper';
// @material-ui/core components
import  CardZZ from "./cardZStyle.js";
import logo from '../../../assets/img/womentech.jpg';
import apiss from '../../../assets/img/suspense.png';
import vercel from '../vercel.png';
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(CardZZ);
export default function CardZ (){
    const classes = useStyles();
    return(
    <Paper className={classes.pcontainer} elevation={30}>
     <Cards Title={"La HealthTech 2021"} bio={"Once-in-a-Century Pandemic"}  image={logo} link={"/article"} />
    <Cards Title={"React Suspense Api"} bio={"DO you want to be Up to date?"} link={"https://github.com/nouha18/SuspenseApi"} image={apiss}/>
    <Cards Title={" Vercel Deployment"} bio={"This article is about best practice for a better deployment"} link={"https://versony.vercel.app/"} image={vercel}/>
    </Paper>
    );
}

