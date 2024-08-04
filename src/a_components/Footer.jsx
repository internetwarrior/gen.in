import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

import { Link } from "react-router-dom";
import { WEB_SITE_DESCRIPTION, WEB_SITE_NAME } from "../settings/global";
export default function Footer() {
  const { user } = useContext(AuthContext);

  return (
    // <MDBFooter
    //   bgColor="light"
    //   className="text-center text-lg-start text-muted mt-3"
    // >
    //   <section className="d-flex justify-content-center p-4 border-bottom">
    //     <div className="me-5 d-flex    d-none d-lg-block">
    //       <h4>Добро пожаловать!</h4>
    //     </div>
    //   </section>

    //   <section className="">
    //     <MDBContainer className="text-center text-md-start mt-5">
    //       <MDBRow className="mt-3">
    //         <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              // <h4 className="text-uppercase fw-bold mb-4">
              //   <MDBIcon icon="gem" className="me-3" />
              //   {WEB_SITE_NAME}
              // </h4>
              // <p>{WEB_SITE_DESCRIPTION}</p>
    //         </MDBCol>

    //         <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              // <h6 className="text-uppercase fw-bold mb-4">страницы</h6>
              // <p>
              //   <Link to={"/profile"} className="text-reset">
              //     Профиль
              //   </Link>
              // </p>
    //         </MDBCol>

    //         <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">О нас</h6>
    //           <p>
    //             <Link to={"/"} className="text-reset">
    //               Правила использывание
    //             </Link>
    //           </p>
    //         </MDBCol>

    //         <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
    //           <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
    //           <p>
    //             <MDBIcon icon="home" className="me-2" />
    //             Адрессовая Адресовная
    //           </p>
    //           <p>
    //             <MDBIcon icon="envelope" className="me-3" />
    //             kairatbektov@gmail.com
    //           </p>
    //           <p>
    //             <MDBIcon icon="phone" className="me-3" />
    //             +996 558 101 701
    //           </p>
    //           <p>
    //             <MDBIcon icon="print" className="me-3" />
    //             +996 558 101 701
    //           </p>
    //         </MDBCol>
    //       </MDBRow>
    //     </MDBContainer>
    //   </section>

      // <div
      //   className="text-center p-4 bg-black text-white"
        
      // >
      //   © 2024 Copyright:{" "}
      //   <a className="text-reset fw-bold" href="#">
      //     Generate.in
      //   </a>
      // </div>
    // </MDBFooter>
    <footer className="flex flex-col items-center gap-4 w-full pb-4 pt-24">
    <section className="flex flex-col md:flex-row justify-start md:justify-between gap-8 p-4 bg-gray-100 w-full">
      <div className="w-full flex flex-col gap-2">
      <h4 className="text-uppercase font-black text-xl">
        {WEB_SITE_NAME}
      </h4>
      <p>{WEB_SITE_DESCRIPTION}</p>
      </div>
      <div className="w-full flex flex-col gap-2">
      <h4 className="text-uppercase font-bold text-xl">Cтраницы</h4>
        <Link to={"/"} className="font-semibold">
          Главная
        </Link>
      {user ? (
        <Link to={"/profile"} className="font-semibold">
          Личный кабинет
        </Link>
      ) : (
        <Link to={"/login"} className="font-semibold">
          Личный кабинет
        </Link>
        
      )}
      </div>
      <div className="w-full flex flex-col gap-2">
      <h4 className="text-uppercase font-bold text-xl">Контакты</h4>
      <p>
        <strong>Телефон:</strong> +1 (234) 567-8901
      </p>
      <p>
        <strong>Email:</strong> support@example.com
    </p>
      <p>
        <strong>Адрес:</strong> 1234 Elm Street, Suite 567,
        Cityville, ST, 12345
      </p>
      <p>
        <strong>Часы работы:</strong> Пн-Пт 9:00 - 18:00
      </p>
      </div>
      
    </section>
    <div className="text-center p-4 bg-primary text-white rounded-md w-full">
        © 2024 Copyright:{" "}
        <a className="text-reset fw-bold" href="#">
          Generate.in
        </a>
      </div>
    </footer>
  );
}
