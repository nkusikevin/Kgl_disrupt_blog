import {
	POST_LIST_FAIL,
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	SINGLE_POST_REQUEST,
	SINGLE_POST_SUCCESS,
	SINGLE_POST_FAIL,
} from "../constances/articleConstances";

import axios from "axios";

export const listPosts = () => async (dispatch) => {
	try {
		dispatch({ type: POST_LIST_REQUEST });
		const { data } = await axios.get("/api/article");
		dispatch({
			type: POST_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: POST_LIST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const singlePost = (slug) => async (dispatch) => {
	try {
		dispatch({ type: SINGLE_POST_REQUEST });
		const { data } = await axios.get(`/api/article/${slug}`);
		dispatch({
			type: SINGLE_POST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SINGLE_POST_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
