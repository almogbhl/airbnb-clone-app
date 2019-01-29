import dotenv from 'dotenv';
// cities
export const FETCHING_CITIES    = "FETCHING_CITIES";
export const CITIES_FETCHED     = "CITIES_FETCHED";
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR';
// homes
export const FETCHING_HOMES    = "FETCHING_HOMES";
export const HOMES_FETCHED     = "HOMES_FETCHED";
export const FETCH_HOMES_ERROR = 'FETCH_HOMES_ERROR';


const API_URL = process.env.REACT_APP_API_URL

// fetch cities
export const fetchCities = ()=> {
	
	return (dispatch )=> {
		
		dispatch({ type: FETCHING_CITIES })
	
		const API = `${API_URL}/api/cities`

		return  fetch(API)
				.then(res => res.json())
				.then(res => dispatch({
					type	: CITIES_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_CITIES_ERROR,
					payload	: err.message
				}))
	  }
}


// fetch homes
export const fetchHomes = ()=> {
	
	return (dispatch )=> {
		
		dispatch({ type: FETCHING_HOMES })
	
		const API = `${API_URL}/api/homes`

		return  fetch(API)
				.then(res => res.json())
				.then(res => dispatch({
					type	: HOMES_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_HOMES_ERROR,
					payload	: err.message
				}))
	  }
}