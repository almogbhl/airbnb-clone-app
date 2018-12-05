import React, { Component } from 'react';
import styled from "styled-components";
import { box_shadow_form, grey, border } from '../../../styled/constants';

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
  width: 45rem;
  padding: 1.2rem;
  ${border};
  ${box_shadow_form};
  color: ${grey};
  font-weight: 700;
  border-radius: .4rem;
  font-size: 1.7rem;
  transition: box-shadow 200ms ease-in;
  
  &:hover {
      box-shadow: 0 2px 4px rgba(0,0,0,0.1), 0 4px 12px rgba(26, 26, 29, 0.08);
  }
`;
