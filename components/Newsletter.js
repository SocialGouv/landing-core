import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import newsletter from "../../config-yml/modules/newsletter";

const Newsletter = ({ title, subtitle }) => {
  const [state, setState] = useState({ email: "", type: "newsletter" });
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (event) => {
    setState({ email: event.target.value, type: state.type });
  };
  const clearState = () => {
    setState({
      email: "",
      type: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: state.email,
      type: state.type,
    };
    axios.post(newsletter.url, user).then(() => {
      setShowMessage(true);
      clearState();
    });
  };
  const renderNewsletter = (
    <form action="" method="POST" className="w-100" onSubmit={handleSubmit}>
      <h2 className="pb-4">{title}</h2>
      <Row className="align-items-end">
        <Col xs={12} md={6}>
          <div className="pb-3 pb-md-1">{subtitle}</div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={state.email}
            className="col-12 w-100"
            required
          />
        </Col>
        <Col className="mt-3 mt-md-0">
          <input
            type="submit"
            value="S'inscrire à la newsletter"
            style={{
              background: "darkblue",
              color: "white",
              border: "none",
              padding: "8px 24px",
            }}
          />
        </Col>
      </Row>
      <div>{showMessage && "Votre message a été envoyé."}</div>
    </form>
  );
  return renderNewsletter;
};

export default Newsletter;
