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
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Location extends Component {
  state = {
    loader: true,
    nav: false,
    open: false,
    close: false,
    address:[],
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

getBogcha().then((res)=>{
  this.setState({address:res.data})
})


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



<div className={styles.ikkisi}> 
 <div className={styles.maps1}> <YMaps>
                          <div>
                            <Map
                              defaultState={{
                                center:this.state.address.params,
                                zoom: 6,
                              }}
                              width="100%"
                              height='500px'
                            >
                              <Placemark geometry={this.state.address.params} />
                              <FullscreenControl options={{ float: "right" }} />
                              <GeolocationControl options={{ float: "left" }} />
                              <ZoomControl options={{ float: "right" }} />
                            </Map>
                          </div>
                        </YMaps></div>
  <div className={styles.call1}> <div className={styles.logo3}>
                          <img src={url+this.state.address.logo} alt=" "/>
                        </div>
                        <div className={styles.aloqa}>
                          <p>
                            <span>
                              <img src={aloqa4} />
                            </span>
                            <a href="tel:{this.state.address.phone}">{this.state.address.phone}</a>
                          </p>

                          <p>
                            <span>
                              <img src={aloqa3} />
                            </span>
                            <a href="mailto: {this.state.address.email}">
                            {this.state.address.email}
                            </a>
                          </p>

                          <p>
                            <span>
                              <img src={aloqa2} />
                            </span>
                            <a href="{this.state.address.phone}">{this.state.address.phone}</a>
                          </p>
                        </div>
                        <div className={styles.adres}>
                          <span>
                            <img src={aloqa1} />
                          </span>
                          <a href="{this.state.address.address}">
                            {" "}
                            {this.state.address.address}
                          </a>
                        </div>
                        <div className={styles.soat}>
                          <p>Qabul soatlari</p>
                          <p>7:00 dan 18:00 gacha</p>
                        </div></div>

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
