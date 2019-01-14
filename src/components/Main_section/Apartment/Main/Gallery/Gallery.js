import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as c from '../../../../../styled/constants';

class Gallery extends Component {

  onHover = (e, isMouseHover) => {
    let imgs = this.refs.container.childNodes;

    imgs.forEach(img => {
      if (isMouseHover === true) {
        img.childNodes[0].style.opacity = "0.6";
      } else {
        img.childNodes[0].style.opacity = "1";
      }
      e.target.style.opacity = "1";
    });
  };

  calcHeight = () => {
    const  { getHeight } = this.props;
    let navHeight = this.refs.container.offsetHeight;
    getHeight(navHeight);
  }

  render() {

    const data = this.props.data;
   
    const gallery = data.images || [] ;
    
    const [main_img, img_box_2, img_box_3, img_box_4] = gallery;

    return (
      <Container ref="container" onMouseOver={this.calcHeight}>
        <Main_box>
          <Main_img
            img={main_img}
            onMouseOver={e => this.onHover(e, true)}
            onMouseOut={e => this.onHover(e, false)}
          />
        </Main_box>
        {gallery.map((img, i) => {
          if (img !== gallery[0]) {
            return (
              <Sub_box key={i}
                show743={true}
                onMouseOver={e => this.onHover(e, true)}
                onMouseOut={e => this.onHover(e, false)}
              >
                <Sub_img img={img} />
              </Sub_box>
            );
          }
        })}
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Gallery);

const Container = styled.div`
  display: grid;
  background-color: black;
  height: 36.8rem;

@media (min-height: 700px) {
  height: 46.8rem;
}
@media (min-height: 1028px) {
  height: 52.8rem;
}

  @media (min-width: 743px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 2fr 1fr;

  }
  @media (min-width: 1028px) {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 1fr); 
  }

  @media (min-width: 1028px) and (min-height: 900px) {
    height: 72.8rem;
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
  height: 100%;
  width: 100%;
  transition: transform 0.5s ease, opacity 0.5s ease;

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
  /* visibility: hidden; */
  border: 1px solid ${c.grey};  
  display: none;

  @media (min-width: 743px) {
    display: block;
    /* visibility: ${props => (props.show743 === true ? "visible" : "hidden")}; */
  }
`;

const Sub_img = styled(Main_img)`
  background-image: url(${props => props.img});

  @media (min-width: 743px) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;
