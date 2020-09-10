import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";

// reducers
import {auth as session} from "./reducers/auth";
import {categories} from "./reducers/categories";
import {search} from "./reducers/search";

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function store() {
	return createStore(
		combineReducers({
			categories,
			search,
			session,
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
}

export default store;
