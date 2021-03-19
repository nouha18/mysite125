/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/icons
import { Apps, CloudDownload, Instagram } from "@material-ui/icons";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "./headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
     
      <ListItem className={classes.listItem}>
        <Button
          href="https://github.com/nouha18"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Projects
        </Button>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip title="LinkedIn" 
             placement={window.innerWidth > 959 ? "top" : "left"}
             classes={{ tooltip: classes.tooltip }}
        >
          <IconButton aria-label="LinkedIn"  colorSecondary>
          <a rel="stylesheet" href="https://www.linkedin.com/in/nouha-mbarek-a01b561b0/" ><LinkedInIcon /></a>
            
          </IconButton>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
           <IconButton aria-label="Facebook" color='primary'>
           <a rel="stylesheet" href="https://www.facebook.com/Nouha.MB18" >
              <FacebookIcon/>
              </a>
          </IconButton>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
              <IconButton aria-label="Instagram">
              <a rel="stylesheet" href="https://www.instagram.com/nouhatou9545/?hl=fr" >
              <InstagramIcon/>
              </a>
              </IconButton>
               </Tooltip>
              </ListItem>
   
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}>
        
              <IconButton color="default" aria-label="Instagram">
              <a rel="stylesheet" href="https://twitter.com/pink8flower" >
              <TwitterIcon/>
              </a>
              </IconButton>
        
         </Tooltip>
      </ListItem>
    </List>
  );
}
