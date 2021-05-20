import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import programmer1 from "../static/programmer1.svg";
import {Spring} from 'react-spring'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hi: {
    [theme.breakpoints.up('md')]: {
      fontSize: '5em',
    },
  },
  bannerCaption: {
    fontWeight: '300',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
}))

export default function Banner() {

  const classes = useStyles();

  const HiMessageAlign = {
    alignSelf: "center"
  };

  return (
    <div>
      {/* top banner with picture */}
      <div class="container-fluid">
        <div class="banner">
          <div class="row">

            <Spring
              from={{ opacity: 0, marginTop: -500 }}
              to={{ opacity: 1, marginTop: 0 }} 
              config={{ duration: 1500 }}>
              

              { props => (
                <div class="col-lg-6">
                  <div style={props}>
                    <img src={programmer1} alt=""></img>
                  </div>
                </div>
              )}
            </Spring>               

            <Spring 
              from={{ opacity: 0, marginRight: -500 }}
              to={{ opacity: 1, marginRight: 0 }} 
              config={{ delay: 1000 }}>

              { props => (
                <div style={HiMessageAlign} class="col-lg-6">
                  <div style={props}>
                    <div class="banner-content">
                      <h1 className={classes.hi}>Hi! I'm Biraj.</h1>
                      <h4 className={classes.bannerCaption}>Computer Science + Economics @ UNM '22</h4>
                    </div>
                  </div>
                </div>
              )}
            </Spring>          

          </div>
        </div>
      </div> 
    </div>
  )
}
