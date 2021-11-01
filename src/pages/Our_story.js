import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../css/about_us.module.css";
import story1 from "../img/ourstory3.jpg";
import story2 from "../img/ourstorybanner.jpg";
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import stayle from "../css/our_us.module.css";
import {getBogcha} from  '../host/Config'
import style from '../css/loader.module.css'
export default class Our_story extends Component {
  state = {
    loader: true,
    our_history:"",
  };


  componentDidMount() { 
 getBogcha().then((res)=>{
  this.setState({our_history:res.data.our_history})
 }
  )
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000)
   
  }
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 993 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 992, min: 769 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 768, min: 567 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 566, min: 0 },
        items: 1,
      },
    };
    return (
      <div>
        {this.state.loader ?  (   <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:' rgba(0, 0, 255, 0.596)',width:'100%',height:'100vh'}}>
                <div className={style.loader}>
             <span></span>
             <span></span>
             <span></span>
                     </div></div>
        ) : (
          <div>
            <Navbar/>
            

            <div className={stayle.abbas}>
          <div className={stayle.frame}>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/plan1.png" alt="sky" className={stayle.pic1}/>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/2.png" alt="sky" className={stayle.pic2}/>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/3.png" alt="sky" className={stayle.pic3}/>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/mist.png" alt="sky" className={stayle.mist2}/>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/4.png" alt="sky" className={stayle.pic4}/>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/mist.png" alt="sky" className={stayle.mist}/>
 <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/41114/5.png" alt="sky" className={stayle.pic5}/>
</div>
</div>
           
              <body>
                <div className={styles.body}>
 <div className={styles.container}>
<h1 style={{borderBottom:'1px solid blue'}} className={styles.satrh1}>Bizning tarix</h1>

<p className={styles.satrA}>{this.state.our_history} </p>
                      <img style={{width:'80%',margin:'10%',textAlign:'center',borderRadius:'10px'}} src={story1}/>

</div>

               
                  <br />
                </div>
              </body>
          
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
