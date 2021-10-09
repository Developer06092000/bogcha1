import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/educators.module.css";
import educators1 from "../img/educators1.jpg";
import educators2 from "../img/educators2.jpg";
import educators3 from "../img/educators3.jpg";
import educators4 from "../img/educators4.jpg";
import educators5 from "../img/educators5.jpg";
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default class Rahbariyat extends Component {
  state = {
    loader: true,
    raxbar: [],
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
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
        {this.state.loader ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={this.state.loader}
            />
          </div>
        ) : (
          <div>
            <header>
              <div className={styles.header}>
                <Navbar />
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
                    <img src={educators1} className={styles.headerImage} />
                  </div>
                  <div>
                    <img src={educators2} className={styles.headerImage} />
                  </div>
                </Carousel>
              </div>
            </header>

            <Container>
              <body>
                <div className={styles.body}>
                  <div data-aos="fade-up" className={styles.title}>
                    <h1>Rahbariyat</h1>
                  </div>
                  <Row>
                    <Col lg={12}>
                      <MDBCard
                        style={{ maxWidth: "100%", marginBottom: "60px" }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol md="6" className={styles.container}>
                            <MDBCardImage
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              src={educators3}
                              alt="..."
                              fluid
                            />
                            <div className={styles.contact}>
                              <div className={styles.text}>
                                <div className={styles.textbg}>
                                  <a href="+99893 555 00 55">
                                    <i class="fas fa-phone"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  {" "}
                                  <a href="megachild@gmail.com">
                                    <i class="fas fa-envelope-open"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  <a href="@megachuld">
                                    <i class="fas fa-paper-plane"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </MDBCol>
                          <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                            <MDBCardBody>
                              <MDBCardTitle>
                                <h1 className={styles.title1}>Direktor</h1>
                              </MDBCardTitle>
                              <MDBCardText>
                                <p>
                                  <strong>F.I.O: </strong>Abdurahmonova Shohida
                                  Abdumalik qizi
                                </p>
                                <p>
                                  <strong>Tug'ilgan sana: </strong>{" "}
                                  <i
                                    style={{ color: "#FF8080" }}
                                    class="fas fa-calendar-alt"
                                  ></i>{" "}
                                  06/12/1995
                                </p>
                                <p>
                                  <strong>Mutaxasislik: </strong>Ingliz tili
                                  mutaxasisi
                                </p>
                                <p>
                                  <strong>Oliygoh: </strong>Jahon tillari
                                  universiteti
                                </p>
                              </MDBCardText>
                              <MDBCardText>
                                <i
                                  style={{ color: "#FF8080" }}
                                  class="fas fa-quote-left"
                                ></i>
                                <br />
                                <small className="text-muted">
                                  Men "Erta bolalik ta'limi" darajasiga va
                                  ingliz tili bo'yicha yuqori darajadagi
                                  sertifikatga egaman. Men 2002 yildan beri
                                  bolalar bog'chasida Ingliz tili o'qituvchi
                                  sifatida ishlayman.{" "}
                                </small>
                                <br />
                                <i
                                  style={{ color: "#FF8080", float: "right" }}
                                  class="fas fa-quote-right"
                                ></i>
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </Col>
                    <Col lg={12}>
                      <MDBCard
                        style={{ maxWidth: "100%", marginBottom: "60px" }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                            <MDBCardBody>
                              <MDBCardTitle>
                                <h1 className={styles.title1}>
                                  Direktor o'rin bosari
                                </h1>
                              </MDBCardTitle>
                              <MDBCardText>
                                <p>
                                  <strong>F.I.O: </strong>Abdurahmonova Shohida
                                  Abdumalik qizi
                                </p>
                                <p>
                                  <strong>Tug'ilgan sana: </strong>{" "}
                                  <i
                                    style={{ color: "#FF8080" }}
                                    class="fas fa-calendar-alt"
                                  ></i>{" "}
                                  06/12/1995
                                </p>
                                <p>
                                  <strong>Mutaxasislik: </strong>Ingliz tili
                                  mutaxasisi
                                </p>
                                <p>
                                  <strong>Oliygoh: </strong>Jahon tillari
                                  universiteti
                                </p>
                              </MDBCardText>
                              <MDBCardText>
                                <i
                                  style={{ color: "#FF8080" }}
                                  class="fas fa-quote-left"
                                ></i>
                                <br />
                                <small className="text-muted">
                                  Men "Erta bolalik ta'limi" darajasiga va
                                  ingliz tili bo'yicha yuqori darajadagi
                                  sertifikatga egaman. Men 2002 yildan beri
                                  bolalar bog'chasida Ingliz tili o'qituvchi
                                  sifatida ishlayman.{" "}
                                </small>
                                <br />
                                <i
                                  style={{ color: "#FF8080", float: "right" }}
                                  class="fas fa-quote-right"
                                ></i>
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                          <MDBCol md="6" className={styles.container}>
                            <MDBCardImage
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              src={educators4}
                              alt="..."
                              fluid
                            />
                            <div className={styles.contact}>
                              <div className={styles.text}>
                                <div className={styles.textbg}>
                                  <a href="+99893 555 00 55">
                                    <i class="fas fa-phone"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  {" "}
                                  <a href="megachild@gmail.com">
                                    <i class="fas fa-envelope-open"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  <a href="@megachuld">
                                    <i class="fas fa-paper-plane"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </Col>
                    <Col lg={12}>
                      <MDBCard
                        style={{ maxWidth: "100%", marginBottom: "60px" }}
                      >
                        <MDBRow className="g-0">
                          <MDBCol md="6" className={styles.container}>
                            <MDBCardImage
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              src={educators5}
                              alt="..."
                              fluid
                            />
                            <div className={styles.contact}>
                              <div className={styles.text}>
                                <div className={styles.textbg}>
                                  <a href="+99893 555 00 55">
                                    <i class="fas fa-phone"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  {" "}
                                  <a href="megachild@gmail.com">
                                    <i class="fas fa-envelope-open"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  <a href="@megachuld">
                                    <i class="fas fa-paper-plane"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </MDBCol>
                          <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                            <MDBCardBody>
                              <MDBCardTitle>
                                <h1 className={styles.title1}>
                                  Bosh buxgalter
                                </h1>
                              </MDBCardTitle>
                              <MDBCardText>
                                <p>
                                  <strong>F.I.O: </strong>Abdurahmonova Shohida
                                  Abdumalik qizi
                                </p>
                                <p>
                                  <strong>Tug'ilgan sana: </strong>{" "}
                                  <i
                                    style={{ color: "#FF8080" }}
                                    class="fas fa-calendar-alt"
                                  ></i>{" "}
                                  06/12/1995
                                </p>
                                <p>
                                  <strong>Mutaxasislik: </strong>Ingliz tili
                                  mutaxasisi
                                </p>
                                <p>
                                  <strong>Oliygoh: </strong>Jahon tillari
                                  universiteti
                                </p>
                              </MDBCardText>
                              <MDBCardText>
                                <i
                                  style={{ color: "#FF8080" }}
                                  class="fas fa-quote-left"
                                ></i>
                                <br />
                                <small className="text-muted">
                                  Men "Erta bolalik ta'limi" darajasiga va
                                  ingliz tili bo'yicha yuqori darajadagi
                                  sertifikatga egaman. Men 2002 yildan beri
                                  bolalar bog'chasida Ingliz tili o'qituvchi
                                  sifatida ishlayman.{" "}
                                </small>
                                <br />
                                <i
                                  style={{ color: "#FF8080", float: "right" }}
                                  class="fas fa-quote-right"
                                ></i>
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </Col>
                  </Row>
                </div>
              </body>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
