import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PortfolioCss from "../css/Portfolio.module.css";
import "../css/Portfolio1.css";
import myLoboPic from "../static/cards/myLobo.png";
import SimpleTweets from "../static/cards/twitter.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Portfolio() {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
      <section className={`${PortfolioCss.bgDark1} py-5`}>
        <div class="container">
          <h2 className={PortfolioCss.pLight1}>PORTFOLIO</h2>
          <br></br>
          <div class="row">


            {/* myLobo */}
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top portfolio-img"
                  src={myLoboPic}
                  alt=""
                  width="100%"
                ></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">myLobo</p>
                    <p class="card-text">Add some details here</p>
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
            </div>

            {/* SimpleTweets */}
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img class="bd-placeholder-img card-img-top portfolio-img" src={SimpleTweets} alt="" width="100%"></img>
                <div class="card-layer">
                  <div class="card-details">
                    <p class="card-title">SimpleTweets</p>
                    <p class="card-text">Add some details </p>
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
            </div>

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
            </Modal>

            

          </div>
        </div>
      </section>
    </div>
  );
}
