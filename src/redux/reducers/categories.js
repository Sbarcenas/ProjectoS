import {createActions, createReducer} from "reduxsauce";
import {addList, delList} from "../utilities";

const INITIAL_STATE = {
	categories: {},
};

const {Types, Creators} = createActions({
	setCategories: ["categories"],
	delCategories: ["categories"],
});

// noinspection JSCheckFunctionSignatures
export const categories = createReducer(INITIAL_STATE, {
	[Types.SET_CATEGORIES]: addList("categories"),
	[Types.DEL_CATEGORIES]: delList("categories"),
});

export default {
	Types,
	Creators,
};
