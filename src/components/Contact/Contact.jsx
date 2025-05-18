import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [notDone, setNotDone] = useState(false);
  const [error, setError] = useState(false); // Thêm trạng thái lỗi
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
    setError(false);
  };

  const sendEmail = (e) => {
    console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID);
    console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    e.preventDefault();

    // Kiểm tra các trường bắt buộc
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
      return;
    }

    // Gửi email qua EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Send email successfully:", result.text);
          setDone(true);
          setError(false);
          // Reset form và formData
          setFormData({
            from_name: "",
            reply_to: "",
            message: "",
          });
          form.current.reset();
        },
        (error) => {
          console.log("Error send email:", error.text);
          setError(true);
          setDone(false);
        }
      );
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              value={formData.from_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              value={formData.reply_to}
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
            {notDone && (
              <span className="not-done">
                Please fill in all the required fields!
              </span>
            )}
            {error && (
              <span className="error">
                An error occurred while sending the email. Please try again
                later!
              </span>
            )}
            <Button type="submit" className="button" disabled={done}>
              Send
            </Button>
            {done && (
              <span className="done">
                Thank you for contacting me! I have received your email. If you
                have a serious question, I will reply soon. You can also reach
                me on email if needed. Email: thanhdo062305@gmail.com
              </span>
            )}
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
