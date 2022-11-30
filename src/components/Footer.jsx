import React from "react";
import { NavLink } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="m-0 px-0 mt-auto">
      <Row
        className="d-flex justify-content-center "
        style={{ backgroundColor: "#FAA916" }}
      >
        <Col className="d-flex justify-content-center align-items-center">
          <img src="/img/icons/logo.png" alt="logo.png" width={110} />
        </Col>
        <Col>
          <Row className="g-3 mt-3 mb-2 d-none d-md-block">
            <Row className="g-3">
              <a className="" href="/Contact">
                Contacto
              </a>
              <a className="" href="/Favorites">
                Favoritos
              </a>
              <a className="" href="/AboutUs">
                Nosotros
              </a>
            </Row>
          </Row>
        </Col>
        <Col>
          <Row className="mt-3  mb-2 d-none d-md-block">
            <Row className="g-3">
              <a href="">link4</a>
              <a href="">link5</a>
              <a href="">link6</a>
            </Row>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center mt-2 me-2">
          <div className="d-flex mt-3 mb-2">
            <h3 className="col">
              <a href="https://facebook.com" target={"_blank"} rel="noreferrer">
                <img
                  src="/img/icons/facebook.png"
                  alt="Icono Facebook"
                  width={45}
                />
              </a>
            </h3>
            <h3 className="col">
              <a
                href="https://instagram.com"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src="/img/icons/instagram.png"
                  alt="Icono Instagram"
                  width={45}
                />
              </a>
            </h3>
            <h3 className="col">
              <a href="https://twitter.com" target={"_blank"} rel="noreferrer">
                <img
                  src="/img/icons/twitter.png"
                  alt="Icono Twitter"
                  width={45}
                />
              </a>
            </h3>
            <h3 className="col">
              <a href="https://youtube.com" target={"_blank"} rel="noreferrer">
                <img
                  src="/img/icons/youtube.png"
                  alt="Icono Youtube"
                  width={45}
                />
              </a>
            </h3>
          </div>
        </Col>
      </Row>
      <Row>
        <h5 className="text-center bg-dark text-light py-2 m-0">
          &copy; Copyright 2022 RollingCode Films - All Rights Reserved
        </h5>
      </Row>
    </Container>
  );
};
export default Footer;
