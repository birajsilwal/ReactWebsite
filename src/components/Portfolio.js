import React, { useState } from 'react' 
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioCss from "../css/Portfolio.module.css";
import "../css/Portfolio1.css";
import myLoboPic from "../static/cards/myLobo.png";
import SimpleTweets from "../static/cards/twitter.png";
import Flixster from "../static/cards/flixster.png";
import AuctionHouse from "../static/cards/AuctionHouse.png";
import AppLogo from "../static/cards/applogo.png";
import NasaMinds from "../static/cards/nasaminds.jpg";
import TweetSentiment from "../static/cards/sentiment_analysis.png";


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    margin: theme.spacing(3),
  },
  media: {
    height: 200,
  },
  parentGrid: {
    padding: theme.spacing(0),
    textAlign: 'left',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00000073',
  },
  rootModal: {
    width: '30%',
    background: '#FFF',
    padding: theme.spacing(2),
    borderRadius: 16,
  },
  lowerButton: {
    padding: theme.spacing(2, 0, 0, 0),
    display: 'flex',
    justifyContent: 'space-between',
  }
}))


export default function Portfolio(props) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <section className={PortfolioCss.bgDark1}>
        <Container>
          <h2 className={PortfolioCss.pLight1}>PORTFOLIO</h2>

          <Grid 
            className={classes.parentGrid}
            container 
            justify="center">

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={TweetSentiment}
                  title="TweetSentiment"
                />
                <CardContent>
                  <Typography variant="h5">
                    TweetSentiment 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Analysis of Tweet Sentiment with Natural Language Processing (NLP) and Naive Bayes.
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button 
                  onClick={handleOpen}
                  className={classes.button} 
                  size="small" 
                  color="primary">
                  Learn More
                </Button>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.rootModal}>
                        <Typography><strong>Type: </strong>Machine Learning</Typography>
                        <Typography><strong>Technologies used: </strong>Python, Sklearn, Naive Bayes classifier, Google colab, Pycharm, Anaconda, Matplotlib</Typography>

                        <div className={classes.lowerButton}>
                          <Button variant="outlined" >
                            <span style={{padding:(4)}}>Github</span> 
                          </Button>

                          <Button onClick={handleClose} variant="outlined">
                            <span style={{color:'red', padding:(4)}}>Close</span> 
                          </Button>
                        </div>            
                      </div>
                    </Fade>
                  </Modal>



              </CardActions>
            </Card>

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={NasaMinds}
                  title="ChiliHouse"
                />
                <CardContent>
                  <Typography variant="h5">
                    ChiliHouse
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    NASA-MINDS: Project Chili House ROS repo Conservatory for Healthy Ingestion on Long-Interval Human Occupied Unexplored Space Expeditions.
                    <br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className={classes.button} size="small" color="primary">
                  Learn More
                </Button>

                {/* <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className={classes.rootModal}>
                        <Typography><strong>Type: </strong>Simulation and Research</Typography>
                        <Typography><strong>Technologies used: </strong>Python, Robot Operating System (ROS), Arduino, Gazebo simulator</Typography>

                        <div className={classes.lowerButton}>
                          <Button href="https://github.com/BCLab-UNM/ChiliHouse"  target="_blank" variant="outlined" >
                            <span style={{padding:(4)}}>Github</span> 
                          </Button>

                          <Button onClick={handleClose} variant="outlined">
                            <span style={{color:'red', padding:(4)}}>Close</span> 
                          </Button>
                        </div>            
                      </div>
                    </Fade>
                  </Modal> */}
              </CardActions>
            </Card>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={AppLogo}
                  title="UNM succESS"
                />
                <CardContent>
                  <Typography variant="h5">
                    succESS
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    SSR PWA App developed for UNM Engineering Student Success Center.
                    <br></br>
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className={classes.button} size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={AuctionHouse}
                  title=">Distributed Auction"
                />
                <CardContent>
                  <Typography variant="h5">
                    Distributed Auction
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Distributed Auction is the simulation of a system of multiple auction houses selling items, multiple agents buying items, and a bank to keep track of everyone’s funds.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={myLoboPic}
                  title="Online Marketplace"
                />
                <CardContent>
                  <Typography variant="h5">
                    Online Marketplace
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    An online marketplace for students to buy and sell items with other college students.
                    <br></br>
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={SimpleTweets}
                  title="SimpleTweets"
                />
                <CardContent>
                  <Typography variant="h5">
                    SimpleTweets
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    SimpleTweet is an android app that allows a user to view user's Twitter timeline. The app utilizes "Twitter REST API".
                    <br></br>
                    <br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>


            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={Flixster}
                  title="Flixster"
                />
                <CardContent>
                  <Typography variant="h5">
                    Flixster
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  Flixter is an app that allows users to browse movies from the "The Movie Database API".
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

          
          </Grid>
        </Container>


{/* 
        <div class="container">
          <div class="row"> */}

            {/* UNM succESS */}
            {/* <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top portfolio-img"
                  src={AppLogo}
                  alt=""
                  width="100%"
                ></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">UNM succESS</p>
                    <p class="card-text">SSR PWA App developed for UNM Engineering Student Success Center.</p>
                    <p class="card-text"><strong>Technologies used:</strong> Nuxt.js(Vue.js), Keystone.js MongoDB, GraphQL, AWS EC2, and Bootstrap.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Button variant="primary" size="sm" onClick={(handleShow)}>
                          View
                        </Button>
                      </div>
                      <small class="card-date">May 2020 - Present</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Auction House */}
            {/* <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top portfolio-img"
                  src={AuctionHouse}
                  alt=""
                  width="100%"
                ></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">Distributed Auction</p>
                    <p class="card-text">Distributed Auction is the simulation of a system of multiple auction houses selling items, multiple agents buying items, and a bank to keep track of everyone’s funds. </p>
                    <p class="card-text"><strong>Technologies used:</strong> JAVA Socket, Synchronization, Thread</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Button variant="primary" size="sm" onClick={(handleShow)}>
                          View
                        </Button>
                      </div>
                      <small class="card-date">May 2020</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}


            {/* myLobo */}
            {/* <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top portfolio-img"
                  src={myLoboPic}
                  alt=""
                  width="100%"
                ></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">Online Marketplace</p>
                    <p class="card-text">Social media and marketplace app designed for college students.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Button variant="primary" size="sm" onClick={(handleShow)}>
                          View
                        </Button>
                      </div>
                      <small class="card-date">Nov 2019 - Jan 2020</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* SimpleTweets */}
            {/* <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top portfolio-img" src={SimpleTweets} alt="" width="100%"></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">SimpleTweets</p>
                    <p class="card-text">SimpleTweet is an android app that allows a user to view user's Twitter timeline. The app utilizes "Twitter REST API".</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Button variant="primary" size="smm" onClick={handleShow}>
                          View
                        </Button>
                      </div>
                      <small class="card-date">Nov 2019</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Flixster */}
            {/* <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top portfolio-img" src={Flixster} alt="" width="100%"></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">Flixster</p>
                    <p class="card-text">Flixter is an app that allows users to browse movies from the "The Movie Database API".</p>
                    <p class="card-text"><strong>Open-source libraries used: </strong>Android Async HTTP and Glide.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <Button variant="primary" size="smm" onClick={handleShow}>
                          View
                        </Button>
                      </div>
                      <small class="card-date">Oct 2019</small>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

{/*             
            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>myLobo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                This is an app that failed me!!!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal centered show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>SimpleTweets</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Sorry, modal is currently not working.
                Please visit my github for more detail. 
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal> */}
{/* 
          </div>
        </div> */}


      </section>
    </div>
  );
}
