export const FETCHING_POSTS       = "FETCHING_POSTS";
export const POSTS_FETCHED        = "POSTS_FETCHED";
export const FETCHING_POSTS_ERROR = "FETCHING_POSTS_ERROR";


export const fetchPosts = () => {
  return (dispatch )=> {
		
		dispatch({ type: FETCHING_POSTS })
	
		const API = "/posts.json"

		return  fetch(API)
				.then(res => res.json())
				.then(res => dispatch({
					type	: POSTS_FETCHED,
					payload	: res
				}))
				.catch( err => dispatch({
					type	: FETCHING_POSTS_ERROR,
					payload	: err.message
				}))
	  }

}