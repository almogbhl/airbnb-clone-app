import React, { Component } from "react";
import styled from "styled-components";
import Filter from './Filter/Filter';
import { connect } from "react-redux";
import { filter_list } from '../Main_section/Browse/Browse.action';
import { flexbox } from '../../styled/functions';
import Logo from "../../img/airbnb_logo_small.png";
import NavBar from "./NavBar/Navbar";


class TopBar extends Component {
  state = {
    value: ""
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  }

  render() {

    const { original_list, do_filter_list } = this.props;
   
    return (
      <Header>
        <LogoBox>
          <LogoImg src={Logo} />
        </LogoBox>
        <Form onSubmit={this.onFormSubmit}>
          <Filter list_data={original_list} on_filter={do_filter_list} /> 
        </Form>
        <NavBar />
      </Header>
    );
  }
}


function mapStateToProps(state) {
  const {
      original_list,
  } = state.browse;

  return {
    original_list
  }

}
function mapDispatchToProps(dispatch) {
  return {
      do_filter_list: (fl) => dispatch(filter_list(fl)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopBar);


const Header = styled.header`
  padding: 0;
  /* border: 1px solid red; */
  ${flexbox({j:"space-between"})} 
  border-bottom: 1px solid lightgray;
`;

const LogoBox = styled.div`
/* border: 1px solid red; */
  flex-basis: 5%;
  cursor: pointer;
  padding: 1.2rem 1.5rem;
`;
const LogoImg = styled.img`
  height: 3.8rem;
`;

const Form = styled.form`
  padding: .8rem 0;
  /* border: 1px solid red; */
  flex-grow: 1;
  /* flex-basis: 60%; */
  /* margin-right: 2rem; */
`;

