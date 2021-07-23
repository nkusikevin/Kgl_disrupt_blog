import {
	POST_LIST_FAIL,
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	SINGLE_POST_REQUEST,
	SINGLE_POST_SUCCESS,
	SINGLE_POST_FAIL,
} from "../constances/articleConstances";

export const postListReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case POST_LIST_REQUEST:
			return { loading: true, posts: [] };

		case POST_LIST_SUCCESS:
			return { loading: false, posts:action.payload};

		case POST_LIST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const singlePostReducer = (state = { post: {} }, action) => {
	switch (action.payload) {
		case SINGLE_POST_REQUEST:
			return { loading: true, ...state };
		case SINGLE_POST_SUCCESS:
			return { loading: false, post: action.payload };
		case SINGLE_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
