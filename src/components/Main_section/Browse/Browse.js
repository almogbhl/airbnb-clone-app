import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Apartment from "../Apartment/Preview/Apartment";
import {flexbox} from '../../../styled/functions';
import * as c from '../../../styled/constants';

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
  padding: 0 2.5rem;

  @media (min-width: 1028px) {
    padding: 0 8rem;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 2.6rem;
  color: ${c.grey};
  margin: 1.5rem 0;
`;

const Ul = styled.ul `
  ${flexbox({j: "space-between"})}
  flex-wrap: wrap;
`

const Li = styled.li `
  list-style: none;
  width: 100%;
  
  @media (min-width: 743px) {
    width: calc(50% - 1.3rem);
  }

  @media (min-width: 1028px) {
    width: calc(25% - 1.3rem);
  }

  @media (min-width: 1439px) {
    width: calc(20% - 1.3rem);
  }

`