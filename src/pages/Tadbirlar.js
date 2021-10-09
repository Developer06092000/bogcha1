import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PacmanLoader from "react-spinners/PacmanLoader";
import news1 from '../img/kinder6.png'
import Navbar from './Navbar'
import Footer from './Footer'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBCardFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {BsGeoAlt} from 'react-icons/bs'
import {FaCalendarAlt} from 'react-icons/fa'
export default class Tadbirlar extends Component {
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
                this.state.loader? <div className={styles.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
              :
              <div>
 <header>
               <div className={styles.header}>
                 <Navbar/>
                
               </div>
             </header>

             <Container>
             <body>
               <div className={styles.body}>
                   <div data-aos="fade-up" className={styles.title}><h1>Tadbirlar</h1></div>
                   <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage 
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
              <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
            <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
            <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
            <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
            <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' className={styles.card}>
          <MDBCardImage
            src={news1} className={styles.img}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bog'chamizga Prezident tashrif buyirdi</MDBCardTitle>
            <MDBCardText>
            <p><FaCalendarAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>14/08/2020</span></p>
              <p><BsGeoAlt style={{fontSize:'17px',color:'#FF8080'}}/> <span>133-bog'cha</span></p>
              <Link to='/tadbir/uz'><p style={{color:'rgba(0,0,0,0.6)'}}>Batafsil</p></Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow><br/><br/><br/>
               </div>
             </body>
             </Container>
             <Footer/>
                </div>
              }
                 
            </div>
        )
    }
}
