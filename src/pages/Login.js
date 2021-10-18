import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/Login.module.css";
import NavbarA from './NavbarA'
import Loader from "./Loader";
import PacmanLoader from "react-spinners/PacmanLoader";
import rasm5 from "../img/logo-dark.png";
import { Link } from "react-router-dom";
import { BsFillTriangleFill } from "react-icons/bs";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Menu } from "antd";
import "antd/dist/antd.css";
export default function Login() {
  let history = useHistory();
  const [loader, setLoader] = useState(true);
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false);
  const change = () => {
    if (window.scrollY >= 200) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  const login = () => {
    var username = document.getElementById("formBasicEmail").value;
    var password = document.getElementById("formBasicPassword").value;
    if (username == "jamshid" && password == "jamshid") {
      history.push("/educator");
    } else {
    }
  };
  const { SubMenu } = Menu;
  const openNav = () => {
    setOpen(true);
  };
  const closeNav = () => {
    setOpen(false);
  };
  const handleClick = (e) => {
    console.log("click ", e);
  };
  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 2000);
    window.addEventListener("scroll", change);
  }, []);
  return (
    <div>
      {loader ? (
        <Loader/>
      ) : (
        <div>
        <NavbarA/>
          <Container fluid className={styles.bodyl}>
            <Row>
              <Col lg={12} className={styles.text}>
                <h1>Kirish</h1>
                <div className={styles.form}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label
                        style={{
                          color: "white",
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        E-mail pochtangizni kiriting
                      </Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label
                        style={{
                          color: "white",
                          fontSize: "17px",
                          fontWeight: "600",
                        }}
                      >
                        Parolni kiriting
                      </Form.Label>
                      <Form.Control type="password" />
                    </Form.Group>
                    <Button
                      onClick={login}
                      type="submit"
                      style={{
                        fontWeight: "600",
                        backgroundColor: "#163aaf",
                        border: "none",
                        marginTop: "30px",
                        width: "100%",
                      }}
                    >
                      Kirish
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      )}
    </div>
  );
}
