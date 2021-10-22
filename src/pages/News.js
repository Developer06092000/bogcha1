import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PacmanLoader from "react-spinners/PacmanLoader";
import news1 from '../img/kinder6.png'
import NavbarA from './NavbarA'
import Footer from './Footer'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBCardFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Dashboardnews from './Dashboardnews';

export default class Educators extends Component {
  state={
     loader:true
  }
 
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        loader:false
      })
    },2000)
  }
    render() {
        
        return (
            <div>
              {
                this.state.loader? (
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
                <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
                </div></div>
             ) :(
              <div>
 <header>
               <div className={styles.header} style={{paddingBottom:'100px'}}>
                 <NavbarA/>
                
               </div>
             </header>



<div>
  <Dashboardnews/>
</div>




            
             <Footer/>
                </div>
              )}
                 
            </div>
        )
    }
}
