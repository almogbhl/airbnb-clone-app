import {
  // cities
  FETCHING_CITIES,
  CITIES_FETCHED,
  FETCH_CITIES_ERROR,
  // homes
  FETCHING_HOMES,
  HOMES_FETCHED,
  FETCH_HOMES_ERROR
  } from "./Home_page.action";
  

  import {  FILTER_TYPE } from './Filtered/Filitered.action';
  
  let initialState = {
    cities_list: [],
    homes_list: [],
    filter_type: "",
    homes_is_loading: false,
    cities_is_loading: false,
    error_msg: ""
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FILTER_TYPE:
        return {
          ...state,
          filter_type: action.payload
        };
      case FETCHING_CITIES:
        return {
          ...state,
          cities_is_loading: true
        };
      case CITIES_FETCHED:
        return {
          ...state,
          cities_list: action.payload,
          cities_is_loading: false
        };
      case FETCH_CITIES_ERROR:
        return {
          error_msg: action.payload,
          cities_is_loading: false
        };
      case FETCHING_HOMES:
        return {
          ...state,
          homes_is_loading: true
        };
      case HOMES_FETCHED:
        return {
          ...state,
          homes_list: action.payload,
          homes_is_loading: false
        };
      case FETCH_HOMES_ERROR:
        return {
          error_msg: action.payload,
          homes_is_loading: false
        };
      default:
        return state;
    }
  };
  