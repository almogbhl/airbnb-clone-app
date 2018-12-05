export const FETCHING_APARTMENTS    = "FETCHING_APARTMENTS";
export const APARTMENTS_FETCHED     = "APARTMENTS_FETCHED";
export const FETCH_APARTMENTS_ERROR = 'FETCH_APARTMENTS_ERROR';
export const FILTER_LIST            = 'FILTER_LIST';


export const filter_list = (filtered_list)=> ({
	type    :   FILTER_LIST,
    payload :   filtered_list
})

export const fetchApartments = ()=> {
	
	return (dispatch )=> {
		
		dispatch({ type: FETCHING_APARTMENTS })
	
		const API = "/mock-data1.json"

		return  fetch(API)
				.then(res => res.json())
				.then(res => dispatch({
					type	: APARTMENTS_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCH_APARTMENTS_ERROR,
					payload	: err.message
				}))
	  }
}