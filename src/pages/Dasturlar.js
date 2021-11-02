import React, { Component } from "react"
import style from "../css/Dasturlar.module.css"
import Footer from "./Footer"
import rasm1 from '../img/logo-dark.png'
import rasm5 from '../img/logo-dark.png'
import img1 from '../img/q1.jpg'
import img2 from '../img/q2.jpg'
import img3 from '../img/q3.jpg'
import img from '../img/border.png'
import { BsFillTriangleFill } from 'react-icons/bs'
import {FaHome,FaPhoneAlt,FaInstagram,FaTelegramPlane,FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import Header from "./Header"
import { getBogcha } from "../host/Config"
import { url } from "../host/Host"

export default class Dasturlar extends Component {
    state = {
        nav: false,
        open:false,
        close:false,
        dastur:[],
    }
    change = () => {
        if (window.scrollY >= 200) {
            this.setState({
                nav: true
            })
        } else {
            this.setState({
                nav: false
            })
        }
    }
    openNav=()=>{
        this.setState({
            open:true
        })
    }
    closeNav=()=>{
        this.setState({
            open:false
        })
    }
    componentDidMount() {
        getBogcha().then((res)=>{
            this.setState({dastur:res.data})
        })
        window.addEventListener("scroll", this.change);
    }
    handleClick = e => {
        console.log('click ', e);
      };
    render() {
        const { SubMenu } = Menu;

        return (
            <>
            <Header/>
            <div className={style.mat}>
            <div className={style.one}>
                <div className={this.state.nav? style.nav1_active:style.nav1}>
                 <div className={this.state.nav? style.logo1:style.logo}>
                         {
                             this.state.nav? <img src={url+this.state.dastur.logo} alt=" " />:<img src={url+this.state.dastur.logo} alt=" "/>
                         }   
                         <div className={style.navbar}>
                         <span><Link to="/dashboard/uz"><FaHome style={{color:'blue',fontSize:'23px'}}/></Link></span> 
                         <span style={{fontSize:'25px'}}>|</span> 
                         <span className={style.sub1}><Link to="/bizhaqimizda/uz">Biz haqimizda</Link></span> 
                         <div className={style.subNav1}>
                         <span><BsFillTriangleFill className={style.icon1}/></span>
                           <p><Link to="/bizningtarix/uz">Bizning tarix</Link></p>
                           <p><Link to="/nimauchunbiz/uz">Nima uchun biz</Link></p>
                           <p><Link to="/rahbariyat/uz">Rahbariyat</Link></p>
                           <p><Link to="/tarbiyachilar/uz">Tarbiyachilar</Link></p>
                           <p><Link to="/oshxona/uz">Oshxona</Link></p>
                           <p><Link to="/galereya/uz">Galereya</Link></p>
                           <p><Link to="/manzil/uz">Manzil</Link></p>
                       </div> 
                         <span style={{fontSize:'25px'}}>|</span>  
                         <span ><Link to="/dasturlar/uz">Dasturlar</Link></span>  
                         <span style={{fontSize:'25px'}}>|</span>  
                         <span><Link to="/curriculm/uz">Qabul</Link></span>  
                         <span style={{fontSize:'25px'}}>|</span>  
                         <span><Link to="/yangiliklar/uz">Yangiliklar</Link></span>  
                         <span style={{fontSize:'25px'}}>|</span>
                         <span><Link to="/tadbirlar/uz">Tadbirlar</Link></span>
                         <span style={{marginLeft:'40px'}}><a href="tel:{this.state.dastur.phone}"><FaPhoneAlt style={{color:'blue',fontSize:'18px'}}/></a></span>
                         <span><a href={this.state.dastur.telegram}><FaTelegramPlane style={{color:'blue',fontSize:'23px'}}/></a></span>
                         <Link to="/login"><button className={this.state.nav? style.btn1 :style.btn2}>Kirish</button></Link>                        
                        </div>    
                    </div>
                </div>  
                    </div> 

                <div className={style.second}>
                <div className={this.state.nav? style.nav1_active:style.nav1}>
                 <div className={this.state.nav? style.logo1:style.logo}>
                         {
                             this.state.nav? <img src={url+this.state.dastur.logo} alt=" " />:<img src={url+this.state.dastur.logo} alt=" "/>
                         }   
                          <div className={this.state.nav? style.openNav1:style.openNav}>
                        <FaBars onClick={this.openNav} style={{color:'blue',fontSize:'30px'}}/>    
                         </div>   
                         <div className={this.state.open? style.navWrapper1:style.navWrapper}>
                         <div className={style.clicknav}>
                         <Menu
                                onClick={this.handleClick}
                                style={{ width: 256, backgroundColor:'blue',border:'none',textAlign:'center',fontSize:'18px',marginTop:'100px'}}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                            >
                                    <Menu.Item key="1" style={{backgroundColor:'blue'}}>
                             <span><Link to="/dashboard/uz"><FaHome style={{color:'white',fontSize:'23px'}}/></Link></span> 
                                    </Menu.Item>
                                <SubMenu key="sub1" title="Biz haqimizda" style={{backgroundColor:'blue',color:'white'}}>
                                <Menu.ItemGroup key="g1" style={{borderTop:'3px solid rgba(0,0,0,0.4)'}}>
                                    <Menu.Item  key="2"><Link to="/bizningtarix/uz">Bizning tarix</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/nimauchunbiz/uz">Nima uchun biz</Link></Menu.Item> 
                                    <Menu.Item key="4"><Link to="/rahbariyat/uz">Rahbariyat</Link></Menu.Item>
                                    <Menu.Item key="4"><Link to="/tarbiyachilar/uz">Tarbiyachilar</Link></Menu.Item>
                                    <Menu.Item key="5"><Link to="/galereya/uz">Galereya</Link></Menu.Item>
                                    <Menu.Item key="6"><Link to="/manzil/uz">Manzil</Link></Menu.Item>
                                </Menu.ItemGroup>
                                </SubMenu>
                               <Menu.Item key="7" style={{color:'white',backgroundColor:'blue'}}>
                                   <Link to="/dasturlar/uz"  style={{color:'white'}}>Dasturlar</Link></Menu.Item>
                                <Menu.Item key="10"  style={{color:'white',backgroundColor:'blue'}}>
                                <Link to="/curriculm/uz" style={{color:'white'}}>Qabul</Link>
                                </Menu.Item>
                                <Menu.Item key="11" style={{color:'white',backgroundColor:'blue'}}>
                               <Link style={{color:'white'}} to="/yangiliklar/uz">Yangiliklar</Link>
                                </Menu.Item>
                                <Menu.Item key="12" style={{color:'white',backgroundColor:'blue'}}>
                               <Link style={{color:'white'}} to="/tadbirlar/uz">Tadbirlar</Link>
                                </Menu.Item>
                                <Menu.Item key="12" style={{color:'white',backgroundColor:'blue'}}>
                               <button style={{border:'none',backgroundColor:'white',color:'blue',borderRadius:'25px',padding:'10px 30px'}}><Link style={{color:'blue',fontWeight:'800'}} to="/login">Kirish</Link></button>
                                </Menu.Item>
                                <Menu.Item>
                                <span><a href="tel:this.state.dastur.phone"><FaPhoneAlt style={{color:'white',fontSize:'18px'}}/></a></span>
                                <span><a href={this.state.dastur.telegram}><FaTelegramPlane style={{color:'white',fontSize:'23px',marginLeft:'10px'}}/></a></span>
                                </Menu.Item>
                            </Menu>
                            <div className={style.close}>
                            <AiOutlineClose onClick={this.closeNav} style={{fontSize:'30px', color:'white'}}/>
                            </div>
                    </div>
                </div>  

            </div>
        </div>
                </div>
                <h2 className={style.sarlavha}>Dasturlar</h2>
                <div style={{ width: "200px", height: "2px", margin: "auto", backgroundColor: "blue" }}></div>
                <div className={style.oyna}>
                    <div className={style.rasm}>
                        <img src={url+this.state.dastur.program1_img} alt=" " />
                    </div>
                   
                    <div className={style.content} style={{padding:'30px'}}>
                        <h4 style={{fontFamily:'Courier',fontWeight:'600'}}>1-bosqich</h4>
                       
                        <p style={{fontFamily:'Courier'}}>
                           {this.state.dastur.program1}
                        </p>
                       
                    </div>
                </div>
                <div className={style.oyna, style.oyna1}>
                    <div className={style.content1}>
                        <h4  style={{fontFamily:'Courier',fontWeight:'600'}}>2-bosqich</h4>
                       
                        <p style={{fontFamily:'Courier',fontSize:'20px'}}>
                        {this.state.dastur.program2}
                        </p>
                       

                    </div>
                   
                    <div className={style.rasm}>
                        <img src={url+this.state.dastur.program2_img} alt=" " />
                    </div>

                </div>
                <div className={style.oyna}>
                    <div className={style.rasm}>
                        <img src={url+this.state.dastur.program3_img} alt=" " />
                    </div>
                   
                    <div className={style.content}>
                        <h4 style={{fontFamily:'Courier',fontWeight:'600'}}>3-bosqich</h4>
                       
                        <p style={{fontFamily:'Courier'}}>
                        {this.state.dastur.program3}
                        </p>
                       

                    </div>
                </div>
                
            </div>
            <Footer/>
            </>
        )
    }
}