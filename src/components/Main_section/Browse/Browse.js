import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Apartment from "../Apartment/Preview/Apartment";


class Browse extends Component {
  componentDidMount() {
    console.log("Browse - componentDidMount");
  }

  render() {
    const { displayed_list } = this.props;
   

    return (
      <MainBox>
        <Title>Explore all {displayed_list.length} homes</Title>
        <Ul>
          {displayed_list.map(item => (
            <Li key={item.id}>
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

export default connect(mapStateToProps)(Browse);

const MainBox = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 25px;
  /* border: 1px solid tomato; */

  @media (min-width: 1028px) {
    padding: 0 80px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 26px;
  color: rgb(72, 72, 72);
  font-family: "Helvetica Neue", sans-serif;
  margin: 15px 0;
`;

const Ul = styled.ul `
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:space-between;
/* border: 5px solid blue;  */
`

const Li = styled.li `
  list-style: none;
  width: calc(100% - 0);
  /* flex: 1 1 100%; */
  
  @media (min-width: 743px) {
    width: calc(50% - 13px);
  }

  @media (min-width: 1028px) {
    width: calc(25% - 13px);
  }

  @media (min-width: 1439px) {
    width: calc(20% - 13px);
  }

`