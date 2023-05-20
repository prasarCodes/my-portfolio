import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Tilt } from 'react-tilt';
import { useTypewriter } from "react-simple-typewriter";

export const Banner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Open-Source Contributor", "Gamer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 30,
    delaySpeed: 1000,
  })

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility> 
              {({ isVisible }) => (
                <div className={ isVisible ? "animate__animated animate__slideInLeft" : "animate__animated animate__slideOutLeft" }>
                  <h1>{`Hi! I'm Pratyay`} </h1>
                  <h3 className="txt-rotate">
                    <span className="wrap">{text}</span>
                  </h3>
                  <p>
                      
                  </p>
                  <a href='#connect'>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={ isVisible ? "header-img animate__animated animate__slideInRight" : "header-img animate__animated animate__slideOutRight" } 
                >
                  <Tilt options={{ max: 500 }}>
                  <img
                    src={headerImg}
                    alt="Header Img"
                  />
                  </Tilt>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
