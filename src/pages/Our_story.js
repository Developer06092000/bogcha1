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

export default class Our_story extends Component {
  state = {
    loader: true,
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
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
        {this.state.loader ? (
          <div className={styles.loader}>
            <PacmanLoader
              size={20}
              color={"#FF8080"}
              loading={this.state.loader}
            />
          </div>
        ) : (
          <div>
            <header>
              <div className={styles.header}>
                <Navbar />
                <Carousel
                  className={styles.sliderHeader}
                  responsive={responsive}
                  infinite={true}
                  autoPlay={this.props.deviceType !== "mobile" ? true : false}
                  autoPlaySpeed={3000}
                  keyBoardControl={false}
                  showDots={false}
                >
                  <div>
                    <img src={story1} className={styles.headerImage} />
                  </div>
                  <div>
                    <img src={story2} className={styles.headerImage} />
                  </div>
                </Carousel>
              </div>
            </header>
            <Container>
              <body>
                <div className={styles.body}>
                  <div className={styles.title}>
                    <h1>Bizning tarix</h1>
                  </div>
                  <div className={styles.text}>
                    <p>
                      Bu g'oya sifatida boshlandi ... yaxshi. Ko'p fikrlar bor
                      edi, lekin bilasizmi ... bitta narsa ajralib chiqdi,
                      chunki u umumiy belgiga ega edi va bu SEVGI edi. Axir
                      sizga faqat SEVGI kerak. Agar sizning g'oyalaringiz va
                      niyatlaringiz ichkaridan haydaladigan bo'lsa, siz
                      uzoqlashasiz, qanchalik uzoqqa borasiz, hech kim bilmaydi
                      ... nega bu muhim? Faqat siz qancha masofani bilasiz…
                    </p>
                  </div>
                  <br />
                </div>
              </body>
            </Container>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
