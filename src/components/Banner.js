import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCss from "../css/Home.module.css";
import "../css/Home.css";
import ro from "../static/robot2.png";
import {Spring} from 'react-spring/renderprops'

export default function Banner() {

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
              config={{ duration: 1000 }}>
              

              { props => (
                <div class="col-lg-6">
                  <div style={props}>
                    <img src={ro} alt=""></img>
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
                      <h1 class="banner-title">Hi! I'm Biraj.</h1>
                      <h4 className={HomeCss.bannerCaption}>Computer Science + Business Management @ UNM '22</h4>
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
