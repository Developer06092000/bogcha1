import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../css/Dashboard.module.css";
import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";
import icon4 from "../img/icon4.png";
import icon5 from "../img/icon5.png";
import icon6 from "../img/icon6.png";
import rasm3 from "../img/1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import style from '../css/Header.module.css';
import '../App.css';
import { Link } from "react-router-dom";
import rasm4 from "../img/3s-Photo-3.jpg";
import rasm7 from "../img/engagement.jpg";
import rasm6 from "../img/love.jpg";
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
import {getBogcha} from "../host/Config"
import Global from "../host/Global";
import { url } from "../host/Host";
export default class Dashboard extends Component {
  state = {
    loader: true,
    post:[],
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  getBogcha()
        .then((res) => {
          Global.kg = res.data;
     this.setState({post:res.data})
        })
        .catch((err) => console.log(err));
    
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
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
          <div className={styles.loader}>
  <span></span>
  <span></span>
  <span></span>
          </div></div>
        ) : (
          <div>
            <div className={styles.header}>
              <Navbar />

              {/* <header>
                <div class="overlay"></div>
                <video
                  playsinline="playsinline"
                  autoplay="autoplay"
                  muted="muted"
                  loop="loop"
                >
                  <source src={kinder} type="video/mp4" />
                </video>
                <div class="container h-100">
                  <div class="d-flex h-100 text-white text-center align-items-center">
                    <div class="w-100 ">
                      <div class="container">
                        <p class="text">
                          O`zbekiston Respublikasi Jizzaxt viloyati xalq ta`lim
                          boshqarmasi
                        </p>
                      </div>
                    </div>
                    <br />
                  </div>
                </div>
              </header> */}




<div className={style.all1}>
<div className={style.text1}>
    <div className={style.text2}>
<h1 style={{fontFamily:'sans-serif'}} >Farzandingiz kelajagini biz bilan quring</h1>
<p style={{fontFamily:'sans-serif',}}> Flamingoning talabalari juda yaxshi ko'rishadi. Biz o'zimizni bolalar, o'qituvchilar va ma'murlardan iborat g'amxo'r o'quv jamoasini yaratishga bag'ishlaymiz.</p>
    </div>
    
     </div>
<div className={style.video1}>
<div style={{display:'block',width:'100%'}}>
<div class="box12">
<iframe title=" " width="100%" height="100%"
src="https://www.youtube.com/embed/Pyb0z_YQjjI?controls=0&autoplay=1&mute=1&loop=1">
</iframe> 
  <div class="ribbon ribbon-top-left"><span>2020</span></div>
  <div class="ribbon ribbon-top-right"><span>2021</span></div>
  <div class="ribbon ribbon-bottom-left"><span>2022</span></div>
  <div class="ribbon ribbon-bottom-right"><span>2023</span></div>
</div>
<h1 style={{margin:'auto',textAlign:'center', fontFamily:'cursive',marginTop:'30px',color:'white',textShadow:'0px 0px 40px white'}}>
    yorqin lavhalar
</h1>
</div>
</div>
        </div>






              {/* <div className={styles.youtube}>
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
             <img alt="" src={rasm2} />  
                <button>Hoziroq qo'ng'iroq qiling!</button>
              </div> */}
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
                      background:"linear-gradient(180deg, #163aaf 0%, #00000064 100%)",
                    }}
                    className={styles.card1}
                  ><Link style={{ color: "white" }} to="/yoga/uz">
                    <img alt=" " src={icon1} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                      
                        Sport
                      
                    </p></Link>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  >  <Link style={{ color: "white" }} to="/musiqa/uz">
                    <img alt=" " src={icon2} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                    
                        Musiqa
                     
                    </p> </Link>
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
                  ><Link style={{ color: "white" }} to="/garden/uz">
                    <img alt=" " src={icon3} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                     
                        Bog'
                      
                    </p></Link>
                  </Col>
                   
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  > <Link style={{ color: "white" }} to="/steam/uz">
                    <img alt="" src={icon4} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                     
                        Steam
                      
                    </p></Link>
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
                  ><Link style={{ color: "white" }} to="/cooking/uz">
                    <img alt=" " src={icon5} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                      
                        Shirinlik
                      
                    </p></Link>
                  </Col>
                  <Col
                    lg={2}
                    md={4}
                    sm={4}
                    style={{ backgroundColor: "#163aaf" }}
                    className={styles.card}
                  ><Link style={{ color: "white" }} to="/pedagogy/uz" >
                    <img alt=" " src={icon6} />
                    <p style={{margin:'auto',textAlign:'center',marginTop:'7px'}}>
                     
                        Pedagogika
                      
                    </p></Link>
                  </Col>
                  <Col lg={12} className={styles.tourCard}>
                    <button>Turni rejalashtirish</button>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                     
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                    <Container>
                    <Row style={{ border: "1px solid rgba(0,0,0,0.1)",borderRadius:'10px',}}
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" >
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt=" " src={url+this.state.post.post_image1} style={{ width: "100%",borderRadius:'10px', }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>Mehribon va tarbiyalovchi muhit</h1>
                        <p>
                      {this.state.post.post_text1}
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
                       
                      </Col>
                    </Row></Container>
                  </Col>
                  <Col
                    lg={12}
                    style={{
                     
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  ><Container>
                    <Row style={{ border: "1px solid rgba(0,0,0,0.1)",borderRadius:'10px',}}>
                      <Col lg={5} className={styles.heading1}>
                        <h1>Ajoyib / qiziquvchanlik</h1>
                        <p>
                         {this.state.post.post_text2}
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
                       
                      </Col>

                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt=" " src={url+this.state.post.post_image2} style={{ width: "100%",borderRadius:'10px' }} />
                      </Col>
                    </Row></Container>
                  </Col>
                   <Col lg={12} sm={12}><Dashboardnews /></Col>
                  <Col
                    lg={12}
                    style={{
                      width: "95%",
                      marginLeft: "2.5%",
                      marginBottom: "50px",
                    }}
                  >
                   <Container>
                    <Row style={{ border: "1px solid rgba(0,0,0,0.1)",borderRadius:'10px',}}>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt=" " src={url+this.state.post.post_image3} style={{ width: "100%",borderRadius:'10px' }} />
                      </Col>
                      <Col lg={5} className={styles.heading}>
                        <h1>G'ayrat. Nishon. Etakchilik</h1>
                        <p>
                        {this.state.post.post_text3}
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
                       
                      </Col>
                    </Row></Container>
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
                  <Container>  <Row style={{ border: "1px solid rgba(0,0,0,0.1)",borderRadius:'10px',}}>
                      <Col lg={5} className={styles.heading1}>
                        <h1>
                          Bizning dunyomizni bir vaqtning o'zida bitta bolani
                          o'zgartirish
                        </h1>
                        <p>
                        {this.state.post.post_text4}
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
                       
                      </Col>
                      <Col lg={7} style={{ padding: "0" }}>
                        <img alt=" " src={url+this.state.post.post_image4} style={{ width: "100%",borderRadius:'10px' }} />
                      </Col>
                    </Row></Container>
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
                        <img alt=" " src={school} />
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
                        <img alt=" " src={her2} />
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
                        <img alt=" " src={her3} />
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
                        <img alt=" " src={her4} />
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
                        <img alt=" " src={her5} />
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
                        <img alt=" " src={her6} style={{ width: "100%",borderRadius:'10px' }} />
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
