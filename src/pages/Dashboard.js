import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/Dashboard.module.css";
import kinder from "../video/kinder.mp4";
import rasm1 from "../img/ftr-logo.png";
import rasm2 from "../img/heart-btn.png";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import rasm3 from "../img/1.jpg";
import border from "../img/border.png";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import rasm4 from "../img/3s-Photo-3.jpg";
import rasm7 from "../img/engagement.jpg";
import rasm6 from "../img/love.jpg";
import PacmanLoader from "react-spinners/PacmanLoader";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Dashboardnews from "./Dashboardnews";
import Dashboardtadbir from "./Dashboardtadbir";
import Carousel from "react-multi-carousel";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import her6 from "../img/h6.png";
import YouTube from "@u-wave/react-youtube";

export default class Dashboard extends Component {
  state = {
    loader: true,
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
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
    return (
      <div>
        {this.state.loader ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#163aaf"}
              loading={this.state.loader}
            />
          </div>
        ) : (
          <div>
            <div className={styles.header}>
              <Navbar />
              <div className={styles.youtube}>
                <YouTube
                  video="Vjkedan2rxA"
                  autoplay
                  muted
                  controls={false}
                  showRelatedVideos={false}
                  showInfo={false}
                  annotations={false}
                  paused={false}
                  showCaptions={false}
                  modestBranding={false}
                  loop={0}
                  width="100%"
                  height="100%"
                  style={{ zIndex: "-7" }}
                />
              </div>
               <video autoPlay="autoplay" loop="loop" muted>
                <source src={kinder} type="video/mp4" />
              </video> 
              <div className={styles.btnHeader}>
              {/* <img alt="" src={rasm2} />  */}
                <button>Hoziroq qo'ng'iroq qiling!</button>
              </div>
            </div>
            <div className={styles.second}>
              <Container fluid>
                <Row>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "#163aaf",
                      background:
                        "linear-gradient(180deg, #163aaf 0%, #00000064 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img alt="" src={icon1} />
                    <p>
                      <Link style={{ color: "white" }} to="/yoga/uz">
                        Sport
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  >
                    <img alt="" src={icon2} />
                    <p>
                      <Link style={{ color: "white" }} to="/musiqa/uz">
                        Musiqa
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "#163aaf",
                      background:
                        "linear-gradient(180deg, #163aaf 0%, #00000064 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img alt="" src={icon3} />
                    <p>
                      <Link style={{ color: "white" }} to="/garden/uz">
                        Bog'
                      </Link>
                    </p>
                  </Col>
                  
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  >
                    <img alt="" src={icon4} />
                    <p>
                      <Link style={{ color: "white" }} to="/steam/uz">
                        Steam
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{
                      background: "#163aaf",
                      background:
                        "linear-gradient(180deg, #163aaf 0%, #00000064 100%)",
                    }}
                    className={styles.card1}
                  >
                    <img alt="" src={icon5} />
                    <p>
                      <Link style={{ color: "white" }} to="/cooking/uz">
                        Shirinlik
                      </Link>
                    </p>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  >
                    <img alt="" src={icon6} />
                    <p>
                      <Link style={{ color: "white" }} to="/pedagogy/uz">
                        Pedagogika
                      </Link>
                    </p>
                  </Col>
                  <Col lg={12} className={styles.tourCard}>
                    <button>Turni rejalashtirish</button>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Row>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt="" src={rasm6} style={{ width: "100%" }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>Mehribon va tarbiyalovchi muhit</h1>
                        <p>
                          Flamingo orolidagi ta'lim o'qituvchilar, ota-onalar va
                          o'quvchilar mehribon va mehribon, ilmiy jihatdan boy
                          muhitda hamkorlik qiladigan go'zal raqsga o'xshaydi.
                          Har bir talabaning o'ziga xos kuchli, zaif tomonlari
                          va sovg'alari bizni katta va kichik yangi marralarni
                          birgalikda nishonlash paytida qabul qilinadi va
                          qo'llab-quvvatlanadi.
                        </p>
                        <span>
                          <Link
                            to="/loving/uz"
                            style={{
                              padding: "10px 15px",
                              color: "white",
                              backgroundColor: "#163aaf",
                              borderRadius: "7px",
                            }}
                          >
                            Batafsil
                          </Link>
                        </span>
                        <img alt="" src={border} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      border: "1px solid rgba(0,0,0,0.1)",
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Row>
                      <Col lg={5} className={styles.heading1}>
                        <h1>Ajoyib / qiziquvchanlik</h1>
                        <p>
                          Young children are born with an innate curiosity of
                          the world around them. Flamingo nurtures this natural
                          wonder and joy for learning. Our learning activities
                          integrate wonder and curiosity on a daily basis.
                          Searching for worms and building a house for a beetle
                          are monumental moments in a child’s day! We nurture
                          young perspectives to embrace and support inquiry and
                          discovery.
                        </p>
                        <span>
                          <Link
                            to="/wonder/uz"
                            style={{
                              padding: "10px 15px",
                              color: "white",
                              backgroundColor: "#163aaf",
                              borderRadius: "7px",
                            }}
                          >
                            Batafsil
                          </Link>
                        </span>
                        <img alt="" src={border} className={styles.img1} />
                      </Col>

                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt="" src={rasm3} style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Dashboardnews />
                    <Row style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt="" src={rasm4} style={{ width: "100%" }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>G'ayrat. Nishon. Etakchilik</h1>
                        <p>
                          Flamingo orolida o'rganish hech qachon qiyin ish emas.
                          O'rganish quvonchli, ijodiy, egiluvchan va hattoki
                          noyob bolalar qiziqishlari atrofida moslashtirilgan.
                          Bundan ham muhimi, "Flamingo" da ta'lim mazmunli va
                          farzandingizning kelajagi uchun juda foydali. Bu
                          eshiklarni, imkoniyatlarni ochadi va bolangizni ta'lim
                          safariga olib boradi. "Daryolarda siz tegizadigan suv
                          o'tganlarning oxirgi va kelayotganlarning
                          birinchisidir; hozirgi zamon bilan ham." Leonardo da
                          Vinchi
                        </p>
                        <span>
                          <Link
                            to="/leadership/uz"
                            style={{
                              padding: "10px 15px",
                              color: "white",
                              backgroundColor: "#163aaf",
                              borderRadius: "7px",
                            }}
                          >
                            Batafsil
                          </Link>
                        </span>
                        <img alt="" src={border} />
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    {" "}
                    <Dashboardtadbir />
                    <Row style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                      <Col lg={5} className={styles.heading1}>
                        <h1>
                          Bizning dunyomizni bir vaqtning o'zida bitta bolani
                          o'zgartirish
                        </h1>
                        <p>
                          Flamingo oroli toza sevgi va imondan yaratilgan.
                          Maktabimizning markazida ijtimoiy va emotsional
                          salomatlik bola poydevori va kelajagi uchun ajralmas
                          tarkibiy qism ekanligini tushunishdir. Flamingo
                          talabalari altruistik xususiyatlarni rivojlantiradilar
                          va ularga o'z jamoalari va dunyo etakchilari bo'lish
                          uchun vositalar berishadi. "Agar biz o'zimizni
                          o'zgartira olsak, dunyodagi tendentsiyalar ham
                          o'zgargan bo'lar edi. Inson o'z tabiatini
                          o'zgartirishi bilan, dunyoning unga bo'lgan munosabati
                          ham o'zgaradi." Gandi
                        </p>
                        <span>
                          <Link
                            to="/changing/uz"
                            style={{
                              padding: "10px 15px",
                              color: "white",
                              backgroundColor: "#163aaf",
                              borderRadius: "7px",
                            }}
                          >
                            Batafsil
                          </Link>
                        </span>
                        <img alt="" src={border} className={styles.img1} />
                      </Col>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt="" src={rasm7} style={{ width: "100%" }} />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div style={{ padding: "10px 0 30px" }}>
              <h1 className={styles.sarlavha}> Bizning hamkorlarimiz</h1>

              <div
                className={styles.sliderHomiy}
                style={{ backgroundColor: "white" }}
              >
                <Carousel
                  responsive={responsive}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  infinite={true}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://president.uz/oz" target="_blank">
                        <img alt="" src={school} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.gov.uz/uz" target="_blank">
                        <img alt="" src={her2} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasining Hukumat portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://lex.uz/" target="_blank">
                        <img alt="" src={her3} />
                      </a>
                    </div>
                    <p>
                      O'zbekiston Respublikasi qonun hujjatlari milliy bazasi
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://my.gov.uz/oz" target="_blank">
                        <img alt="" src={her4} />
                      </a>
                    </div>
                    <p>Interaktiv davlat xizmatlarining Yagona portali</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://www.uzedu.uz/" target="_blank">
                        <img alt="" src={her5} />
                      </a>
                    </div>
                    <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      alingItems: "center",
                    }}
                  >
                    <div
                      className={styles.toolpat}
                      style={{ backgroundColor: "white" }}
                    >
                      <a href="https://ittower.uz/" target="_blank">
                        <img alt="" src={her6} style={{ width: "100%" }} />
                      </a>
                    </div>
                    <p>IT Tower firmasi </p>
                  </div>
                </Carousel>
              </div>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
