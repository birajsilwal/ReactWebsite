import React from 'react'
import GithubStatCss from "../css/GithubStat.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function GithubStat() {

  return (
    <section className= {`${GithubStatCss.bgLight1} py-5`}>
      <Container fluid="xl">
        <h2>GITHUB STATISTICS</h2>
        <br></br>
        <Row>
          <Col md={6} >
            <div>
              <img className={GithubStatCss.statImg} src={"https://github-readme-stats.vercel.app/api?username=birajsilwal&count_private=true&show_icons=true"} alt="Biraj's github stats" width="100%"></img>
            </div>
          </Col>
          
          <Col md={6} >
            <div>
              <img className={GithubStatCss.statImg} src={"https://github-readme-stats.vercel.app/api/top-langs/?username=birajsilwal&layout=compact"} alt="Biraj's github stats" width="100%"></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
