import React, { Component } from "react";
import styles from "../css/navbarkids.module.css";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
} from "react-icons/fa";
import rasm1 from "../img/ftr-logo.png";
import rasm5 from "../img/logo-dark.png";
import { BsFillTriangleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "antd/dist/antd.css";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
export default class NavbarKabinet extends Component {
  state = {
    nav: false,
    open: false,
    close: false,
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
  componentDidMount() {
    window.addEventListener("scroll", this.change);
  }
  handleClick = (e) => {
    console.log("click ", e);
  };
  render() {
    const { SubMenu } = Menu;
    return (
      <div>
        <div className={this.state.nav ? styles.nav1_active : styles.nav1}>
          <div className={this.state.nav ? styles.logo1 : styles.logo}>
            <div className={this.state.nav ? styles.openNav1 : styles.openNav}>
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
                  <Menu.Item key="1" style={{ backgroundColor: "#F76B6A" }}>
                    <span>
                      <Link to="/dashboard/uz">
                        <FaHome style={{ color: "white", fontSize: "23px" }} />
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
                        <Link to="/tarbiyachilar/uz">Tarbiyalovchilar</Link>
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
                  {/* <Menu.Item key="12" style={{color:'white',backgroundColor:'#F76B6A'}}>
                               <button style={{border:'none',backgroundColor:'white',color:'#F76B6A',borderRadius:'25px',padding:'10px 30px'}}><Link style={{color:'#F76B6A',fontWeight:'800'}} to="/login/uz">Kirish</Link></button>
                                </Menu.Item> */}
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
    );
  }
}
