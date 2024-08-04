import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
function Contacts() {
  return (
    // <Container className="my-5 min-h-100vh ">
    //   <Row className="justify-content-center">
    //     <Col md={8} lg={6}>
    //       <Card className="shadow-sm border-light">
    //         <Card.Header className="text-center">
    //           <h2>Контакты</h2>
    //         </Card.Header>
    //         <Card.Body>
    //           <Row>
    //             <Col md={12}>
    //               <h5>Наши Контакты:</h5>
    //               <ul className="list-unstyled">
    //                 <li>
    //                   <strong>Телефон:</strong> +1 (234) 567-8901
    //                 </li>
    //                 <li>
    //                   <strong>Email:</strong> support@example.com
    //                 </li>
    //                 <li>
    //                   <strong>Адрес:</strong> 1234 Elm Street, Suite 567,
    //                   Cityville, ST, 12345
    //                 </li>
    //                 <li>
    //                   <strong>Часы работы:</strong> Пн-Пт 9:00 - 18:00
    //                 </li>
    //               </ul>
    //             </Col>
    //           </Row>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
    <main className="w-full flex justify-center items-center">
      <div className="bg-gray-100 h-auto w-full md:w-1/2 lg:w-1/3 flex flex-col gap-2 justify-start p-2 rounded-md">
          <p className="font-bold text-2xl text-center pb-2 border-b-[1px] border-gray-300">Наши Контакты</p>
          <ul className="flex flex-col items-start">
                   <li>
                     <strong>Телефон:</strong> +1 (234) 567-8901
                   </li>
                   <li>
                      <strong>Email:</strong> support@example.com
                  </li>
                    <li>
                      <strong>Адрес:</strong> 1234 Elm Street, Suite 567,
                      Cityville, ST, 12345
                    </li>
                    <li>
                      <strong>Часы работы:</strong> Пн-Пт 9:00 - 18:00
                    </li>
                  </ul>
      </div>
    </main>
  );
}

export default Contacts;
