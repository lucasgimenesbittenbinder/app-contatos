import React from "react";
import dayjs from "dayjs";
import "./Contact.scss";

class Contact extends React.Component {
  render() {
    const contact = this.props.data;
    return (
      <article className="contact" data-testid="contact">
        <img
          className="contact__avatar"
          src={contact.avatar}
          alt={contact.name}
        />
        <span className="contact__data">{contact.name}</span>
        <span className="contact__data">{contact.phone}</span>
        <span className="contact__data">{contact.country}</span>
        <span className="contact__data">
          {dayjs(contact.admissionDate).format("DD/MM/YYYY")}
        </span>
        <span className="contact__data">{contact.company}</span>
        <span className="contact__data">{contact.department}</span>
      </article>
    );
  }
}

export default Contact;
