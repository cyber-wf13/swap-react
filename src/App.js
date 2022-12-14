import "./assets/scss/style.scss";

import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ContentWrapper from "./components/ContentWrapper";
import { routes } from "./router/routes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper
        title="Swap"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta."
      >
        <Routes>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            );
          })}
        </Routes>
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default App;
