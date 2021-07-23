import {applyMiddleware,createStore,combineReducers} from 'redux'
import thunk from "redux-thunk"
import{composeWithDevTools} from "redux-devtools-extension"
import {postListReducer,singlePostReducer} from "./reducers/articleReducer"
import { userLoginReducer } from "./reducers/userReduder";
const reducer = combineReducers({
	articles: postListReducer,
	SingleArticle: singlePostReducer,
	userLogin: userLoginReducer,
});

const initialState={

}

const middleWare = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;