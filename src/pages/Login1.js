import React, { Component } from 'react'
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/Login.module.css'
import PacmanLoader from "react-spinners/PacmanLoader";
import {FaHome,FaPhoneAlt,FaTelegramPlane} from 'react-icons/fa'
import rasm5 from '../img/logo-dark.png'
import {Link} from 'react-router-dom'
import {BsFillTriangleFill} from 'react-icons/bs'
import Footer from './Footer'
import {useHistory} from 'react-router-dom'
export default class Location extends Component {
  state={
    loader:true,
    nav:false
}
change=()=>{
      if(window.scrollY>=200){
          this.setState({
              nav:true
          })
      }else{
        this.setState({
            nav:false
        })
      }
  }
  login=()=>{
     let history=useHistory()
      var username=document.getElementById('formBasicEmail').value;
      var password=document.getElementById('formBasicPassword').value;
      if(username=='nilufar' && password=='nilufar'){
        history.push('/educator')
      }else{

      }
  }
componentDidMount() {
  setInterval(()=>{
      this.setState({
          loader:false
      })
  },2000)
  window.addEventListener("scroll", this.change);

}
    render() {
     
        return (
           <div> 
             {
        this.state.loader ?
        <div className={styles.loader}><PacmanLoader  size={20} color={'#FF8080'}  loading={this.state.loader} /></div>
         :
         <div>
          <div className={this.state.nav? styles.nav1_active:styles.nav1} style={{backgroundColor:'white'}}>
                        <div className={this.state.nav? styles.logo1:styles.logo}>
                                {
                                    this.state.nav? <img src={rasm5} />:<img src={rasm5}/>
                                }   
                                <div className={styles.navbar}>
                                <span><Link to="/dashboard/uz"><FaHome style={{color:'#FF8080',fontSize:'23px'}}/></Link></span> 
                                <span style={{fontSize:'25px'}}>|</span> 
                                <span className={styles.sub1}><Link to="/bizhaqimizda/uz">Biz haqimizda</Link></span> 
                                <div className={styles.subNav1}>
                                <span><BsFillTriangleFill className={styles.icon1}/></span>
                                <p><Link to="/bizningtarix/uz">Bizning tarix</Link></p>
                                <p><Link to="/nimauchunbiz/uz">Nima uchun biz</Link></p>
                                <p><Link to="/tarbiyalovchilar/uz">Tarbiyalovchilar</Link></p>  
                           <p><Link to="/oshxona/uz">Oshxona</Link></p>
                           <p><Link to="/galereya/uz">Galereya</Link></p>
                                <p><Link to="/manzil/uz">Manzil</Link></p>
                            </div> 
                                <span style={{fontSize:'25px'}}>|</span>  
                                <span className={styles.sub2}><Link to="/dasturlar/uz">Dasturlar</Link></span>  
                                <div className={styles.subNav2}>
                                <span><BsFillTriangleFill className={styles.icon2}/></span>
                                  <p><Link to="/dastur_1/uz">1-bosqich</Link></p>
                                  <p><Link to="/dastur_2/uz">2-bosqich</Link></p>
                                  <p><Link to="/dastur_3/uz">3-bosqich</Link></p>
                              </div>  

                                <span style={{fontSize:'25px'}}>|</span>  
                                <span><Link to="/curriculm/uz">Qabul</Link></span>  
                                <span style={{fontSize:'25px'}}>|</span>  
                                <span>Yangiliklar</span>  
                                <span style={{fontSize:'25px'}}>|</span>
                                <span>Tadbirlar</span>
                                <span style={{marginLeft:'40px'}}><a href="tel:+998335093874"><FaPhoneAlt style={{color:'#FF8080',fontSize:'18px'}}/></a></span>
                         <span><a href="http://t.me/Karshiyeva_N"><FaTelegramPlane style={{color:'#FF8080',fontSize:'23px'}}/></a></span>
                         <Link to="/login"><button className={this.state.nav? styles.btn1 :styles.btn2}>Kirish</button></Link>                        
                            
                            </div>                
                        </div>
                        </div>
                 <Container fluid>
                     <Row>
                         <Col lg={12} className={styles.text}>
                             <h1>Kirish</h1>
                             <div className={styles.form}>
                             <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{color:'white',fontSize:'17px',fontWeight:'600'}}>E-mail pochtangizni kiriting</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{color:'white',fontSize:'17px',fontWeight:'600'}}>Parolni kiriting</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                                <Button onClick={this.login} type="submit" style={{fontWeight:'600',backgroundColor:'#FF8080',border:'none',marginTop:'30px',width:'100%'}}>
                                    Kirish
                                </Button>
                                </Form>
                             </div>
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
