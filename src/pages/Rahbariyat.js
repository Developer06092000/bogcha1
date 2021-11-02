import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/educators.module.css";
import educators1 from "../img/educators1.jpg";
import educators2 from "../img/educators2.jpg";
import educators3 from "../img/educators3.jpg";
import educators4 from "../img/educators4.jpg";
import educators5 from "../img/educators5.jpg";
import  style from '../css/loader.module.css'
import {getBogcha} from '../host/Config'
import Navbar from "./Navbar";
import { url } from "../host/Host";
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
    getBogcha().then((res)=>{
      this.setState({raxbar:res.data.rahbariyat})
    })
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
        {this.state.loader ?  (   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
                <div className={style.loader}>
             <span></span>
             <span></span>
             <span></span>
                     </div></div>
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

{ this.state.raxbar.map((item)=>{
  return(

 
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
                              src={url+item.image}
                              alt="..."
                              fluid
                            />
                            <div className={styles.contact}>
                              <div className={styles.text}>
                                <div className={styles.textbg}>
                                  <a href={item.phone}>
                                    <i class="fa fa-phone"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  {" "}
                                  <a href={item.email}>
                                    <i class="fa fa-envelope-open"></i>
                                  </a>
                                </div>
                                <div className={styles.textbg}>
                                  <a href={item.telegram}>
                                    <i class="fa fa-paper-plane"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </MDBCol>
                          <MDBCol md="6" style={{ paddingLeft: "20px" }}>
                            <MDBCardBody>
                              <MDBCardTitle>
                                <h1 className={styles.title1}>{item.lavozim}</h1>
                              </MDBCardTitle>
                              <MDBCardText>
                                <p>
                                  <strong>F.I.O: </strong>{item.full_name}
                                </p>
                                <p>
                                  <strong>Tug'ilgan sana: </strong>{" "}
                                  <i
                                    style={{ color: "#FF8080" }}
                                    class="fa fa-calendar-alt"
                                  ></i>{" "}
                                  {item.date}
                                </p>
                                <p>
                                  <strong>Mutaxasislik: </strong>{item.mutaxassislik}
                                </p>
                                <p>
                                  <strong>Oliygoh: </strong>{item.otm}
                                </p>
                              </MDBCardText>
                              <MDBCardText>
                                <i
                                  style={{ color: "#FF8080" }}
                                  class="fa fa-quote-left"
                                ></i>
                                <br />
                                <small className="text-muted">
                                {item.about}
                                </small>
                                <br />
                                <i
                                  style={{ color: "#FF8080", float: "right" }}
                                  class="fa fa-quote-right"
                                ></i>
                              </MDBCardText>
                            </MDBCardBody>
                          </MDBCol>
                        </MDBRow>
                      </MDBCard>
                    </Col>

 )
})}
                   
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
