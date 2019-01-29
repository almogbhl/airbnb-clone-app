import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import GlobalStyle from "./styled/global.styles";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import Browse from "./components/Main_section/Browse/Browse";
import ApartmentMain from "./components/Main_section/Apartment/Main/Apartment_main";
import HomePage from "./components/Main_section/Home_page/Home_page";
import { DivBorder } from "./styled/styled.components";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <TopBar />

        <Route exact path="/" component={ HomePage } />

        <Route path="/homes" component={ Browse } />

        <Route path="/rooms/:roomid" component={ApartmentMain} />

        <DivBorder />
        <Footer />
        
      </Wrapper>
      </BrowserRouter>
    );
  }
}

const Wrapper = styled.div`
position:relative;
`;

export default App;
