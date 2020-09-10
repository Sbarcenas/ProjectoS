import {createActions, createReducer} from "reduxsauce";
import {reset, setList, setValue} from "../utilities";

const INITIAL_STATE = {
	query: "",
	result: {},
};

const {Types, Creators} = createActions({
	setQuery: ["query"],
	setResult: ["result"],
	reset: ["query"],
});

// noinspection JSCheckFunctionSignatures
export const search = createReducer(INITIAL_STATE, {
	[Types.SET_QUERY]: setValue("query"),
	[Types.SET_RESULT]: setList("result", "objectId"),
	[Types.RESET]: reset(INITIAL_STATE),
});

export default {
	Types,
	Creators,
};
