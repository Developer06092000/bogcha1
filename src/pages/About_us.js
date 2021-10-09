import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/about_us.module.css'
import about1 from '../img/about1.jpg'
import about2 from '../img/about2.jpg'
import about3 from '../img/about3.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import PacmanLoader from "react-spinners/PacmanLoader";

export default class About_us extends Component {
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
         :<div>
<header>
               <div className={styles.header}>
                 <Navbar/>
               <Carousel
                       className={styles.sliderHeader}
                      responsive={responsive} infinite={true}
                      autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={3000}
                      keyBoardControl={false}
                        showDots={false}
                        >
                       <div>
                       <img src={about1} className={styles.headerImage}/>                   
                       </div>
                       <div>
                           <img src={about2} className={styles.headerImage}/>                         
                       </div>
                       <div>
                           <img src={about3} className={styles.headerImage}/>                
                       </div>
                      
                    </Carousel>
               </div>
             </header>
             <Container>
             <body>
               <div className={styles.body}>
                   <div className={styles.title}><h1>Biz haqimizda</h1></div>
                   <div className={styles.text}>
                        <p><strong>UYDAN UYGA</strong></p>
                        <p>Biz erta yoshdagi bolalar tarbiyasi kuchiga ishonadigan o'qituvchilar va ma'murlarning ajoyib guruhimiz. Bizning fidoyi va g'ayratli o'qituvchilar va ma'murlar jamoasi sizning kichkintoyingizni Flamingo oilasida kutib olishga tayyor. Siz bizning maktabimizning bir qismiga aylanganingizdan so'ng, o'rganish turli shakllarda boshlanadi.
                        </p>
                        <p><strong>BIZNING OILA VA JAMOAT</strong></p>
                        <p>Bizning to'rtinchi iyul bayrami, Bog'dorchilik tadbirlari, Kichik DaVinchi kuni, Buvilar va bobolar partiyalari kabi yuqori darajada ishtirok etadigan oilaviy tadbirlarimizdan, har yili ikki yilda bir marta o'tkaziladigan ota-onalar va o'qituvchilar konferentsiyalariga qadar, ta'lim va o'sish BUTUN oilani, eng muhimi, BUTUN bolani o'z ichiga olgan tajribaga aylanadi. Biz tuzilishga, muntazam va akademiklarga e'tibor qaratadigan maktabmiz, lekin biz quvonch va o'yin bo'lgan muvaffaqiyatli o'rganish uchun juda muhim tarkibiy qismlarga ishonamiz.
                        </p>
                   </div>
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
