import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/mini.module.css'
import style from '../css/loader.module.css'
import kinder1 from'../img/meal1.jpg'
import kinder2 from '../img/meal2.jpg'
import kinder3 from '../img/meal3.jpg'
import {Container,Row,Col, Table  } from 'react-bootstrap';
import Footer from './Footer'
import PacmanLoader from "react-spinners/PacmanLoader";
import { getBogcha } from '../host/Config';

export default class Oshxona extends Component {
  state={
    loader:true,
    oshxonaGet:[],
    Menu:[],
}
componentDidMount() {
  getBogcha()
  .then((res) => {
    this.setState({
      oshxonaGet: res.data.oshxona,
      Menu: res.data.menu,
    });
  })

  setInterval(()=>{
      this.setState({
          loader:false,
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
        this.state.loader ? (   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
        <div className={style.loader}>
     <span></span>
     <span></span>
     <span></span>
             </div></div>):
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
                            <div style={{display:'flex',justifyContent:'center'}}><h1>Bog'chamiz oshxonasi</h1></div>
                             <h2>Maktabgacha yoshdagi bolalarni nima bilan boqish kerak?</h2>
                             <p>3 yoshdan 5 yoshgacha bo'lgan maktabgacha yoshdagi bolalar turli xil foydali ovqatlarni iste'mol qilish imkoniyatiga ega. Farzandingizga boshqa oila a'zolari iste'mol qiladigan ovqatni taklif qiling. Turli xil ta'm, to'qima va ranglarga ega ovqatlarni taklif eting</p>
                             <h2>Maktabgacha tarbiyalanuvchi qancha ovqat yeyishi kerak?</h2>
                             <p>Farzandingiz siz taklif qilayotgan ovqatlardan qancha ovqat iste'mol qilishni hal qilsin. Farzandingizni ovqat eyishga majburlamang yoki unga ruxsat berilgan ovqat miqdorini cheklamang. Ba'zi kunlarda ular ko'proq ovqatlanishlari mumkin. Ba'zi kunlarda ular kamroq ovqatlanishlari mumkin. Bolaning ishtahasi kundan-kunga o'zgarishi mumkin.

Quyidagi namunaviy taomlardan faqat umumiy ko'rsatmalar sifatida foydalaning. Ovqatlanish va atıştırmalıklarni har kuni bir vaqtning o'zida rejalashtiring, shunda ovqatlanish vaqti kelganida bolangiz och qoladi.</p>
                            <h2>Maktabgacha yoshdagi bolalar uchun namunaviy ovqatlanish: 3 yoshdan 5 yoshgacha</h2>
                         
                   
         
    {
                    this.state.oshxonaGet.map((item) => {
                        return (
                          <div className={styles.MenuGroup}>
                            <Table striped bordered hover>
                              <thead>
                                <tr
                                  variant="dark"
                                  style={{
                                    backgroundColor: "black",
                                    color: "white",
                                  }}
                                >
                                  <th
                                    colSpan="5"
                                    style={{ textAlign: "center" }}
                                  >
                                    {item.name}
                                  </th>
                                </tr>
                                <tr>
                                  <th>T/r</th>
                                  <th>Menu nomi</th>
                                  <th>Menu tarkibi</th>
                                  {/* <th>2-ovqat</th>
                                  <th>3-ovqat</th> */}
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.Menu !== null
                                  ? this.state.Menu.map((item1, key) => {
                                      return item.id === item1.oshxona ? (
                                        <tr>
                                          <td>{key + 1}</td>
                                          <td>{item1.name}</td>
                                          <td>{item1.tarkib}</td>
                                        </tr>
                                      ) : (
                                        ""
                                      );
                                    })
                                  : ""}
                              </tbody>
                            </Table>
                          </div>
                        );
                      })
                    }

         
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
