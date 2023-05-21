import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../static/assets/img/nav-icon1.svg";
import navIcon2 from "../static/assets/img/nav-icon2.svg";
import navIcon3 from "../static/assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span className="tagline">🚀</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pratyay-sarkar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/prasarCodes"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/__prasar__/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Made with ❤ in 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
