import React, { Component } from 'react'
import style from '../css/Header.module.css'
import '../App.css'
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className={style.all1}>
<div className={style.text1}>
    <div className={style.text2}>
<h1 style={{fontFamily:'sans-serif'}} >Farzandingiz kelajagini biz bilan quring</h1>
<p style={{fontFamily:'sans-serif',}}> Flamingoning talabalari juda yaxshi ko'rishadi. Biz o'zimizni bolalar, o'qituvchilar va ma'murlardan iborat g'amxo'r o'quv jamoasini yaratishga bag'ishlaymiz.</p>
    </div>
    
     </div>
<div className={style.video1}>
<div style={{display:'block',width:'100%'}}>
<div class="box12">
<iframe width="100%" height="100%"
src="https://www.youtube.com/embed/Pyb0z_YQjjI?controls=0&autoplay=1&mute=1&loop=1">
</iframe> 
  <div class="ribbon ribbon-top-left"><span>2020</span></div>
  <div class="ribbon ribbon-top-right"><span>2021</span></div>
  <div class="ribbon ribbon-bottom-left"><span>2022</span></div>
  <div class="ribbon ribbon-bottom-right"><span>2023</span></div>
</div>
<h1 style={{margin:'auto',textAlign:'center', fontFamily:'cursive',marginTop:'30px',color:'white',textShadow:'0px 0px 40px white'}}>
    yorqin lavhalar
</h1>
</div>
</div>
        </div>


      </div>
    )
  }
}
