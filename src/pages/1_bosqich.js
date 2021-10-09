import React, { Component } from "react"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "../css/Steam.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from "../img/r1.jpg"

import img4 from "../img/r4.jpeg"
import img5 from "../img/r5.jpeg"
import PacmanLoader from "react-spinners/PacmanLoader";


export default class Bosqich1 extends Component {
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
                    <h1>1-BOSQICH</h1>
                    <div style={{ width: "200px", height: "3px", margin: "auto", backgroundColor: "#FF8080" }}></div>
                    <br />
                    <h5>BUSY BEES</h5>
                    <p>
                    Our littlest Flamingo students are known as the Busy Bees. 
                    This is a sweet, tender environment where every student is loved, nurtured, and supported. Beginning in the morning, 
                    students start the day by eating breakfast family-style. 
                    Our little ones cannot wait to explore their classroom, climb on the tunnel climber, and giggle with their friends. 
                    Mornings are spent singing nursery rhymes, painting, singing, and dancing. Puppets come out to play with eager students.
                    </p>
                    <h5>
                        JOYFUL
                    </h5>
                    <p>
                    Flamingo educators talk with and listen to each child, observe their nonverbal cues, and engage them in stimulating learning activities.
                     Students are exposed to a day that is full of joyful, rich,
                     well-rounded experiences that leave each child wanting to stay much past their dinnertime when mommy and daddy come to take them home!
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