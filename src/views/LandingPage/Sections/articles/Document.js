import React from 'react';

import shareImage from '../m4.jpg';
//import classNames from "classnames";
import {FacebookShareButton,
     TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
    PinterestIcon,
   } from "react-share";
import  CardZZ from "../cardZStyle.js";
import logo from '../../../../assets/img/womentech.jpg';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(CardZZ);
export default function Article ({Title}){
const classes = useStyles();
let date = new Date().toLocaleDateString();
 
        return(
          <div className={classes.boxgrid}>
          <div className={classes.boxcontent}>
          <figure>
          <img alt="react IA article health Tech" src={logo}  className={classes.images}/>
          <figcaption className={classes.figcaptions}>
          <span>Article&nbsp;{":"}</span>{Title}
          <div>
          <FacebookShareButton
            quote={"facebook"}
            windowWidth={1000}
            windowHeight={730}
            hashtag="#HealthTech-who-Organisation"
            className={classes.socialMediaButton}
            url={"https://www.facebook.com/?ref=tn_tnmn"}>       
            <FacebookIcon
            size={"45px"}
            />
            </FacebookShareButton>
            <TwitterShareButton
            title={"twitter"}
            hashtag="#HealthTech-who-Organisation"
            className={classes.socialMediaButton}>
            <TwitterIcon
            size={"45px"}
            />
          </TwitterShareButton>

          <WhatsappShareButton
            title={"what'sup"}
            url={"https://www.whatsapp.com/"}
            hashtag="#HealthTech-who-Organisation" 
            separator=":: "
            windowWidth={750}
            windowHeight={600}
            className={classes.socialMediaButton}>
           <WhatsappIcon size={"45px"} />
          </WhatsappShareButton>

          <LinkedinShareButton
            title={"linkedin"}
            hashtag="#HealthTech"
            url={"https://www.linkedin.com/feed/"}
            windowWidth={750}
            windowHeight={600}
            className={classes.socialMediaButton}
           >
            <LinkedinIcon
              size={'45px'}
            />
          </LinkedinShareButton>
          <PinterestShareButton
            url={String(window.location)}
            media={`${shareImage}`}
            windowWidth={1000}
            windowHeight={730}
            className={classes.socialMediaButton}
          >
            <PinterestIcon size={'45px'} />
          </PinterestShareButton>
          </div>
          </figcaption>
          </figure>
          <div className={classes.documentation}>
            <h5>{"04/22/2021"}</h5>
          <h1>Why we must bet on healthTech !??</h1>
           <p>Health Technologies is defined as the medical and surgical procedures used in the prevention, diagnosis, treatment and rehabilitation of desease.</p>
           <p>Many countries regulate pharmaceuticals,medical devices and equipment by law.</p>
           <p>This legislation concerns safety and efficacy, where the risk of technology is measured and that it actually does what is supposed to do with no % of deviations from the result.</p>
           <p>For all other technologies such as medical and surgical procedures, there are generally no regulations.</p>
           <h1>WHat about Development {"&"} Dissemination !?</h1>
           <p> Demand and supply of technology determine both the development and dissemination of new health technology.</p>
             <p>The forces behind technological changes are many including wishes to provide health benefits to the patients.</p>
               <p>This multidisciplinary research recognise no borders between countries.</p>
               <p>The biomedical industry is also increasingly multinational operating and competing in global markets.</p>
               <p>It may take several years to develop a new engine but once it is done, the tech is immidiately available in the World.</p>
                <p>To a certain extends, the governments may control the development of health technology by funding and coordinating medical research and there by determine the number of health proffessionals.</p>
                <p>Yet, their ability to influence throught market forces seems more feasible through exercising some control over the dissemination of technology.</p>
                 <h1>What can We can do, as Engineers ?!</h1>
                 <p>Considering the situation,we don't have the choice but trying to develop and integrate technologies in our daily life in order to prevent pandemic desaster so, we can accelerate health development process. </p>  
           <p><i class="fa fa-github" aria-hidden="true"></i></p>
          </div>
          <div className={"footDocument"}>
          </div>
         </div>
     
     </div>
    );
}


