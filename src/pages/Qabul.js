import React, { Component } from "react";
import Footer from "./Footer";
import "../css/qabul.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/about_us.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
export default class Qabul extends Component {
  render() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 993 },
          items: 1,
        },
        desktop: {
          breakpoint: { max: 992, min: 769 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 768, min: 567 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 566, min: 0 },
          items: 1,
        },
      };
    return (
      <div>
        <Navbar />
        {/* <div className="registratsiya"></div> */}
        <Carousel
                  className={styles.sliderHeader}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={false}
                  showDots={false}
                >
                  <div>
                    <img src='https://vestikavkaza.ru/upload/2016-02-25/ea3d4df1467f5cee7d2653de33b3ad64.jpg' className={styles.headerImage} />
                  </div>
                  <div>
                    <img src='https://static.sof.uz/crop/1/3/826__90_136688611.jpg' className={styles.headerImage} />
                  </div>
                  <div>
                    <img src='https://www.gazeta.uz/media/img/2018/01/hisJcS15154774245497_l.jpg' className={styles.headerImage} />
                  </div>
                  <div>
                    <img src='https://storage.kun.uz/source/1/F4BKZ2fMcNyGRzMtCQqYoFk-5P4oN2_V.jpg' className={styles.headerImage} />
                  </div>
                </Carousel>
<div className='anima'></div>
        <div className="information">
          {/* <div class="d-flex flex-column justify-content-center w-100 h-100">
            <div class="d-flex flex-column justify-content-center align-items-center"> */}
          <h1 className="text1">QABUL</h1>
          <Container className="info">
            <Row>
              <Col className="forInfo">
                <div>
                  <ul className="hujjat">
                    <li>Shaxisni tasdiqlovchi hujjat nusxasi</li>
                    <li>Ota-ona ish joyidan ma'lumotnoma</li>
                    <li>3x4 rasm 4 ta</li>
                  </ul>
                </div>
              </Col>
              <Col className="forFoto"></Col>
            </Row>
          </Container>
        </div>
        
        {/* </div>
          </div> */}
<div className='anima'></div>

        <Footer />
      </div>
    );
  }
}
