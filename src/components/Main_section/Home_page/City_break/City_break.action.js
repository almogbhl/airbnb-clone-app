import dotenv from 'dotenv';
// cities
export const FETCHING_CITIES    = "FETCHING_CITIES";
export const CITIES_FETCHED     = "CITIES_FETCHED";
export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR';



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

