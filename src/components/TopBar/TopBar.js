import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { box_shadow_form, grey, border } from "../../styled/constants";
import { connect } from "react-redux";
import { filter_list } from "../Main_section/Browse/Browse.action";
import { flexbox } from "../../styled/functions";
import Logo from "../../img/airbnb_logo_small.png";
import NavBar from "./NavBar/Navbar";
import Suggestions from "./Suggestions/Suggestions";

class TopBar extends Component {
  state = {
    value: "",
    query: "",
    results: [],
    widerInput: false,
    showSuggestions: false
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  handleInputChange = event => {
    let data = this.props.homes_list;
    let value = event.target.value;

    this.setState({
      value
    });

    let dedupe = [];
    let res = [];

    if (value.length > 0) {
      let filtered_array = data.filter(
        item =>
          item.city.toLowerCase().startsWith(value.toLowerCase()) ||
          item.country.toLowerCase().startsWith(value.toLowerCase())
      );

      filtered_array.forEach(item => {
        if (!(item.city in dedupe)) {
          dedupe[item.city] = true;
          res.push(item);
        }
      });

      this.setState({
        results: res,
        showSuggestions: true
      });
    } else {
      this.setState({
        results: []
      });
    }
  };
  
  defaultValue = bool => {
    if (bool === true) {
      this.resetValue();
    } 
  };

  resetValue = () =>{
    this.setState({ value: "", results: [], widerInput: false });
  }

  changeView = e => {
    this.setState({ widerInput: true });
  };
  render() {
    return (
      <Header onClick={this.resetValue}>
        <Link to={"/"}>
          <LogoBox>
            <LogoImg src={Logo} />
          </LogoBox>
        </Link>

        <Form onSubmit={this.onFormSubmit}>
          <Input
            ref="inputTopBar"
            type="search"
            placeholder='Try "Helsinki"'
            onChange={this.handleInputChange}
            onInput={this.changeView}
            wider={this.state.widerInput}
            value={this.state.value}
          />
          <Suggestions
            defaultValue={bool => this.defaultValue(bool)}
            show={this.state.showSuggestions}
            results={this.state.results}
            wider={this.state.widerInput}
          />
        </Form>
        <NavBar />
      </Header>
    );
  }
}

function mapStateToProps(state) {
  const { homes_list, filterType } = state.homepage;

  return {
    homes_list,
    filterType
  };
}
function mapDispatchToProps(dispatch) {
  return {
    do_filter_list: fl => dispatch(filter_list(fl))
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopBar)
);

const Header = styled.header`
  padding: 0px 25px;
  background-color: white;
  /* border: 1px solid red; */
  ${flexbox({ j: "space-between" })}
  border-bottom: 1px solid lightgray;
`;

const LogoBox = styled.div`
  /* border: 1px solid red; */
  flex-basis: 5%;
  cursor: pointer;
  padding: 1.2rem 1.5rem 1.2rem 0;
`;
const LogoImg = styled.img`
  height: 3.8rem;
`;

const Form = styled.form`
  position: relative;
  top: 0;
  left: 0;
  padding: 0.8rem 0;
  flex-grow: 1;
`;
const Input = styled.input`
  width:  calc(100% + 1rem);
  max-width: 46rem;
  padding: 1.2rem;
  ${border};
  ${box_shadow_form};
  color: ${grey};
  font-weight: 700;
  border-radius: 0.4rem;
  font-size: 1.7rem;
  transition: box-shadow 200ms ease-in, width 0.7s ease-out;

  @media (min-width: 743px) {
    width:  ${props => props.wider ? "calc(100% - 25px)" : "calc(70% - 25px)"};
    max-width: ${props => props.wider ? "52rem" : "46rem"};
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
  }
`;
