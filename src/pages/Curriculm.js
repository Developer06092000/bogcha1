import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/mini.module.css'
import kinder1 from'../img/kinder7.png'
import kinder2 from '../img/kinder8.jpg'
import kinder3 from '../img/kinder9.jpg'
import {Container,Row,Col } from 'react-bootstrap';
import Footer from './Footer'
import kinder from '../video/kinder.mp4'
import PacmanLoader from "react-spinners/PacmanLoader";


export default class Curriculm extends Component {
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
        return (
            <div>
                {
        this.state.loader ?
        <div className={styles.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
         :
         <div>
               <Navbar/>
                 <div className={styles.header}>
                 <video  autoPlay="autoplay" loop="loop"  muted>
                     <source src={kinder} type="video/mp4"/>
                 </video>
                 </div>
                    <Container fluid style={{padding:'0'}}>
                        <Row>
                            <Col lg={12} className={styles.text}>
                            <div style={{display:'flex',justifyContent:'center'}}><h1>O'quv dasturi</h1></div>
                             <h2>Ijtimoiy-emotsional ta'lim</h2>
                             <p>"Flamingo" da ta'lim mutanosib, yaxlit bo'lib, baxtli va sog'lom bola yadrosi ijtimoiy va emotsional o'rganishdan boshlanishini anglash bilan boshlanadi. Yosh bolalar o'zlarini hurmat qilishlari, boshqalarni hurmat qilishlari uchun qalblarida hamdardlik va mehr-oqibatni rivojlantirish uchun tarbiyalanadilar va tarbiyalanadilar. Birgalikda biz ota-onalar bilan ushbu ajoyib sarguzashtda katta bolani o'stirishda hamkorlik qilamiz.</p>
                             <h2>Barcha bola</h2>
                             <p>"Flamingo" dagi bayram va jamoat tadbirlari har bir talabaning hayotini boyitadi. Bizning 4-iyulning qizg'in kechasidan bizning bolalarimizning kichkina DaVinchi nomli badiiy ko'rgazmasiga qadar har bir tadbir 200-400 oila va do'stlarni birlashtiradi. Eng muhimi, ushbu tadbirlar umr bo'yi davom etadigan xotiralarni yaratadi.</p>
                             <h2>Qo'shimcha dasturlar</h2>
                             <p>Yoga 1 yoshdan 101 yoshgacha yaxshi! Amaliyot bolaga qanday qilib diqqatni jamlash va nafas olishni, bolani butun hayoti davomida qo'llab-quvvatlaydigan usullarni o'rgatadi. Flamingo musiqasi darslari haftada uch marta bo'lib o'tadi. Asbobda o'ynashni o'rganish IQni 7,5 ballga oshirishi mumkinligini bilasizmi? Organik bog'dorchilik - bu sevgi mehnati va yosh talabalarga ekish, parvarish qilish va etishtirishning o'ziga xos mukofotlarini o'rgatadi. Hayotiy tsikl sekin, chiroyli va boyituvchi tajriba bo'lib, talabalar oxir-oqibat o'zlari pomidor, qulupnay qulupnay, gs va makkajo'xori hosilini yig'ib oladilar.</p>
                             <h2>Yangi yillar oldida</h2>
                             <p>Aynan shu qat'iyatlilik, fidoyilik va o'rganishga bo'lgan ishtiyoq Flamingoni standart akademiklardan ustun bo'lgan maktabga aylantiradi. Asosiy o'quv dasturidan tashqari, sog'liq va xavfsizlikka bag'ishlanishimiz. Maktabimiz mikrobsiz bo'lishini ta'minlash uchun biz shifoxona darajasidagi mahsulotlardan ham foydalanamiz!</p>
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
