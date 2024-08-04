import React from "react";
import NOT_FOUND_IMG from "../static/not_found.webp";

function No_page() {
  return (
    <div className="not-found-page">
      <img src={NOT_FOUND_IMG} alt="" srcset="" />
      <h1>АУЧ! Страница не найдена...</h1>
    </div>
  );
}

export default No_page;
