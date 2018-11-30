import React, { Component } from "react";
import styled from "styled-components";
import Filter from './Filter/Filter';
import { connect } from "react-redux";
import { filter_list } from '../Main_section/Browse/Browse.action';
import Logo from "../../img/airbnb_logo_small.png";


class TopBar extends Component {
  state = {
    value: ""
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    
  }

  render() {

    const { original_list, do_filter_list } = this.props;
    console.log(original_list)
    return (
      <Header>
        <LogoBox>
          <LogoImg src={Logo} />
        </LogoBox>
        <Form onSubmit={this.onFormSubmit}>
          <Filter list_data={original_list} on_filter={do_filter_list} /> 
        </Form>
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
  padding: 7px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const LogoBox = styled.div`
  cursor: pointer;
  padding: 5px 15px;
`;
const LogoImg = styled.img`
  height: 40px;
`;

const Form = styled.form`
  flex-grow: 1;
  max-width: 500px;
  /* border: 1px solid tomato; */
  margin-right: 20px;
`;

