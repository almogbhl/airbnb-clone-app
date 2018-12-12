import {
  FILTER_LIST,
  FETCHING_APARTMENTS,
  APARTMENTS_FETCHED,
  FETCH_APARTMENTS_ERROR,
  GET_APARTMENT
} from "./Browse.action";

import {  FILTER_TYPE } from '../Home_page/Filtered/Filitered.action';

let initialState = {
  apartment_data: {},
  original_list: [],
  displayed_list: [],
  filter_type: "",
  is_loading: false,
  error_msg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_APARTMENT:
      return {
        ...state,
        apartment_data: action.payload
      };
    case FILTER_TYPE:
      return {
        ...state,
        filter_type: action.payload
      };
    case FILTER_LIST:
      return {
        ...state,
        displayed_list: action.payload
      };
    case FETCHING_APARTMENTS:
      return {
        ...state,
        is_loading: true
      };
    case APARTMENTS_FETCHED:
      return {
        original_list: action.payload,
        displayed_list: action.payload,
        is_loading: false
      };
    case FETCH_APARTMENTS_ERROR:
      return {
        error_msg: action.payload,
        is_loading: false
      };
    default:
      return state;
  }
};
