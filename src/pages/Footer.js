import React, { Component } from "react";
import aloqa1 from "../img/footer-address.png";
import aloqa2 from "../img/footer-fax.png";
import aloqa3 from "../img/footer-mail.png";
import aloqa4 from "../img/footer-phone.png";
import styles from "../css/Footer.module.css";
import rasm1 from "../img/ftr-logo.png";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaFacebook,
} from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className={styles.footer}>
          <h1>Biz bilan bog'laning</h1>
          <h2>Aloqada bo'lish</h2>
          <img src={rasm1} />
          <div className={styles.aloqa}>
            <span>
              <a href="tel:+998335093874">
                <img src={aloqa4} style={{ width: "30px" }} />
              </a>
            </span>
            <span>+998335093874</span>
            <span>|</span>
            <span>
              <a href="mailto:karshiyeva.nilufar6789@gamil.com">
                <img src={aloqa3} style={{ width: "30px" }} />
              </a>
            </span>
            <span>karshiyeva.nilufar6789@gmail.com</span>
            <span> |</span>
            <span className={styles.tel}>
              <img src={aloqa1} style={{ width: "30px" }} />
            </span>
            <span>972-238-7672</span>
          </div>
          <div className={styles.adres}>
            <span>
              <img src={aloqa2} style={{ width: "30px" }} />
            </span>
            <span>Amir Temur shox ko'chasi, 13-uy</span>
          </div>
          <div className={styles.soat}>
            <p>Qabul soatlari</p>
            <p>7:00 dan 18:00 gacha</p>
          </div>
          <h3>Bizni kuzatib boring</h3>
          <div>
            <span style={{ marginLeft: "40px", color: "white" }}>
              <a href="tel:+998335093874">
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
              <a href="http://t.me/Karshiyeva_N">
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
              <a href="http://t.me/Karshiyeva_N">
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
              <a href="http://t.me/Karshiyeva_N">
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
