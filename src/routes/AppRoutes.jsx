import React from "react";
import Home from "../b_pages/Main";
import { Routes, Route } from "react-router-dom";
import No_page from "../b_pages/No_page";
import Login from "../b_pages/Login";
import Profile from "../b_pages/Profile";
import InvoiceForm from "../b_pages/InvoiceForm";
import PrivateRoutes from "../utils/PrivateRoutes";
import Contacts from "../b_pages/Contacts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contacts />} />
      <Route element={<PrivateRoutes />}>
        <Route element={<Profile />} path="/profile" exact />
        <Route element={<InvoiceForm />} path="/form" />
      </Route>
      <Route path="*" element={<No_page />} />
    </Routes>
  );
}

export default AppRoutes;
