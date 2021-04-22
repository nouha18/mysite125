import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
//import classNames from "classnames";

import  CardZZ from "./cardZStyle.js";
import InfoIcon from '@material-ui/icons/Info';
// @material-ui/core components
import { NavLink,Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(CardZZ);



export default function Cards (props){
  const {Title,image,bio,link} = props;

 const  handleclick= function(){
  localStorage.setItem('key',Title);
       window.open(props.link);
       console.log(  localStorage.getItem(Title))
 }
     const classes = useStyles();
    return(
         <div className={classes.carts}>
         <img alt="react IA article health Tech" src={props.image} style={{width:'100%',borderBottom:'2px solid grey',borderTopLeftRadius:'5rem',
          height:'18rem',boxSizing:'border-box'}}/>
          <h3>{props.Title}</h3>
          <p><span style={{fontSize:'18px',marginLeft:'8px',marginTop:'-9em',fontFamily:'forte',fontweight:'normal',color:'grey',textAlign:'left',}}>{props.bio}</span>&nbsp;
          <a href="http://vowedtocode.my.p4d.click/article" style={{color:'pink',fontSize:'21px',cursor:'pointer'}}  target="_blank" rel="noreferrer noopener">Learn More {'-->'}</a></p>
          <div className={classes.content}>
          <IconButton className={classes.iconbutton} aria-label="add to favorites" onClick={handleclick}>
            Click
          </IconButton>
          <br/>
          <br/>
          <p>Read More...</p>
          <Link
              className="navbar-item"
              to={{pathname:props.link,
               aboutProps:{name:localStorage.getItem("key")}}}
            >
              **by Nouha**
            </Link>
            </div>
            </div>
    );
}

