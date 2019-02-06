import dotenv from 'dotenv';

// homes
export const FETCHING_HOMES    = "FETCHING_HOMES";
export const HOMES_FETCHED     = "HOMES_FETCHED";
export const FETCH_HOMES_ERROR = 'FETCH_HOMES_ERROR';
export const FILTER_TYPE       = 'FILTER_TYPE';


const API_URL = process.env.REACT_APP_API_URL

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

export const filterType = (type) => ({
    type    :   FILTER_TYPE,
    payload :   type
})

