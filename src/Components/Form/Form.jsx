import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import "./Form.css";
import Button from "../Button/Button";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("abc");
  const [email, setEmail] = useState("asd");
  const [text, setText] = useState("abcj");
  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className="container">
      <div className="contact_form">
        <div className="top_btn">
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoMdCall fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL"
          icon={<HiMail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className="form_container">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="form_container">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="form_container">
            <label htmlFor="email">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className="contactimage">
        <img src="../../../public/images/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default Form;
