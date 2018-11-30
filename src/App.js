import React, { Component } from "react";
import styled from "styled-components";
import GlobalStyle from './styled/global';
import TopBar from "./components/TopBar/TopBar";
import Browse from "./components/Main_section/Browse/Browse";
import ApartmentMain from "./components/Main_section/Apartment/Main/Apartment_main";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <TopBar />
        {/* <Browse /> */}
        <ApartmentMain />
      </Wrapper>
    );
  }
}


const Wrapper = styled.div``;

export default App;
