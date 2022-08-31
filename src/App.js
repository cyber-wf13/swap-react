import "./assets/scss/style.scss";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContentWrapper from "./components/ContentWrapper";
import ContentMain from "./components/ContentMain";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper
        title="Swap"
        text="Buy or sell NXM tokens. NXM tokens grant you proportional power in the
          mutual."
      >
        <ContentMain />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default App;
