import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import ARROW_SVG from "../static/arrow-down.svg";

import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { Container, Row, Col } from "react-bootstrap";
import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import { BASE_URL } from "../settings/global";

function Profile() {
  let [invoices, setInvoices] = useState([]);
  let [config, setConfig] = useState([]);

  let { authTokens, logoutUser } = useContext(AuthContext);

  useEffect(() => {
    getConfigs();
    getInvoices();
  }, []);

  let getConfigs = async () => {
    let response = await fetch(`${BASE_URL}/api_V1/config/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setConfig(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  let getInvoices = async () => {
    let response = await fetch(`${BASE_URL}/api_V1/invoice/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      setInvoices(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <>
      <div className="profile-container" style={{ marginBottom: "64px" }}>
        <div className="filters">
          <Link to={"/form"}>
            <Button variant="primary">Создать Invoice</Button>{" "}
          </Link>
        </div>
        {invoices.map((invoice) => {
          return (
            <>
              <Detailed config={config} invoice={invoice} />
            </>
          );
        })}
      </div>
    </>
  );
}
export default Profile;

const Detailed = (props) => {
  const { invoice, config } = props;

  const [visible, setVisible] = useState(false);

  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
  });
  const styles = StyleSheet.create({
    page: {
      fontFamily: "Roboto",
      padding: "40px",
    },
  });

  return (
    <div className="invoce-list">
      <div className="invoce-item">
        <h5>Инвойс № {invoice.invoice_number}</h5>
        <small>Статус: {invoice.receipt.status}</small>
        <div>
          <PDFDownloadLink
            document={
              <Document>
                <Page size="A4" style={styles.page}>
                  <View style={styles.section}>
                    <Text>Инвойс № {invoice.invoice_number} </Text>
                    <Text>Реквезиты отправителя{invoice?.payer_detail}</Text>
                    <Text>Реквезиты получателя{invoice?.recipient_detail}</Text>
                    <Text>Сумма {invoice?.amount} $</Text>
                  </View>
                </Page>
              </Document>
            }
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? (
                <Button variant="outlineвфц-danger">Загрузка...</Button>
              ) : (
                <Button variant="outline-danger">Скачать PDF</Button>
              )
            }
          </PDFDownloadLink>

          <button
            onClick={() => {
              setVisible((p) => !p);
            }}
            style={{ all: "unset", cursor: "pointer" }}
          >
            <img
              src={ARROW_SVG}
              style={{
                transition: "all 0.4s ease",
                transform: visible && "rotate(180deg)",
              }}
              alt=""
              srcset=""
            />
          </button>
        </div>
      </div>
      <InvoiceDetails visible={visible} config={config} invoice={invoice} />
      <PaymentDetails visible={visible} config={config} invoice={invoice} />
    </div>
  );
};

const InvoiceDetails = ({ invoice, visible }) => {
  return (
    visible && (
      <Container className="mt-5">
        <h4 className="mb-3 ">ИНФОРМАЦИЯ ДЛЯ ОПЛАТЫ</h4>
        <Row className="w-100">
          <Col>
            <div className="border rounded p-4 shadow-sm">
              <small className="mb-3 ">Номер счета</small>
              <h6 className="mb-3 ">{invoice.invoice_number}</h6>
              <small className="mb-3">Сумма</small>
              <h6 className="mb-3 ">{invoice.amount}</h6>
            </div>
          </Col>
          <Col>
            <div className="border rounded p-4 shadow-sm">
              <small className="mb-3">Детали получателя</small>
              <h6 className="mb-3 ">{invoice.recipient_detail}</h6>

              <small className="mb-3">Детали плательщика</small>
              <h6 className="mb-3 ">{invoice.payer_detail}</h6>
            </div>
          </Col>
        </Row>
      </Container>
    )
  );
};

const PaymentDetails = (props) => {
  const { authTokens, logoutUser } = useContext(AuthContext);

  let { config, invoice, visible } = props;
  const { agent_report, sub_agent, receipt } = invoice;

  const submitCashRate = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `${BASE_URL}/api_V1/receipt/update/${receipt.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            cash_rate: e.target[0].value,
            status_update: "B",
          }),
        }
      );
      let data = await response.json();

      if (response.status === 200) {
        setFormVisible(false);
        window.location.reload(false);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    } catch (error) {
      alert(error);
    }
  };
  const verifyPayment = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `${BASE_URL}/api_V1/receipt/update/${receipt.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + String(authTokens.access),
          },
          body: JSON.stringify({
            status_update: "C",
          }),
        }
      );
      let data = await response.json();

      if (response.status === 200) {
        setFormVisible(false);
        window.location.reload(false);
      } else if (response.statusText === "Unauthorized") {
        logoutUser();
      }
    } catch (error) {
      alert(error);
    }
  };

  const [formVisible, setFormVisible] = useState(false);

  return (
    <>
      {visible && (
        <Container className="mt-5">
          <h4 className="mb-3 ">ИНФОРМАЦИЯ ДЛЯ ОПЛАТЫ</h4>
          <Row className="d-flex w-100 ">
            <Col>
              <div className="border rounded p-4 shadow-sm ">
                <h6 className="mb-3">{config?.payment_information}</h6>

                <small className="mb-3">Курс:</small>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <h6>${config?.cash_rate}</h6>{" "}
                  {receipt.status !== "Оплачено" && (
                    <Button
                      variant={
                        formVisible ? "outline-danger" : "outline-secondary"
                      }
                      onClick={() => {
                        setFormVisible((p) => !p);
                      }}
                    >
                      {formVisible ? "Отменить" : "Предложить свой курс"}
                    </Button>
                  )}
                </div>

                {formVisible && (
                  <form
                    className="form-for-cash-rate"
                    onSubmit={submitCashRate}
                  >
                    <MDBInput
                      className="m-4"
                      min={1}
                      required={true}
                      type="number"
                    />{" "}
                    <Button className="m-4" variant="success" type="submit">
                      Отправить
                    </Button>
                  </form>
                )}

                <small className="mb-3">Статус оплаты</small>
                <h6 className="mb-3">{invoice?.receipt?.status}</h6>
                <small className="mb-3">К оплате:</small>
                <h6 className="mb-3">{invoice?.amount / config?.cash_rate}</h6>
                {receipt.status !== "Оплачено" && (
                  <form onSubmit={verifyPayment}>
                    <MDBInputGroup style={{ display: "flex" }}>
                      <Button
                        className="mb-4mx-5 w-100"
                        variant="success"
                        type="submit"
                      >
                        Подтвердить оплату
                      </Button>
                    </MDBInputGroup>
                  </form>
                )}
              </div>
            </Col>
            <Col>
              {invoice?.receipt?.status == "Оплачено" && (
                <div className="border rounded p-4 shadow-sm ">
                  <>
                    <small className="mb-3">Суб Агент:</small>
                    <h6 className="mb-3">{invoice?.receipt?.sub_agent}</h6>
                    <small className="mb-3">Акт работы Агент:</small>
                    <h6 className="mb-3">{invoice?.receipt?.completed_act}</h6>
                    <small className="mb-3">Agent Report:</small>
                    <h6 className="mb-3">{invoice?.receipt?.agent_report}</h6>
                  </>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
