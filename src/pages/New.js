import React, { Component } from 'react'

import news1 from '../img/kinder6.png'
import styles from '../css/news.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PacmanLoader from "react-spinners/PacmanLoader";

import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

export default class New extends Component {
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
                  <header className={styles.newbg}>
                  <Navbar/>
                  <div data-aos="fade-up" className={styles.newtitle}><h1>So'nggi Yangilik</h1></div>
              </header>
              <section>
                  <Container>
                      <Row style={{marginTop:'50px', marginBottom:'130px', height:'100vh'}}>
                          <Col lg={6} className={styles.img}>
                              <img src={news1}/>
                          </Col>
                          <Col lg={6} className={styles.text}>
                              <h1>Bog'chaga Prezident tashrif buyirdi</h1>
                              <p><i class="fas fa-calendar-alt"></i> 14/08/2020</p>
                              <p>
                              Joriy yilning 3-iyun kuni HUAWEI kompaniyasining O‘zbekistondagi vakili Liu Jiaxin ishtirokida “Al-Xorazmiy avlodlari” festivali bo'lib o'tdi.

Prezident, Ijod va ixtisoslashtirilgan maktablarni rivojlantirish agentligi  direktori Hilola Umarova festivalni ochib berib,  ishtirokchilarni  tabrikladi:

- Tashkil etilgan mazkur festivalda  Prezident, ijod va ixtisoslashtirilgan maktablar o‘quvchilari o‘zlarining loyihalari bilan qatnashishmoqda. O’ylaymanki, bugungi festival  o‘quvchilarimizning  nafaqat o‘z mehnat va iqtidorlarini namoyish etish, balki o‘zaro fikr almashishlariga ham imkon yaratdi. Aytib o‘tish kerakki, Huawei kompaniyasi yoshlarni axborot-texnologiyalari sohasiga qiziqtirishni doimo  rag‘batlantirib kelmoqda. Bu kabi hamkorlikda olib borilayotgan ishlarimiz yoshlarni zamonaviy kasblarga yo‘naltirishda katta ahamiyatga ega. Ushbu festival ishtirokchilarini tabriklayman, kelgusidagi yangidan yangi loyihalarida omad tilayman.
                              </p>
                          </Col>
                      </Row>
                  </Container>
              </section>
              <Footer/>
            </div>
    }
            </div>
        )
    }
}
