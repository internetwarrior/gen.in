import React from "react";
import Header from "./a_components/Header";
import Footer from "./a_components/Footer";
import { Container } from "react-bootstrap";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <AppRoutes />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
