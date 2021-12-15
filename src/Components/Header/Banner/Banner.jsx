import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from './Banner.module.css'
import Button from '../../Button/Button'
import NextButton from '../../Button/NextButton'
import PreviousButton from "../../Button/PreviousButton";






const Banner = () => {
   
  const settings = {
    arrows: true,
    // autoplay: true,
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    nextArrow: <NextButton/>,
    prevArrow: <PreviousButton />,
  };
 


  return (
    <>
      <Slider {...settings} className="w-100" id="heroBanner">
        <div id="slider1" className={styles.slider1_bg}>
          <Container id="slider1Content">
            <Row>
              <Col className={styles.slider1_innerContent}>
                <img
                  src="/assets/images/icons/icon-img/1.png"
                  alt=""
                  className="d-inline-block me-2"
                />
                <small>100% genuine Products</small>
                <h1 className="display-3">Tasty and Healthy Organic Food</h1>
                <p className="my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium fugit facilis placeat quaerat, quam expedita?
                </p>
                <Button text={"Explore The Products"}></Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>
      <div id="slider2" >
          {/*  <Container id="slider2Content">
            <Row>
              <Col></Col>
              <Col className={styles.slider2_innerContent}>
                <img
                  src="/assets/images/icons/icon-img/1.png"
                  alt=""
                  className="d-inline-block me-2"
                />
                <small>100% genuine Products</small>
                <h1 className="display-3">Tasty and Healthy Organic Food</h1>
                <p className="my-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium fugit facilis placeat quaerat, quam expedita?
                </p>
                <Button text={"Explore The Product"}></Button>

              
              </Col>
            </Row>
          </Container>  */}
        </div> 
      </Slider>
    </>
  );
};

export default Banner;
