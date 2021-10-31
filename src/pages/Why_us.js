import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../css/about_us.module.css'
import why1 from '../img/Whyus2.jpg'
import why2 from '../img/whyus3.jpg'
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from './Navbar'
import Footer from './Footer'
import style from '../css/loader.module.css'
import story1 from "../img/ourstory3.jpg";
export default class Why_us extends Component {
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
        this.state.loader ? (   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
        <div className={style.loader}>
     <span></span>
     <span></span>
     <span></span>
             </div></div>) :
         <div>
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
                       <img src={why1} className={styles.headerImage}/>                   
                       </div>
                       <div>
                           <img src={why2} className={styles.headerImage}/>                         
                       </div>
                      
                      
                    </Carousel>
               </div>
             </header>
             <Container>
            



             <body>
                <div className={styles.body}>
 <div className={styles.container}>
<h1 style={{borderBottom:'1px solid blue'}} className={styles.satrh1}>Nega biz</h1>
<p className={styles.satrA}>Flamingoning talabalari juda yaxshi ko'rishadi. Biz o'zimizni bolalar, o'qituvchilar va ma'murlardan iborat g'amxo'r o'quv jamoasini yaratishga bag'ishlaymiz. Bizning ajoyib o'qituvchilar jamoasi sizning kichkintoyingiz bilan abadiy aloqada bo'ladi va uni yulduzlarga intilishga undaydi. Bizning g'amxo'r ma'murlarimiz mijozlarga ajoyib xizmat ko'rsatishadi, chunki mehmondo'stlik biz uchun juda muhimdir. Biz har kuni ertalab / kechqurun oilangizni maktabimizga qabul qilamiz va sizga yordam kerak bo'lsa, shaxsiy narsalaringiz bilan yordam beramiz.
                        </p>
                      <img style={{width:'80%',margin:'10%',textAlign:'center',borderRadius:'10px'}} src={story1}/>

</div>

               
                  <br />
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
