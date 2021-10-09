import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/mini.module.css'
import kinder1 from'../img/kinder10.jpg'
import kinder2 from '../img/kinder11.jpg'
import kinder3 from '../img/kinder13.jpg'
import {Container,Row,Col } from 'react-bootstrap';
import Footer from './Footer'
import PacmanLoader from "react-spinners/PacmanLoader";

export default class Changing extends Component {
  state={
    loader:true
  }
  componentDidMount() {
    setInterval(()=>{
        this.setState({
            loader:false
        })
    },2000)
  }
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 993 },
              items: 1
            },
            desktop: {
              breakpoint: { max: 992, min: 769 },
              items: 1
            },
            tablet: {
              breakpoint: { max: 768, min: 567 },
              items: 1
            },
            mobile: {
              breakpoint: { max: 566, min: 0 },
              items: 1
            }
          }
        return (
            <div>
              {
        this.state.loader ?
        <div className={styles.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
         :
         <div>
<Navbar/>
                <Carousel
                       className={styles.sliderHeader}
                       responsive={responsive} infinite={true}
                       autoPlay={this.props.deviceType !== "mobile" ? true : false}
                       autoPlaySpeed={3000}
                       keyBoardControl={true}
                          showDots={false}
                        >
                       <div>
                       <img src={kinder1} className={styles.sliderImage}/>                   
                       </div>
                       <div>
                           <img src={kinder2} className={styles.sliderImage}/>                         
                       </div>
                       <div>
                           <img src={kinder3} className={styles.sliderImage}/>                
                       </div>
                    </Carousel>
                    <Container fluid style={{padding:'0'}}>
                        <Row>
                            <Col lg={12} className={styles.text}>
                            <div style={{display:'flex',justifyContent:'center'}}><h1>Bizning dunyomizni bir vaqtning o'zida bitta bolani o'zgartirish</h1></div>
                             <h2>G'aroyib</h2>
                             <p>Flamingo orolidagi maktabgacha tarbiya - bu sof sevgi va e'tiqod asosida yaratilgan dinamik, injiq, jo'shqin, erta yoshdagi maktab. Maktabimizning markazida bolaning ijtimoiy va hissiy salomatligi muhim tarkibiy qism ekanligini tushunishdir. Hurmat, mehr va g'amxo'rlik biz maktab sifatida juda qadrlaydigan xususiyatlardir. "Flamingo" da biz har bir talaba ichida altruistik xatti-harakatlarni rivojlantiramiz. Har bir bolaning ichidagi bu go'zal ezgulik dunyoga o'tadi.</p>
                            </Col>
                        </Row>
                    </Container>
                    <Footer/>
        </div>                            
               }
            </div>
        )
    }
}
