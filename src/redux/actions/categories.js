import {categoriesService} from "../../api/service";
import {map} from "rxjs/operators";
import categories from "../reducers/categories";

export function getCategories() {
	return dispatch => {
		return categoriesService.findAll().pipe(
			map(data => {
				dispatch(categories.Creators.setCategories(data));
				return data;
			})
		);
	};
}
