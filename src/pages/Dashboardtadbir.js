import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../css/Dashboardtadbirlar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";
import {FaRegCalendarAlt, FaUserTie } from "react-icons/fa";
import { url } from "../host/Host"; 
import { getBogcha } from "../host/Config";
export default class Dashboardtadbir extends Component {
state={
data:'',
tadbir:[],
};

componentDidMount(){
   getBogcha().then(res=>{
this.setState({tadbir:res.data.tadbir})
  }).catch(err=>{
    console.log("Xatoliktadbir")
  })
}
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
    return (
      <div>
   
           
              <div data-aos="fade-up" className={styles.title}>
                <h1 style={{color:'black'}}>Tadbirlar</h1>
              </div>
              <Container><Row>
                
                
                
            { this.state.tadbir.map((item)=>{
              return(  
                <Col lg={6} md={12} >
              <div className={styles.blogcard} style={{scale:'1',margin:'10px'}} >
    <div className={styles.meta}>
      <img className={styles.photo}  alt=" " 
      src={url+item.image}></img>
      <ul className={styles.details}>
        <li ><a href="#"><FaUserTie style={{marginRight:'10px'}}/>{item.address}</a></li>
        <li > <FaRegCalendarAlt style={{marginRight:'10px'}} />{item.date}</li>
        <li className={styles.tags}>
        </li>
      </ul>
    </div>
    <div className={styles.description}>
      <h2>{item.name}</h2>
      <p> {item.text}</p>
      <p className={styles.readmore}>
        <a href="#">Batafsil</a>
      </p>
    </div>
  </div></Col>
 )
  })}    
  
  </Row></Container>

        
      </div>
    );
  }
}
