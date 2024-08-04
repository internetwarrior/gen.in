import React, { useContext } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuthContext from "../context/AuthContext";

const Login = () => {
  let { loginUser } = useContext(AuthContext);
  return (
    <main className="w-full flex justify-center items-center min-h-[50vh]">
      <div className="bg-gray-100 h-auto w-full md:w-1/2 lg:w-1/3 flex flex-col gap-6 justify-start p-2 rounded-md">
          <p className="font-bold text-2xl text-center">Добро пожаловать!</p>
          <form onSubmit={loginUser} className="flex flex-col items-center gap-2">
            <input type="username" name="username" id="email" placeholder="Имя пользователя" className="w-[90%] p-2 outline-none"/>
            <input type="password" name="password" id="password" placeholder="Пароль" className="w-[90%] p-2 outline-none"/>
            <button type="submit" className="bg-primary py-1 px-3 rounded-md text-white font-semibold text-md w-[90%]">Вход</button>
              <Link to="/contact" className="text-sm font-light underline">
                Нет аккаунта?
              </Link>
            </form>
      </div>
    </main>
    // <MDBContainer className="" fluid>
    //   <MDBRow>
    //     <MDBCol sm="6">
    //       <div className="d-flex flex-row ps-5 pt-5">
    //         <span className="h1 fw-bold mb-0">Добро Пожоловать!</span>
    //       </div>

    //       <div className="d-flex flex-column justify-content-center w-75 pt-4">
    //         <h3
    //           className="fw-normal mb-3 ps-5 pt-5 pb-3"
    //           style={{ letterSpacing: "1px" }}
    //         >
    //           Войти
    //         </h3>
            // <form onSubmit={loginUser}>
            //   <MDBInput
            //     wrapperClass="mb-4 mx-5 w-100"
            //     placeholder="Username"
            //     id="email"
            //     type="username"
            //     name="username"
            //     size="lg"
            //   />
            //   <MDBInput
            //     wrapperClass="mb-4 mx-5 w-100"
            //     placeholder="Пароль"
            //     id="password"
            //     type="password"
            //     name="password"
            //     size="lg"
            //   />

            //   <Button
            //     className="mb-4 px-5 mx-5 w-100"
            //     variant="warning"
            //     size="regular"
            //     type="submit"
            //   >
            //     Отправить
            //   </Button>
            // </form>
            // <p className="small mb-5 pb-lg-3 ms-5">
            //   <Link class="text-muted" to="/contact">
            //     Нету аккаунта?
            //   </Link>
            // </p>
    //       </div>
    //     </MDBCol>

    //     <MDBCol sm="6" className="d-none d-sm-block px-0 ">
    //       <img
    //         src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
    //         alt="Login image"
    //         className="w-100"
    //         style={{
    //           objectFit: "cover",
    //           objectPosition: "left",
    //           maxHeight: "75vh",
    //         }}
    //       />
    //     </MDBCol>
    //   </MDBRow>
    // </MDBContainer>
  );
};

export default Login;
