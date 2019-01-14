import React, { Component } from "react";
import styled,  { keyframes } from "styled-components";

class Loader extends Component {

  render() {
    
    return (
    <Loader_box>
        <Dot></Dot>
        <Dot></Dot>
        <Dot></Dot>
    </Loader_box>
    );
  }
}

export default Loader;

export const Loader_box = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
`;

export const Dot = styled.div`
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background-color: #011716;
  margin-right: 5px;
  animation: loading 1s -0.32s infinite ease-in-out;
`;

export const loading = keyframes`
    0%,
    80%,
    100% {
          opacity: 0;
    }
    40% {
          opacity: 1;
          background-color: #056864;
    }
`;
