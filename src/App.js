import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from './styled/global.styles';
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Browse from "./components/Main_section/Browse/Browse";
import ApartmentMain from "./components/Main_section/Apartment/Main/Apartment_main";
import HomePage from "./components/Main_section/Home_page/Home_page";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <TopBar />
        {/* <Browse /> */}
        <ApartmentMain />
        {/* <HomePage /> */}
        <Footer />
      </Wrapper>
    );
  }
}


const Wrapper = styled.div``;

export default App;
