import { combineReducers } from 'redux'

import browseReducer from '../components/Main_section/Browse/Browse.reducer';
import ApartmentMainReducer from '../components/Main_section/Apartment/Main/Apartment_main.reducer';

const rootReducer = combineReducers({
  browse        : browseReducer,
  ApartmentMain : ApartmentMainReducer
})

export default rootReducer