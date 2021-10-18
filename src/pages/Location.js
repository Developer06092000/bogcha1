import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/location.module.css";
import rasm1 from "../img/rasm1.png";
import aloqa1 from "../img/aloqa1.png";
import aloqa2 from "../img/aloqa2.png";
import aloqa3 from "../img/aloqa3.png";
import aloqa4 from "../img/aloqa4.png";
import {
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import style from '../css/loader.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";
import rasm5 from "../img/logo-dark.png";
import { Link } from "react-router-dom";
import { BsFillTriangleFill } from "react-icons/bs";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
  FaFacebook,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./NavbarA";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Location extends Component {
  state = {
    loader: true,
    nav: false,
    open: false,
    close: false,
  };
  openNav = () => {
    this.setState({
      open: true,
    });
  };
  closeNav = () => {
    this.setState({
      open: false,
    });
  };
  handleClick = (e) => {
    console.log("click ", e);
  };
  change = () => {
    if (window.scrollY >= 200) {
      this.setState({
        nav: true,
      });
    } else {
      this.setState({
        nav: false,
      });
    }
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
    window.addEventListener("scroll", this.change);
  }
  render() {
    const { SubMenu } = Menu;

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





<Navbar/>        







            <Container style={{ marginTop: "0px", marginBottom: "50px" }}>
              <body>
                <div className={styles.body} style={{ overflowY: "hidden" }}>
                  <div className={styles.title}>
                    <h1>Joylashuv</h1>
                  </div>
                  <div className={styles.content}>
                    <Row>
                      <Col
                        lg={4}
                        className={styles.footer}
                        style={{ height: "700px" }}
                      >
                        <div className={styles.logo3}>
                          <img src={rasm1} />
                        </div>
                        <div className={styles.aloqa}>
                          <p>
                            <span>
                              <img src={aloqa4} />
                            </span>
                            <a href="tel:972-238-7833">972-238-7833</a>
                          </p>

                          <p>
                            <span>
                              <img src={aloqa3} />
                            </span>
                            <a href="mailto: karshiyeva.nilufar6789@gmail.com">
                              karshiyeva.nilufar@gmail.com
                            </a>
                          </p>

                          <p>
                            <span>
                              <img src={aloqa2} />
                            </span>
                            <a href="972-238-7672">972-238-7672</a>
                          </p>
                        </div>
                        <div className={styles.adres}>
                          <span>
                            <img src={aloqa1} />
                          </span>
                          <a href="1402 Blake Dr. Richardson TX 75081">
                            {" "}
                            Amir Temur shox ko'chasi, 13-uy
                          </a>
                        </div>
                        <div className={styles.soat}>
                          <p>Qabul soatlari</p>
                          <p>7:00 dan 18:00 gacha</p>
                        </div>
                      </Col>
                      <Col lg={8} sm={12} className={styles.map}>
                        <YMaps>
                          <div>
                            <Map
                              defaultState={{
                                center: [41.299258, 69.206181],
                                zoom: 6,
                              }}
                              width="680px"
                              height="575px"
                            >
                              <Placemark geometry={[41.299258, 69.206181]} />
                              <FullscreenControl options={{ float: "right" }} />
                              <GeolocationControl options={{ float: "left" }} />
                              <ZoomControl options={{ float: "right" }} />
                            </Map>
                          </div>
                        </YMaps>
                      </Col>
                    </Row>
                  </div>
                </div>
              </body>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
