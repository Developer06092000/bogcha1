import React, { Component } from "react"
import style from "../css/Steam.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r2.jpg"
import img4 from "../img/r4.jpeg"
import img5 from "../img/r5.jpeg"
import PacmanLoader from "react-spinners/PacmanLoader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default class Bosqich2 extends Component {
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
            <div className={style.mat}>
                {
        this.state.loader ?
        <div className={style.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
         :
         <div>
             
             <Navbar />
             <Carousel
                       className={style.sliderHeader}
                       responsive={responsive} infinite={true}
                       autoPlay={this.props.deviceType !== "mobile" ? true : false}
                       autoPlaySpeed={3000}
                       keyBoardControl={true}
                          showDots={false}
                        >
                       <div>
                       <img src={img1} className={style.sliderImage}/>                   
                       </div>
                       <div>
                           <img src={img4} className={style.sliderImage}/>                         
                       </div>
                       <div>
                           <img src={img5} className={style.sliderImage}/>                
                       </div>
                    </Carousel>
                <div className={style.matn}>
                    <h1>2-BOSQICH</h1>
                    <div style={{ width: "200px", height: "3px", margin: "auto", backgroundColor: "#FF8080" }}></div>
                    <br />
                    <h5>HANDS-ON LEARNING</h5>
                    <p>
                        At Flamingo we begin by providing a loving, nurturing environment to support the development of our now very mobile and active toddlers.
                        Academics is hands-on, playful, and more importantly, structured and consistent.
                    </p>
                    <h5>
                        BIG CONCEPTS, SMALL RATIOS
                    </h5>
                    <p>
                        Weekly lesson plans are carefully crafted to engage our toddlers as they demand opportunities for exploration and play.
                        We integrate our rich curriculum such as Hand Writing Without Tears in a joyful, playful manner.
                        We begin identifying both upper and lowercase letters through multiple ways of touch, learn, and discovery.
                        Mathematics is integrated via hands-on manipulative and small group learning formats of 6-8 students.
                        Two very special studios-an Art Studio and Sensory Studio-meet the needs of our busy toddlers.
<br/><br/>
                        Our small student-teacher ratios complement high-quality learning.
                        The results are brilliant, curious, eager little minds that truly develop a love for learning! Did we mention too: 
                        potty-training is a big milestone achieved between 24-36 months. Hip Hip Hooray!
                    </p>
                </div>
                <br />
                <Footer />
             </div>
    }
            </div>
        )
    }
}