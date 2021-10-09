import React, { Component } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../css/Steam.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r3.jpg"

import img4 from "../img/r4.jpeg"
import img5 from "../img/r5.jpeg"
import PacmanLoader from "react-spinners/PacmanLoader";

export default class Bosqich3 extends Component {
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
                    <h1>3-BOSQICH</h1>
                    <div style={{ width: "200px", height: "3px", margin: "auto", backgroundColor: "#FF8080" }}></div>
                    <br />
                    <h5>A GREAT BIG WORLD</h5>
                    <p>
                    Entering the magical, fantastical world, are our newly minted three’s. Is there a monster under my bed? 
                    Absolutely! Can superhero ﬂy and ﬁght bad guys? Yes and yes again! 
                    This is an exciting time of a child’s life as they discover a greater sense of identity and begin to distinguish fantasy from reality. 
                    At Flamingo, we nurture a child’s creative imagination while building a strong, healthy, academic background.
                    </p>
                    <h5>
                    WELL-ROUNDED EDUCATION
                    </h5>
                    <p>
                    Yoga, gardening, and cooking become possible as we have now mastered pottytraining! 
                    Flamingo students learn about the world in which they live, the continents on planet Earth, 
                    and impress us by being able to write and identify their own names! With much love, support, and encouragement, 
                    Flamingo oﬀers a well-rounded rich learning experience 
                    that will leave you sometimes jaw dropped when they come home saying the newest NASA discoveries.
                    </p>
                </div>
                <br/>
                <Footer/>
            </div> 
    }
            </div>
        )
    }
}