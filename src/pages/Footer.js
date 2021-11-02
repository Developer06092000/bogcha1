import React, { Component } from "react";
import aloqa1 from "../img/footer-address.png";
import aloqa2 from "../img/footer-fax.png";
import aloqa3 from "../img/footer-mail.png";
import aloqa4 from "../img/footer-phone.png";
import styles from "../css/Footer.module.css";
import rasm1 from "../img/ftr-logo.png";
import {
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";

export default class Footer extends Component {
  state={
    mail:[]
  }
  componentDidMount(){
    getBogcha().then((res)=>{
      this.setState({mail:res.data})
    })
  }
  render() {
    return (
      <div>
        <div className={styles.footer}>
          <h1>Biz bilan bog'laning</h1>
          <h2>Aloqada bo'lish</h2>
          <img src={url+this.state.mail.logo} alt=" " />
          <div className={styles.aloqa}> 
           <a style={{textDecoration:'none',color:'white'}} href="tel:{this.state.mail.phone}">
            <span>
                <img src={aloqa4} style={{ width: "30px" }} />
            </span>
            <span>{this.state.mail.phone}</span> </a>
            <span>|</span> 
            <a style={{textDecoration:'none',color:'white'}} href="mailto:{this.state.mail.email}">
            <span>
             
                <img src={aloqa3} style={{ width: "30px" }} />
              
            </span>
            <span>{this.state.mail.email}</span></a>
            <span> |</span>
            <span className={styles.tel}>
              <img src={aloqa1} style={{ width: "30px" }} />
            </span>
            <span>{this.state.mail.viloyat} {this.state.mail.tuman}</span>
          </div>
          <div className={styles.adres}>
            <span>
              <img src={aloqa2} style={{ width: "30px" }} />
            </span>
            <span>{this.state.mail.address}</span>
          </div>
          <div className={styles.soat}>
            <p>Qabul soatlari</p>
            <p>7:00 dan 18:00 gacha</p>
          </div>
          <h3>Bizni kuzatib boring</h3>
          <div>
            <span style={{ marginLeft: "40px", color: "white" }}>
              <a href="tel:{this.state.mail.phone}">
                <FaPhoneAlt
                  style={{
                    color: "white",
                    fontSize: "18px",
                    marginRight: "10px",
                  }}
                />
              </a>
            </span>
            <span style={{ color: "white" }}>
              <a href={this.state.mail.telegram}>
                <FaTelegramPlane
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "23px",
                  }}
                />
              </a>
            </span>
            <span style={{ color: "white" }}>
              <a href={this.state.mail.instagram}>
                <FaInstagram
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "23px",
                  }}
                />
              </a>
            </span>
            <span style={{ color: "white" }}>
              <a href={this.state.mail.facebook}>
                <FaFacebook
                  style={{
                    color: "white",
                    marginRight: "10px",
                    fontSize: "23px",
                  }}
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
