import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/Galereya.module.css";
import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";
import about3 from "../img/about3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

import PacmanLoader from "react-spinners/PacmanLoader";
import Dashboardnews from "./Dashboardnews";
import style from '../css/loader.module.css'
import Dashboardtadbir from "./Dashboardtadbir";
import { getBogcha } from "../host/Config";
import { url } from "../host/Host";
export default class Galereya extends Component {
  state = {
    loader: true,
    foto:[],
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
    getBogcha().then((res)=>{
      this.setState({foto:res.data.media})
    })
  }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 993 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 992, min: 769 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 567 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 566, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        {this.state.loader ? (   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
                <div className={style.loader}>
             <span></span>
             <span></span>
             <span></span>
                     </div></div>) : (
          <div>
            <Navbar/>
         <div className={styles.header1}>
<ul className={styles.slideshow}>
	<li><span >    <div className={styles.head}>
              <div className={styles.head_text}>
                Bizning jamoamiz o`zining yorqin lavhalarini internet saytiga muhirlab boradi.
              </div>
            </div></span></li>
  <li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
              Bizning jamoamiz o`zining yorqin lavhalarini internet saytiga muhirlab boradi.
              </div>
            </div></span></li>
	<li><span>  <div className={styles.head}>
              <div className={styles.head_text}>
              Bizning jamoamiz o`zining yorqin lavhalarini internet saytiga muhirlab boradi.
              </div>
            </div></span></li>
	<li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
               Bizning jamoamiz o`zining yorqin lavhalarini internet saytiga muhirlab boradi.
              </div>
            </div></span></li>
	<li><span >  <div className={styles.head}>
              <div className={styles.head_text}>
               Bizning jamoamiz o`zining yorqin lavhalarini internet saytiga muhirlab boradi.
              </div>
            </div></span></li>
</ul></div>

            <Container>
            
            <div className={styles.rasmlar}>
    <Row style={{justifyContent:'center'}}>
 


  <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image} />
     </Col>

 

 <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image1}  />
     </Col>
  <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image2} />
     </Col>
    <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image3} />
     </Col>
    <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image4} />
     </Col>
  
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image5} />
     </Col>
   <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image6} />
     </Col>
    <Col style={{padding:"10px"}} lg={4} md={6} sm={12}>
         <img src={url+this.state.foto.image7} />
     </Col>
    </Row>
</div>


            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
