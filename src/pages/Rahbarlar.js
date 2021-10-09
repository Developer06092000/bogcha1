import React, { Component } from "react";
import { Table, Button, Form, Row, Col } from "react-bootstrap";
import styles from "../css/kids.module.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import {
  deleteTeacher,
  editTeachers,
  getRahbariyat,
  pushTeacher,
} from "../host/Config";
export default class Rahbarlar extends Component {
  state = {
    rahbarlar: [],
    kids1: {},
    image: null,
    imageF: null,
    full_name: "",
    lavozim: "",
    mutaxassislik: "",
    otm: "",
    about: "",
    phone: "",
    email: "",
    telegram: "",
    date: null,
    dateF: null,
    editId: null,
  };
  deleteTeacher = (id) => {
    deleteTeacher(id)
      .then((res) => {
        this.getRahbarlar();
        console.log("Ma'lumot o'chirildi!");
      })
      .catch((err) => {
        console.log("Ma'lumot o'chirilmadi!");
      });
  };
  getRahbarlar = () => {
    getRahbariyat()
      .then((res) =>
        this.setState({
          rahbarlar: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  datePick = (a, b) => {
    this.setState({ date: b, dateF: a });
  };
  reset = () => {
    this.setState({
      image: null,
      imageF: null,
      full_name: "",
      lavozim: "",
      mutaxassislik: "",
      otm: "",
      about: "",
      phone: "",
      email: "",
      telegram: "",
      date: null,
      dateF: null,
      editId: null,
    });
  };
  editTeacher = (id) => {
    console.log(this.state.rahbarlar[id]);
    this.setState({
      editId: this.state.rahbarlar[id].id,
      imageF: this.state.rahbarlar[id].image,
      full_name: this.state.rahbarlar[id].full_name,
      lavozim: this.state.rahbarlar[id].lavozim,
      mutaxassislik: this.state.rahbarlar[id].mutaxassislik,
      otm: this.state.rahbarlar[id].otm,
      about: this.state.rahbarlar[id].about,
      phone: this.state.rahbarlar[id].phone,
      email: this.state.rahbarlar[id].email,
      telegram: this.state.rahbarlar[id].telegram,
      date: this.state.rahbarlar[id].date,
      dateF: moment(this.state.rahbarlar[id].date),
    });
  };
  saveTeacher = (e) => {
    var info = {
      full_name: this.state.full_name,
      otm: this.state.otm,
      mutaxassislik: this.state.mutaxassislik,
      telegram: this.state.telegram,
      email: this.state.email,
      lavozim: this.state.lavozim,
      phone: this.state.phone,
      about: this.state.about,
      date: this.state.date,
    };
    var bodyFormData = new FormData();
    bodyFormData.append("full_name", this.state.full_name ?? "");
    bodyFormData.append("otm", this.state.otm ?? "");
    bodyFormData.append("mutaxassislik", this.state.mutaxassislik ?? "");
    bodyFormData.append("telegram", this.state.telegram ?? "");
    bodyFormData.append("email", this.state.email ?? "");
    bodyFormData.append("lavozim", this.state.lavozim ?? "");
    bodyFormData.append("phone", this.state.phone ?? "");
    bodyFormData.append("about", this.state.about ?? "");
    bodyFormData.append("image", this.state.image ?? null);
    bodyFormData.append("date", this.state.date ?? null);
    bodyFormData.append("kg", 4);
    if (this.state.editId === null) {
      pushTeacher(bodyFormData)
        .then((res) => {
          this.getRahbarlar();
          this.reset();
        })
        .catch((err) => {
          console.log("Ishlamadi");
        });
    } else {
      if (this.state.image === null) {
        editTeachers(info, this.state.editId)
          .then((res) => {
            this.getRahbarlar();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      } else {
        editTeachers(bodyFormData, this.state.editId)
          .then((res) => {
            this.getRahbarlar();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      }
    }
  };
  componentDidMount() {
    this.getRahbarlar();
  }

  onFullName = (e) => {
    this.setState({ full_name: e.target.value });
  };
  onOTM = (e) => {
    this.setState({ otm: e.target.value });
  };
  onEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onAbout = (e) => {
    this.setState({ about: e.target.value });
  };
  onLavozim = (e) => {
    this.setState({ lavozim: e.target.value });
  };
  onMutaxassislik = (e) => {
    this.setState({ mutaxassislik: e.target.value });
  };
  onPhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  onTelegram = (e) => {
    this.setState({ telegram: e.target.value });
  };
  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "YYYY-MM-DD";
    const customFormat = (value) =>
      `custom format: ${value.format(dateFormat)}`;

    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <h4>Rahbar kiritish</h4>

          <Form id="formAdmin">
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label>Familiya,ism,sharifni kiriting</Form.Label>
                  <Form.Control
                    value={this.state.full_name}
                    onChange={this.onFullName}
                    type="text"
                    placeholder="F.I.Sh"
                  />
                </Form.Group>
                <Form.Group controlId="otm" style={{ marginBottom: "20px" }}>
                  <Form.Label>Tamomlagan oliy ta'lim muassasasi</Form.Label>
                  <Form.Control
                    value={this.state.otm}
                    onChange={this.onOTM}
                    type="text"
                    placeholder="O.T.M"
                  />
                </Form.Group>
                <Form.Group controlId="about" style={{ marginBottom: "20px" }}>
                  <Form.Label>Mutaxasisligini kiritng</Form.Label>
                  <Form.Control
                    value={this.state.mutaxassislik}
                    onChange={this.onMutaxassislik}
                    type="text"
                    placeholder="Mutaxasisligi"
                  />
                </Form.Group>
                <Form.Group
                  controlId="telegram"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label>Telegram manzil kiriting</Form.Label>
                  <Form.Control
                    value={this.state.telegram}
                    onChange={this.onTelegram}
                    type="text"
                    placeholder="Telegram"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasm kiriting </Form.Label>
                  <br />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={this.customRequest}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email manzil kiriting</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Email kiriting"
                    value={this.state.email}
                    onChange={this.onEmail}
                  />
                </Form.Group>{" "}
                <Form.Group
                  controlId="lavozim"
                  style={{ marginBottom: "20px" }}
                >
                  <Form.Label>Ishlaydigan lavozimi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Lavozimi"
                    value={this.state.lavozim}
                    onChange={this.onLavozim}
                  />
                </Form.Group>
                <Form.Group controlId="PhoneNumber" className="mb-3">
                  <Form.Label>Telefon raqam kiriting </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Telefon raqam"
                    value={this.state.phone}
                    onChange={this.onPhone}
                  />
                </Form.Group>
                <Space direction="vertical" size={12}>
                  <Form.Label>Tug'ilgan yil,oy,sanani kiriting</Form.Label>
                  <DatePicker
                    // defaultValue={moment("2000/01/01", dateFormat)}
                    format={dateFormat}
                    onChange={this.datePick}
                    value={this.state.dateF}
                  />
                </Space>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Qo'shimcha ma'lumot</Form.Label>
              <Form.Control
                value={this.state.about}
                onChange={this.onAbout}
                as="textarea"
                rows={3}
                placeholder="Qo'shimcha ma'lumotlar..."
              />
            </Form.Group>
            <Button
              // type="submit"
              variant="primary"
              className={styles.inputFormBtn}
              onClick={() => this.saveTeacher()}
            >
              O'zgarishlarni saqlash
            </Button>
            <Button
              variant="primary"
              className={styles.inputFormBtn1}
              onClick={this.reset}
            >
              Bekor qilish
            </Button>
          </Form>
        </div>
        <Table
          style={{
            backgroundColor: "white",
            border: "none",
            boxShadow:
              "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
            borderRadius: "5px",
            marginRight: "20px",
          }}
        >
          <thead style={{ borderBottom: "none" }}>
            <tr style={{ borderBottom: "none" }}>
              <th>#</th>
              <th>F.I.O</th>
              <th>Lavozimi</th>
              <th>Tug'ilgan sana</th>
              <th>Mutaxasisligi</th>
              <th>OTM</th>
              <th>Haqida</th>
              {/* <th>Tel. raqam</th>
              <th>Pochta</th>
              <th>Telegram</th> */}
              <th>O'zgartirish</th>
              <th>O'chirish</th>
            </tr>
          </thead>
          <tbody style={{ border: "none" }}>
            {this.state.rahbarlar.map((item, key) => {
              return (
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.full_name}</td>
                  <td>{item.lavozim}</td>
                  <td>{item.date}</td>
                  <td>{item.otm}</td>
                  <td>{item.mutaxassislik}</td>
                  <td>{item.about}</td>
                  {/* <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.telegram}</td> */}
                  <td>
                    <Button
                      style={{
                        backgroundColor: "#FF8080",
                        padding: "3px 10px",
                        fontSize: "17px",
                        border: "none",
                      }}
                      onClick={() => this.editTeacher(key)}
                    >
                      O'zgartirish
                    </Button>
                  </td>
                  <td>
                    <Button
                      style={{
                        backgroundColor: "#FF8080",
                        padding: "3px 10px",
                        fontSize: "17px",
                        border: "none",
                      }}
                      onClick={() => this.deleteTeacher(item.id)}
                    >
                      O'chirish
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}
