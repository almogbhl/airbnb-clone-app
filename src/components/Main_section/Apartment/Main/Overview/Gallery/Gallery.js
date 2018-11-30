import React, { Component } from "react";
import styled from "styled-components";

class Gallery extends Component {
  onHover = (e, isMouseHover) => {
    let images = this.refs.container.childNodes;

    images.forEach(img => {
      if (isMouseHover === true) {
        img.childNodes[0].style.opacity = "0.7";
      } else {
        img.childNodes[0].style.opacity = "1";
      }
      e.target.style.opacity = "1";
    });
  };


  render() {
    const images = [
      "https://a0.muscache.com/im/pictures/7787384/03380852_original.jpg?aki_policy=xx_large",
      "https://a0.muscache.com/im/pictures/7787334/c7dd5f4e_original.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/7787269/a067102c_original.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/7787236/97e2908f_original.jpg?aki_policy=large",
      "https://a0.muscache.com/im/pictures/7786424/70660cf9_original.jpg?aki_policy=large"
    ];
    const [main_img, img_box_2, img_box_3, img_box_4] = images;

    return (
      <Container ref="container">
        <Main_box>
          <Main_img
            img={main_img}
            onMouseOver={e => this.onHover(e, true)}
            onMouseOut={e => this.onHover(e, false)}
          />
        </Main_box>
        {images.map(img => {
          if (img !== images[0]) {
            return (
              <Sub_box
                show743={true}
                onMouseOver={e => this.onHover(e, true)}
                onMouseOut={e => this.onHover(e, false)}
              >
                <Sub_img img={img} />
              </Sub_box>
            );
          }
        })}
        {/* <Sub_box show743={true} show1028={true} onMouseOver={(e) => this.onHover(e, true)} onMouseOut={(e) => this.onHover(e, false)}>
          <Sub_img img={img_box_2} />
        </Sub_box>
        <Sub_box show743={true} show1028={true} onMouseOver={(e) => this.onHover(e, true)} onMouseOut={(e) => this.onHover(e, false)}>
          <Sub_img img={img_box_3} />
        </Sub_box>
        <Sub_box show743={false} show1028={true} onMouseOver={(e) => this.onHover(e, true)} onMouseOut={(e) => this.onHover(e, false)}>
          <Sub_img img={img_box_4} />
        </Sub_box>
        <Sub_box show743={false} show1028={true} onMouseOver={(e) => this.onHover(e, true)} onMouseOut={(e) => this.onHover(e, false)}>
          <Sub_img img={img_box_5} />
        </Sub_box> */}
      </Container>
    );
  }
}

export default Gallery;

const Container = styled.div`
  display: grid;
  background-color: black;

  @media (min-width: 743px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 2fr 1fr;
  }
  @media (min-width: 1028px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Main_box = styled.div`
  overflow: hidden;

  @media (min-width: 743px) {
    border: 1px solid #484848;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

const Main_img = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 368px;
  width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;

  @media (min-height: 700px) {
    height: 468px;
  }

  @media (min-height: 900px) {
    height: 760px;
  }
  @media (min-width: 743px) {
    background-position: center left;
    grid-row-start: 1;
    grid-row-end: 3;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Sub_box = styled.div`
  overflow: hidden;
  visibility: hidden;
  border: 1px solid #484848;

  @media (min-width: 743px) {
    visibility: ${props => (props.show743 === true ? "visible" : "hidden")};
  }
  @media (min-width: 1028px) {
    /* visibility: visible; */
  }
`;

const Sub_img = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;

  @media (min-width: 743px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;
