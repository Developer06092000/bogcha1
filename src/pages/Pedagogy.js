import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/mini.module.css'
import kinder1 from'../img/kinder4.jpg'
import kinder2 from '../img/kinder5.jpg'
import kinder3 from '../img/kinder6.png'
import {Container,Row,Col } from 'react-bootstrap';
import Footer from './Footer'
import PacmanLoader from "react-spinners/PacmanLoader";

export default class Wonder extends Component {
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
                            <div style={{display:'flex',justifyContent:'center'}}><h1>Pedagogika</h1></div>
                             <h2>BOLALARNING ERKAK TA'LIMINI RIVOJLANIShNING KULTIVATSIYASI</h2>
                             <p>Flamingo-da biz o'qitish jarayoni haqida gap ketganda qasddan. Belgilangan soniyada kunning har bir lahzasi o'qitiladigan moment bo'lishi mumkin. O'quv dasturi va mazmuni o'quvchilarga XXI asrda muvaffaqiyat qozonish uchun vositalar va ko'nikmalar berilishi uchun rivojlanishga mos amaliyotlarni hisobga olgan holda ishlab chiqilgan. Biz foydalanadigan o'qitish strategiyasi va usullari birlashtirilgan, amaliy va eng muhimi, o'ynoqi va quvnoq.</p>
                             <h2>YUQORI STANDARTLAR</h2>
                             <p>Biz talabalarni yuqori standartlarga rioya qilamiz, chunki hech qanday ikkita bola bir xil narsani o'rganmasligini tushunamiz. Biz o'z maqsadlarimizni ataylab bilamiz va talabalarga yuqori darajadagi intizom, ichki motivatsiya va ularning o'sishining barcha jabhalarida muvaffaqiyatga erishishda yordam beramiz. "Flamingo" akademiklarining diqqat markazida til va matematik bilimlardan tashqari, u insonning har tomonlama barkamollikni targ'ib qiluvchi o'lchovlariga taalluqlidir va ularni shaxsiy yo'li qayerda bo'lishidan qat'i nazar, ularni mustahkam poydevor bilan olib boradi.</p>
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
