import React, { Component } from 'react'
import {Table,Button,Form} from 'react-bootstrap'
import styles from '../css/kids.module.css'
export default class Kids extends Component {
    state={
        kids:[
            {
                name:'Toshmatov Toshmat Toshmat ogli',
                sana:'2019-yil 7-oktabr',
                otasi:{
                    ismi:'Toshmatov Toshmat',
                    tel:'+8947632364'
                },
                onasi:{
                    ismi:'Toshmatova Sabina',
                    tel:'+27364712672'
                },
            },
            {
                name:'Toshmatov Toshmat Toshmat ogli',
                sana:'2019-yil 7-oktabr',
                otasi:{
                    ismi:'Toshmatov Toshmat',
                    tel:'+8947632364'
                },
                onasi:{
                    ismi:'Toshmatova Sabina',
                    tel:'+27364712672'
                },
            },
            {
                name:'Toshmatov Toshmat Toshmat ogli',
                sana:'2019-yil 7-oktabr',
                otasi:{
                    ismi:'Toshmatov Toshmat',
                    tel:'+8947632364'
                },
                onasi:{
                    ismi:'Toshmatova Sabina',
                    tel:'+27364712672'
                },
            }
        ],
        kids1:{
            name:'',
            sana:'',
            otasi:{
                ismi:'',
                tel:''
            },
            onasi:{
                ismi:'',
                tel:'',
            }
        }
    }
    render() {
        return (
            <div style={{padding:'3%'}}>
               <div className={styles.formAdmin}>
                   <h4>O'quvchi kiritish</h4>
               <Form id="formAdmin">
                                  <Form.Group controlId="name" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="F.I.O" defaultValue={this.state.kids1.name}/>
                                  </Form.Group>
                                  <Form.Group controlId="sana" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="Tug'ilgan sanasi" defaultValue={this.state.kids1.sana}/>
                                  </Form.Group>
                                  <Form.Group controlId="otaname" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="Otasining F.I.O" defaultValue={this.state.kids1.otasi.ismi}/>
                                  </Form.Group>
                                  <Form.Group controlId="otatel" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="Otasining telefon raqami" defaultValue={this.state.kids1.otasi.tel} onChange={(e)=>this.handleImage(e)}/>
                                  </Form.Group>
                                  <Form.Group controlId="onaname" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="Onasining F.I.O" defaultValue={this.state.kids1.onasi.ismi}/>
                                  </Form.Group>
                                  <Form.Group controlId="otel" style={{marginBottom:'20px'}}>
                                    <Form.Control type="text" placeholder="Onasining telefon raqami" defaultValue={this.state.kids1.onasi.tel} onChange={(e)=>this.handleImage(e)}/>
                                  </Form.Group>

                                  <Button variant="primary" className={styles.inputFormBtn} onClick={()=> this.saveTeacher()}>
                                  O'zgarishlarni saqlash
                                  </Button>
                                  <Button variant="primary" className={styles.inputFormBtn1} onClick={this.reset}>
                                                  Bekor qilish
                                  </Button>   
                              </Form>
               </div>
                 <Table style={{backgroundColor:'white',border:'none', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',borderRadius:'5px',marginRight:'20px'}} >
                        <thead style={{borderBottom:'none'}}>
                            <tr style={{borderBottom:'none'}}>
                            <th>#</th>
                            <th>F.I.O</th>
                            <th>Tug'ilgan sana</th>
                            <th>Otasi</th>
                            <th>Onasi</th>                         
                            <th>O'zgartirish</th>
                            <th>O'chirish</th>                      
                            </tr>
                        </thead>
                        <tbody style={{border:'none'}}>
                         {
                             this.state.kids.map((item,key)=>{
                              return(
                                <tr>
                                <td>{key+1}</td>
                                <td>{item.name}</td>
                                <td>{item.sana}</td>
                                <td>
                                    <p>{item.otasi.ismi}</p>
                                    <p>{item.otasi.tel}</p>
                                </td>
                                <td>
                                <p>{item.onasi.ismi}</p>
                                    <p>{item.onasi.tel}</p>
                                </td>
                                <td><Button style={{backgroundColor:'#FF8080',padding:'3px 10px',fontSize:'17px',border:'none'}} onClick={()=> this.editTeacher(key)}>O'zgartirish</Button></td>
                                <td><Button style={{backgroundColor:'#FF8080',padding:'3px 10px',fontSize:'17px',border:'none'}}  onClick={()=> this.deleteTeacher(key)}>O'chirish</Button></td>
                                
                                </tr>
                              )
                             })
                         }
                        </tbody>
                        </Table>
            </div>
        )
    }
}
