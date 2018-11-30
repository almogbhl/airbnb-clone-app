import React, { Component } from 'react';
import styled from "styled-components";

export default class Filter extends Component {

    update_list(event) {
        
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter( item =>
            item.city.toLowerCase().includes(txt.toLowerCase()) || 
            item.country.toLowerCase().includes(txt.toLowerCase())
        )
        on_filter(filtered_list)
    }
    render() {
        return  <Input
        type="search"
        placeholder='Try "Helsinki"'
        onChange={(e) => this.update_list(e)}
       
      /> 
    }


    
}

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid lightgray;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #484848;
  font-weight: 700;
  border-radius: 4px;
  font-size: 17px;
`;
