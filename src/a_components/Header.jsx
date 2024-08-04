import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { Button } from "react-bootstrap";
import { WEB_SITE_NAME } from "../settings/global";
function Header() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       <h4>
    //         <Link style={{ all: "unset" }} to={"/"}>
    //           {WEB_SITE_NAME}
    //         </Link>
    //       </h4>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Link className="nav-link" to={"/"}>
    //           Главая страница
    //         </Link>
            // {user ? (
            //   <Link className="nav-link" to="profile">
            //     Профил
            //   </Link>
            // ) : (
            //   <></>
            // )}
    //       </Nav>
    //     </Navbar.Collapse>
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>
            // {user ? (
            //   <div className="d-flex gap-2 ">
            //     <Link to={"profile"}>
            //       <Button variant="se">{user.username + ""}</Button>
            //     </Link>
            //     <Button
            //       variant="outline-warning"
            //       onClick={logoutUser}
            //       role="button"
            //     >
            //       Выйти
            //     </Button>
            //   </div>
            // ) : (
            //   <Link className="nav-link" to={"/login"}>
            //     <Button variant="warning">Войти</Button>
            //   </Link>
            // )}
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav className="flex items-end py-4 justify-between">
        <Link to={"/"} className="font-black md:text-4xl text-xl text-black">
          {WEB_SITE_NAME}
        </Link>
        
        {user ? (
              <div className="flex items-center gap-4">
                <Link to={"/profile"}>
                  <button className="text-black font-semibold md:text-xl text-md py-1 px-3 rounded-md ">
                    {user.username}
                  </button>
                </Link>
                <button className="bg-primary py-1 px-3 rounded-md text-white font-semibold text-md" onClick={logoutUser}>
                    Выход
                </button>
              </div>
            ) : (
              <Link className="nav-link" to={"/login"}>
                <button className="bg-primary py-1 px-3 rounded-md text-white font-semibold text-md">
                    Вход
                </button>
              </Link>
            )}
    </nav>
  );
}

export default Header;
