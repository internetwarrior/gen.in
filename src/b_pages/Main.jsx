import React from "react";
import Banner from "../a_components/Banner";
import { Link } from "react-router-dom";
import IMAGE_BG from "../static/main_bg.jpg";
import QUESTION_IMG from "../static/question.png";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Main() {
  return (
    // <div>
    //   <div className=" landing-welcome">
    //     <div className="first">
    //       <h1>
    //         Создавайте Инвойсы Быстро и Легко – Автоматизируйте Вашу Финансовую
    //         Администрацию
    //       </h1>
    //       <h4>
    //         {" "}
    //         Срочно заходите {" -> "}
    //         <Link to={"/login"} className="btn btn-warning btn-lg">
    //           Погнали
    //         </Link>
    //       </h4>
    //     </div>
    //     <div className="second">
    //       <img src={IMAGE_BG} alt="" />
    //     </div>
    //   </div>
    //   <Container className="my-5 d-flex justify-content-center align-items-center">
    //     <Row className="question">
    //       <img src={QUESTION_IMG} alt="" />
    //     </Row>
    //     <Row className="justify-content-center">
    //       <Col>
    //         <Card className="text-center shadow-sm border-light">
    //           <Card.Body>
    //             <Card.Text>
    //               «Устали тратить время на создание инвойсов вручную? Наш
    //               генератор инвойсов упрощает процесс до нескольких кликов.
    //               Легко создавайте профессиональные счета, отслеживайте платежи
    //               и управляйте своими финансами без стресса. Интуитивно понятный
    //               интерфейс и гибкие шаблоны помогут вам сэкономить время и
    //               повысить точность. Попробуйте наш инструмент сегодня и
    //               освободите время для того, что действительно важно для вашего
    //               бизнеса!»
    //             </Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </Col>
    //     </Row>
    //   </Container>
    //   {/* <Banner /> */}
    // </div>
    <main className="flex flex-col items-center w-full gap-4">
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <div className=" w-full flex flex-col gap-4">
          <h1 className="font-semibold text-2xl">Создавайте Инвойсы Быстро и Легко – Автоматизируйте Вашу Финансовую
                Администрацию
          </h1>
          <Link to={"/login"} className="bg-primary py-1 px-3 rounded-md text-white font-semibold text-md w-1/3 flex items-center justify-center">Попробовать</Link>
          </div>
        <div className="w-full flex md:items-end md:justify-end items-center justify-center">
        <img src={IMAGE_BG} alt="" className="rounded-md max-h-[30vh] md:max-h-[60vh] w-full object-cover md:w-auto"/>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="w-full flex items-start justify-start">
        <img src={QUESTION_IMG} alt="" className="rounded-md max-h-[60vh]"/>
        </div>
        <div className=" w-full flex flex-col gap-4">
          <p className="text-md">
          «Устали тратить время на создание инвойсов вручную? Наш
                   генератор инвойсов упрощает процесс до нескольких кликов.
                   Легко создавайте профессиональные счета, отслеживайте платежи
                   и управляйте своими финансами без стресса. Интуитивно понятный
                   интерфейс и гибкие шаблоны помогут вам сэкономить время и
                   повысить точность. Попробуйте наш инструмент сегодня и
                   освободите время для того, что действительно важно для вашего
                   бизнеса!»
          </p>
          </div>
        
      </section>
    </main>
  );
}
