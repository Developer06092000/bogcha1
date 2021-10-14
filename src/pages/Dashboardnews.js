import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import styles from "../css/news.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import news1 from "../img/kinder6.png";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
export default class Dashboardnews extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      <div>
       



          <div data-aos="fade-up" className={styles.title}>
                <h1>Yangiliklar</h1>
              </div>
<div className={styles.cards} style={{marginBottom:'50px'}}>
  <div className={styles.card} style={{marginTop:"40px"}}>
    <h2 className={styles.card_title}>Prezident tashrifi <br/>  <div style={{margin:'auto', fontSize:"10px",marginRight:'10px'}}> 14/08/2020 </div></h2>
    <img src={news1}  alt=""/>
    <p className={styles.card_desc}>Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus), Otariidae (the eared seals: sea lions and fur seals), and Phocidae (the earless seals, or true seals).  <p>
  
                          </p>
                          <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                                position:'absolute',
                                right:'20px',
                                bottom:'8px'
                              }}
                            >
                              Batafsil
                            </p>
                          </Link></p>
  </div>

  <div className={styles.card} style={{marginTop:"40px"}}>
    <h2 className={styles.card_title}>Prezident tashrifi <br/> <div style={{margin:'auto', fontSize:"10px",marginRight:'10px'}}>14/08/2020 </div></h2>
    <img src={news1}  alt=""/>
    <p className={styles.card_desc}>The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.  <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                                position:'absolute',
                                right:'20px',
                                bottom:'8px'
                              }}
                            >
                              Batafsil
                            </p>
                          </Link></p>
  </div>

  <div className={styles.card} style={{marginTop:'40px'}}>
    <h2 className={styles.card_title}>Prezident tashrifi <br/>   <div style={{margin:'auto', fontSize:"10px",marginRight:'10px'}}>14/08/2020 </div></h2>
    <img  src={news1} alt=""/>
    <p className={styles.card_desc}>Hawks are a group of medium-sized diurnal birds of prey of the family Accipitridae. Hawks are widely distributed and vary greatly in size.
      The subfamily Accipitrinae includes goshawks, sparrowhawks, sharp-shinned hawks and others. This subfamily are mainly woodland birds with long tails and high visual acuity. They hunt by dashing suddenly from a concealed perch.  <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                                position:'absolute',
                                right:'20px',
                                bottom:'8px'
                              }}
                            >
                              Batafsil
                            </p>
                          </Link></p>
  </div>
</div>








            {/* <div className={styles.body}>
              <div data-aos="fade-up" className={styles.title}>
                <h1>Yangiliklar</h1>
              </div>
              {/* <Carousel
                responsive={responsive}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={5000}
                infinite={true}
              >
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <i class="fas fa-calendar-alt"></i> 14/08/2020
                          </p>
                          <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <i class="fas fa-calendar-alt"></i> 14/08/2020
                          </p>
                          <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <i class="fas fa-calendar-alt"></i> 14/08/2020
                          </p>
                          <Link
                            to="/yangilik/uz"
                            style={{
                              color: "#f76b6a",
                            }}
                          >
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
                <div>
                  <MDBCol style={{ margin: "10px" }}>
                    <MDBCard className="h-100" className={styles.card}>
                      <MDBCardImage
                        src={news1}
                        className={styles.img}
                        alt="..."
                        position="top"
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          Bog'chamizga Prezident tashrif buyirdi
                        </MDBCardTitle>
                        <MDBCardText>
                          <p>
                            <i class="fas fa-calendar-alt"></i> 14/08/2020
                          </p>
                          <Link to="/yangilik/uz">
                            <p
                              style={{
                                color: "white",
                                backgroundColor: "blue",
                                width: "70px",
                                padding: "3px 10px",
                                border: "1px solid blue",
                                borderRadius: "10px",
                              }}
                            >
                              Batafsil
                            </p>
                          </Link>
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </div>
              </Carousel> */}
              {/* <MDBRow className="row-cols-1 row-cols-md-3 g-4">
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                  <MDBCard className="h-100" className={styles.card}>
                    <MDBCardImage
                      src={news1}
                      className={styles.img}
                      alt="..."
                      position="top"
                    />
                    <MDBCardBody>
                      <MDBCardTitle>
                        Bog'chamizga Prezident tashrif buyirdi
                      </MDBCardTitle>
                      <MDBCardText>
                        <p>
                          <i class="fas fa-calendar-alt"></i> 14/08/2020
                        </p>
                        <Link to="/yangilik/uz">
                          <p>Batafsil</p>
                        </Link>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow> 
              <br />
              <br />
              <br />
            </div> */}
        
      </div>
    );
  }
}
