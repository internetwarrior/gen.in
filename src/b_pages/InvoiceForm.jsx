import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { BASE_URL } from "../settings/global";

const InvoiceForm = () => {
  let navigate = useNavigate();
  let { authTokens, logoutUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    invoice_number: "",
    recipient_detail: "",
    payer_detail: "",
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${BASE_URL}/api_V1/invoice/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify(formData), // Adjust as per API requirements
      });
      let data = await response.json();

      if (response.status === 201) {
        navigate("/profile");
      } else if (response.status === 401) {
        logoutUser();
      } else if (response.status === 400) {
        alert(data?.invoice_number[0]);
      } else {
        alert(response.status);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col md={4}>
          <h1>Форма счёта</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="invoice_number">
              <Form.Label>Номер инвойса</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите номер счёта"
                name="invoice_number"
                value={formData.invoice_number}
                onChange={handleChange}
                maxLength={20}
                required
              />
            </Form.Group>

            <Form.Group controlId="recipient_detail">
              <Form.Label>Реквизиты получателя</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите данные получателя"
                name="recipient_detail"
                value={formData.recipient_detail}
                onChange={handleChange}
                maxLength={250}
                required
              />
            </Form.Group>

            <Form.Group controlId="payer_detail">
              <Form.Label>Реквизиты плательщика</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите данные плательщика"
                name="payer_detail"
                value={formData.payer_detail}
                onChange={handleChange}
                maxLength={250}
                required
              />
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Сумма</Form.Label>
              <Form.Control
                type="number"
                placeholder="Введите сумму"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                step="0.01"
                max={99999999.99}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Отправить
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceForm;
