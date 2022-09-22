import "./assets/scss/style.scss";

import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ContentWrapper from "./components/ContentWrapper";
import ContentMain from "./components/ContentMain";
import ContentCurrencyTop from "./components/ContentCurrencyTop";

function App() {
  return (
    <>
      <Header />
      <ContentWrapper
        title="Swap"
        text="Buy or sell NXM tokens. NXM tokens grant you proportional power in the
          mutual."
      >
        {/* <ContentCurrencyTop /> */}
        <ContentMain />
      </ContentWrapper>
      <Footer />
    </>
  );
}

export default App;
