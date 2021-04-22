import React from 'react';
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
  const {Title,image} = props;
 const  handleclick= function(){
  localStorage.setItem('key',Title);
       window.open('/article');
       console.log(  localStorage.getItem(Title))
      
  }
     const classes = useStyles();
  
    return(
         <div className={classes.carts}>
         <img alt="react IA article health Tech" src={props.image} style={{width:'100%',borderBottom:'2px solid grey',borderTopLeftRadius:'5rem',
          height:'18rem',boxSizing:'border-box'}}/>
          <h3>{props.Title}</h3>
          <p><span style={{fontSize:'18px',marginLeft:'8px',marginTop:'-6em',fontFamily:'forte',fontweight:'normal',color:'grey',textAlign:'left',}}>Articles about how to Deal with pandemic using new innovations</span>&nbsp;
          <a href="https://github.com/nouha18/SuspenseApi" style={{color:'pink',fontSize:'21px',cursor:'pointer'}}  target="_blank" rel="noreferrer noopener">Learn More {'-->'}</a></p>
           
          <div className={classes.content}>
          <IconButton className={classes.iconbutton} aria-label="add to favorites" onClick={handleclick}>
            Click
          </IconButton>
          <br/>
          <br/>
            <a href="https://github.com/nouha18/SuspenseApi">Read More...</a>
            
            <Link
              className="navbar-item"
              to={{pathname:"/art",
               aboutProps:{name:localStorage.getItem("key")}}}
            >
              &nbsp;by Nouha
            </Link>
            </div>
            </div>
    );
}

