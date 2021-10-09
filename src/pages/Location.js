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
            <div className={styles.one}>
              <div
                className={this.state.nav ? styles.nav1_active : styles.nav1}
              >
                <div className={this.state.nav ? styles.logo1 : styles.logo}>
                  {this.state.nav ? <img src={rasm5} /> : <img src={rasm5} />}
                  <div className={styles.navbar}>
                    <span>
                      <Link to="/dashboard/uz">
                        <FaHome
                          style={{ color: "#FF8080", fontSize: "23px" }}
                        />
                      </Link>
                    </span>
                    <span style={{ fontSize: "25px" }}>|</span>
                    <span className={styles.sub1}>
                      <Link to="/bizhaqimizda/uz">Biz haqimizda</Link>
                    </span>
                    <div className={styles.subNav1}>
                      <span>
                        <BsFillTriangleFill className={styles.icon1} />
                      </span>
                      <p>
                        <Link to="/bizningtarix/uz">Bizning tarix</Link>
                      </p>
                      <p>
                        <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                      </p>
                      <p>
                        <Link to="/rahbariyat/uz">Rahbariyat</Link>
                      </p>
                      <p>
                        <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                      </p>
                      <p>
                        <Link to="/oshxona/uz">Oshxona</Link>
                      </p>
                      <p>
                        <Link to="/galereya/uz">Galereya</Link>
                      </p>
                      <p>
                        <Link to="/manzil/uz">Manzil</Link>
                      </p>
                    </div>
                    <span style={{ fontSize: "25px" }}>|</span>
                    <span className={styles.sub2}>
                      <Link to="/dasturlar/uz">Dasturlar</Link>
                    </span>
                    <div className={styles.subNav2}>
                      <span>
                        <BsFillTriangleFill className={styles.icon2} />
                      </span>
                      <p>
                        <Link to="/dastur_1/uz">1-bosqich</Link>
                      </p>
                      <p>
                        <Link to="/dastur_2/uz">2-bosqich</Link>
                      </p>
                      <p>
                        <Link to="/dastur_3/uz">3-bosqich</Link>
                      </p>
                    </div>
                    <span style={{ fontSize: "25px" }}>|</span>
                    <span>
                      <Link to="/curriculm/uz">Qabul</Link>
                    </span>
                    <span style={{ fontSize: "25px" }}>|</span>
                    <span>
                      <Link to="/yangiliklar/uz">Yangiliklar</Link>
                    </span>
                    <span style={{ fontSize: "25px" }}>|</span>
                    <span>
                      <Link to="/tadbirlar/uz">Tadbirlar</Link>
                    </span>
                    <span style={{ marginLeft: "40px" }}>
                      <a href="tel:+998335093874">
                        <FaPhoneAlt
                          style={{ color: "#FF8080", fontSize: "18px" }}
                        />
                      </a>
                    </span>
                    <span>
                      <a href="http://t.me/Karshiyeva_N">
                        <FaTelegramPlane
                          style={{ color: "#FF8080", fontSize: "23px" }}
                        />
                      </a>
                    </span>
                    <span>
                      <a href="http://t.me/Karshiyeva_N">
                        <FaInstagram
                          style={{ color: "#FF8080", fontSize: "23px" }}
                        />
                      </a>
                    </span>
                    <span>
                      <a href="http://t.me/Karshiyeva_N">
                        <FaFacebook
                          style={{ color: "#FF8080", fontSize: "23px" }}
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.second}>
              <div
                className={this.state.nav ? styles.nav1_active : styles.nav1}
              >
                <div className={this.state.nav ? styles.logo1 : styles.logo}>
                  {this.state.nav ? <img src={rasm5} /> : <img src={rasm5} />}
                  <div
                    className={
                      this.state.nav ? styles.openNav1 : styles.openNav
                    }
                  >
                    <FaBars
                      onClick={this.openNav}
                      style={{ color: "#FF8080", fontSize: "30px" }}
                    />
                  </div>
                  <div
                    className={
                      this.state.open ? styles.navWrapper1 : styles.navWrapper
                    }
                  >
                    <div className={styles.clicknav}>
                      <Menu
                        onClick={this.handleClick}
                        style={{
                          width: 256,
                          backgroundColor: "#F76B6A",
                          border: "none",
                          textAlign: "center",
                          fontSize: "18px",
                          marginTop: "100px",
                        }}
                        defaultSelectedKeys={["1"]}
                        defaultOpenKeys={["sub1"]}
                        mode="inline"
                      >
                        <Menu.Item
                          key="1"
                          style={{ backgroundColor: "#F76B6A" }}
                        >
                          <span>
                            <Link to="/dashboard/uz">
                              <FaHome
                                style={{ color: "white", fontSize: "23px" }}
                              />
                            </Link>
                          </span>
                        </Menu.Item>
                        <SubMenu
                          key="sub1"
                          title="Biz haqimizda"
                          style={{ backgroundColor: "#F76B6A", color: "white" }}
                        >
                          <Menu.ItemGroup
                            key="g1"
                            style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                          >
                            <Menu.Item key="2">
                              <Link to="/bizningtarix/uz">Bizning tarix</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                              <Link to="/nimauchunbiz/uz">Nima uchun biz</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                              <Link to="/rahbariyat/uz">Rahbariyat</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                              <Link to="/tarbiyachilar/uz">Tarbiyachilar</Link>
                            </Menu.Item>
                            <Menu.Item key="5">
                              <Link to="/galereya/uz">Galereya</Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                              <Link to="/manzil/uz">Manzil</Link>
                            </Menu.Item>
                          </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu
                          key="sub2"
                          title="Dasturlar"
                          style={{ color: "white" }}
                        >
                          <Menu.ItemGroup
                            style={{ borderTop: "3px solid rgba(0,0,0,0.4)" }}
                          >
                            <Menu.Item key="7">
                              <Link to="/dastur_1/uz">1-dastur</Link>
                            </Menu.Item>
                            <Menu.Item key="8">
                              <Link to="/dastur_2/uz">2-dastur</Link>
                            </Menu.Item>
                            <Menu.Item key="9">
                              <Link to="/dastur_3/uz">3-dastur</Link>
                            </Menu.Item>
                          </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item
                          key="10"
                          style={{ color: "white", backgroundColor: "#F76B6A" }}
                        >
                          <Link to="/curriculm/uz" style={{ color: "white" }}>
                            Qabul
                          </Link>
                        </Menu.Item>
                        <Menu.Item
                          key="11"
                          style={{ color: "white", backgroundColor: "#F76B6A" }}
                        >
                          <Link style={{ color: "white" }} to="/yangiliklar/uz">
                            Yangiliklar
                          </Link>
                        </Menu.Item>
                        <Menu.Item
                          key="12"
                          style={{ color: "white", backgroundColor: "#F76B6A" }}
                        >
                          <Link style={{ color: "white" }} to="/tadbirlar/uz">
                            Tadbirlar
                          </Link>
                        </Menu.Item>
                        <Menu.Item
                          key="12"
                          style={{ color: "white", backgroundColor: "#F76B6A" }}
                        >
                          <button
                            style={{
                              border: "none",
                              backgroundColor: "white",
                              color: "#F76B6A",
                              borderRadius: "25px",
                              padding: "10px 30px",
                            }}
                          >
                            <Link
                              style={{ color: "#F76B6A", fontWeight: "800" }}
                              to="/login"
                            >
                              Kirish
                            </Link>
                          </button>
                        </Menu.Item>
                        <Menu.Item>
                          <span>
                            <a href="tel:+998335093874">
                              <FaPhoneAlt
                                style={{ color: "white", fontSize: "18px" }}
                              />
                            </a>
                          </span>
                          <span>
                            <a href="http://t.me/Karshiyeva_N">
                              <FaTelegramPlane
                                style={{
                                  color: "white",
                                  fontSize: "23px",
                                  marginLeft: "10px",
                                }}
                              />
                            </a>
                          </span>
                        </Menu.Item>
                      </Menu>
                      <div className={styles.close}>
                        <AiOutlineClose
                          onClick={this.closeNav}
                          style={{ fontSize: "30px", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
