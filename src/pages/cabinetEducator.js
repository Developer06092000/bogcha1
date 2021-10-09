import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavbarKabinet from "./NavbarKabinet";
import Kids from "./kids";
import Rahbarlar from "./Rahbarlar";
import Teachers1 from "./Teachers1";
import {
  FaHome,
  FaPhoneAlt,
  FaInstagram,
  FaTelegramPlane,
  FaBars,
} from "react-icons/fa";
import "../App.css";
import styles from "../css/navbarkids.module.css";
import PacmanLoader from "react-spinners/PacmanLoader";

import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Rahbariyat from "./Rahbariyat";
export default class CabinetEducator extends Component {
  state = {
    collapsed: false,
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <BrowserRouter>
                <div
                  className={
                    this.state.collapsed ? styles.collapsed1 : styles.collapsed2
                  }
                >
                  <Button
                    type="primary"
                    onClick={this.toggleCollapsed}
                    style={{
                      marginBottom: 16,
                      marginTop: 10,
                      backgroundColor: "transparent",
                      border: "1px solid white",
                    }}
                  >
                    {React.createElement(
                      this.state.collapsed
                        ? MenuUnfoldOutlined
                        : MenuFoldOutlined
                    )}
                  </Button>
                  <Menu
                    style={{ backgroundColor: "black" }}
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    className="Linkdashboard"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                  >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                      <Link
                        to="/educator"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        Dashboard
                      </Link>
                    </Menu.Item>
                    <SubMenu
                      key="sub1"
                      icon={<MailOutlined />}
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                      title="Xodimlar"
                    >
                      <Menu.Item
                        style={{ backgroundColor: "white", color: "#FF8080" }}
                        key="5"
                      >
                        <Link
                          to="/educator/rahbarlar"
                          style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Rahbarlar
                        </Link>
                      </Menu.Item>
                      <Menu.Item
                        style={{ backgroundColor: "white", color: "#FF8080" }}
                        key="6"
                      >
                        <Link
                          to="/educator/tarbiyachilar"
                          style={{
                            color: "white",
                            fontWeight: "600",
                            fontSize: "16px",
                          }}
                        >
                          Tarbiyachilar
                        </Link>
                      </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                      <Link
                        to="/educator/kids"
                        style={{
                          color: "white",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        O'quvchilar
                      </Link>
                    </Menu.Item>

                    <Menu.Item
                      icon={<MailOutlined />}
                      key="12"
                      style={{ color: "white", backgroundColor: "#FF8080" }}
                    >
                      <button
                        style={{
                          border: "none",
                          backgroundColor: "white",
                          color: "#F76B6A",
                          borderRadius: "5px",
                          padding: "10px 30px",
                        }}
                      >
                        <Link
                          to="/"
                          target="_parent"
                          style={{ color: "#F76B6A", fontWeight: "800" }}
                        >
                          Chiqish
                        </Link>
                      </button>
                    </Menu.Item>
                  </Menu>
                </div>
                <Switch>
                  <Route exact path="/educator/rahbarlar">
                    <Rahbarlar />
                  </Route>
                  <Route exact path="/educator/tarbiyachilar">
                    <Teachers1 />
                  </Route>
                  <Route exact path="/educator/kids">
                    <Kids />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        )}
      </div>
    );
  }
}
