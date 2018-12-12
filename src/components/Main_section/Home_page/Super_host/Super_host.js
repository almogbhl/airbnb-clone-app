import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as c from "../../../../styled/constants";
import { flexbox } from "../../../../styled/functions";
import Apartment from "../../Apartment/Preview/Apartment";

class Superhost extends Component {
  state = {
    superhost: [],
    imgBox: "330px"
  };

  componentDidMount = () => {
    const { displayed_list } = this.props;

    let superhosts = displayed_list.filter(item => item.superhost == true && item.rating_stars > 3);
   

    this.setState({ superhost: superhosts });
  };

  render() {
    return (
      <MainBox ref="sdsdsd">
        <Title>Stay with a Superhost</Title>
        {/* <SubTitle>Make yourself at home with these experienced hosts</SubTitle> */}
        <Ul size={this.state.imgBox}>
          {this.state.superhost.map(item => (
            <Li ref="cardBox" key={item.id}>
              <Apartment {...item} />
            </Li>
          ))}
        </Ul>
      </MainBox>
    );
  }
}

function mapStateToProps(state) {
  const { displayed_list } = state.browse;

  return {
    displayed_list
  };
}

export default connect(mapStateToProps)(Superhost);

const MainBox = styled.main`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  /* padding: 0 2.5rem; */
`;

const Ul = styled.ul`
  ${flexbox({ j: "space-between" })}
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: auto;
  border: 3px solid tomato;
  height: 29rem;
  @media (min-width: 743px) {
  }

  @media (min-width: 1128px) {
   
  }
  @media (min-width: 1300px) {
    /* height: ${props => props.size}; */
    height: 28rem;
  }
`;

const Li = styled.li`
  list-style: none;
  width: calc(50% - 1.3rem);
  border: 1px solid black;

  @media (min-width: 743px) {
    width: calc(33% - 1.3rem);
  }

  @media (min-width: 1128px) {
    width: calc(25% - 1.3rem);
  }
  @media (min-width: 1300px) {
    width: calc(20% - 1.3rem);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;
const SubTitle = styled.span``;
