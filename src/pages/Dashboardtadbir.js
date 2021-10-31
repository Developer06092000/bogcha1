import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../css/Dashboardtadbirlar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import {FaRegCalendarAlt, FaUserTie } from "react-icons/fa";
import axios from "axios";
export default class Dashboardtadbir extends Component {
state={
data:'',
};
//  getBogcha=()=>{
//   axios.get('https://bogcha.herokuapp.com/kg-info/1/').then(res=>{
// console.log(res.data)
//   }).catch(err=>{
//     console.log("bemanilik")
//   })
// }
// componentDidMount(){
//   this.getBogcha()
// }
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
              <Container><Row><Col lg={6} md={12} >
              <div className={styles.blogcard} style={{scale:'1',margin:'10px'}} >
    <div className={styles.meta}>
      <div className={styles.photo} style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
      <ul className={styles.details}>
        <li ><a href="#"><FaUserTie style={{marginRight:'10px'}}/>John Doe</a></li>
        <li > <FaRegCalendarAlt style={{marginRight:'10px'}} />Aug. 24, 2015</li>
        <li className={styles.tags}>
        </li>
      </ul>
    </div>
    <div className={styles.description}>
      <h2>Ochiq eshiklar kuni</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <a href="#">Batafsil</a>
      </p>
    </div>
  </div></Col>
  <Col lg={6} md={12} >
              <div className={styles.blogcard} style={{scale:'1',margin:'10px'}} >
    <div className={styles.meta}>
      <div className={styles.photo} style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
      <ul className={styles.details}>
        <li ><a href="#"><FaUserTie style={{marginRight:'10px'}}/>John Doe</a></li>
        <li > <FaRegCalendarAlt style={{marginRight:'10px'}} />Aug. 24, 2015</li>
        <li className={styles.tags}>
        </li>
      </ul>
    </div>
    <div className={styles.description}>
      <h2>Ochiq eshiklar kuni</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <Link to='/tadbir/uz'><a href="/tadbir/uz">Batafsil</a></Link>
      </p>
    </div>
  </div></Col>
  <Col lg={6} md={12} >
              <div className={styles.blogcard} style={{scale:'1',margin:'10px'}} >
    <div className={styles.meta}>
      <div className={styles.photo} style={{backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)'}}></div>
      <ul className={styles.details}>
        <li ><a href="#"><FaUserTie style={{marginRight:'10px'}}/>John Doe</a></li>
        <li > <FaRegCalendarAlt style={{marginRight:'10px'}} />Aug. 24, 2015</li>
        <li className={styles.tags}>
        </li>
      </ul>
    </div>
    <div className={styles.description}>
      <h2>Ochiq eshiklar kuni</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p className={styles.readmore}>
        <a href="#">Batafsil</a>
      </p>
    </div>
  </div></Col>
  
  </Row></Container>

        
      </div>
    );
  }
}
