import { combineReducers } from 'redux'

import browseReducer from '../components/Main_section/Browse/Browse.reducer';
import ApartmentMainReducer from '../components/Main_section/Apartment/Main/Apartment_main.reducer';
import homepageReducer from '../components/Main_section/Home_page/Home_page.reducer';

const rootReducer = combineReducers({
  browse        : browseReducer,
  ApartmentMain : ApartmentMainReducer,
  homepage      : homepageReducer
})

export default rootReducer