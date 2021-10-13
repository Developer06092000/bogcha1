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
               <div className={styles.header}>
                 <Navbar/>
                
               </div>
             </header>

             <Container>
             <body>
               <div className={styles.body}>
                   <div data-aos="fade-up" className={styles.title}><h1>Yangiliklar</h1></div>
                   <MDBRow className='row-cols-1 row-cols-md-3 g-4'>



      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
      <MDBCol>
      <div className={styles.cards}>
  <div className={styles.card}>
    <h2 className={styles.card_title}>Prezident tashrifi 
    <div className={styles.date}>14/08/2020</div></h2>
    <img src={news1} alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).</p>
  </div>
</div>
      </MDBCol>
    </MDBRow><br/><br/><br/>
               </div>
             </body>
             </Container>
             <Footer/>
                </div>
              )}
                 
            </div>
        )
    }
}
