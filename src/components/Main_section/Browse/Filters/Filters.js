import React, { Component } from "react";
import styled from "styled-components";
import { Route , withRouter} from 'react-router-dom';
import { connect } from "react-redux";


class Filters extends Component {
 

  render() {

 
   
    return (
      <Main>
       

      </Main>
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
      
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filters));


const Main = styled.header`
  height: 7rem;
  /* position: fixed;
  top: 7.4rem;
  left:0; */
  width: 100%;
  border-bottom: 1px solid lightgray;
  border: 1px solid red;
  margin-bottom: 1rem
`;


