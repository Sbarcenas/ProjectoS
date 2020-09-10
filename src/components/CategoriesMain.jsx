import React from "react";
import {useSelector} from "react-redux";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import {SELECTOR_CATEGORIES} from "../redux/selectors/categories";
import {HOST_S3} from "../enviroment";

const gradients = [
	"linear-gradient(90deg, rgba(240,54,19,1) 0%, rgba(240,54,19,1) 20%, rgba(240,54,19,0.3) 100%)",
	"linear-gradient(90deg, rgba(255,183,20,1) 0%, rgba(255,183,20,1) 20%, rgba(255,183,20,0.3) 100%)",
	"linear-gradient(90deg, rgba(39,180,110,1) 0%, rgba(39,180,110,1) 20%, rgba(39,180,110,0.3) 100%)",
	"linear-gradient(90deg, rgba(255,238,190,1) 0%, rgba(255,238,190,1) 20%, rgba(255,238,190,0.3) 100%)",
];

const useStyles = makeStyles(theme => ({
	listCategories: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		gridGap: theme.spacing(3),
		padding: 0,
		margin: theme.spacing(2, 0, 0, 0),
		listStyle: "none",
	},
	itemCategory: {
		overflow: "hidden",
		position: "relative",
		padding: 5,
		height: 105,
		borderRadius: 20,
		"&.g0": {
			background: gradients[0],
		},
		"&.g1": {
			background: gradients[1],
		},
		"&.g2": {
			background: gradients[2],
		},
		"&.g3": {
			background: gradients[3],
		},
	},
	categoryName: {
		position: "absolute",
		top: 38,
		left: 140,
		fontSize: 22,
	},
	categoryImg: {
		position: "absolute",
		left: 25,
		bottom: -20,
		width: 100,
		height: 100,
	},
}));

export default function CategoriesMain() {
	const categories = useSelector(SELECTOR_CATEGORIES);

	const classes = useStyles();

	return (
		<ul className={classes.listCategories}>
			{categories
				.filter(it => it.parent_id === 1)
				.map((category, i) => (
					<li key={i} className={clsx(classes.itemCategory, `g${i}`)}>
						<img className={classes.categoryImg} src={`${HOST_S3}/${category.background}`} alt={`categoria ${category.name}`} />
						<Typography variant="h3" className={classes.categoryName}>
							{category.name}
						</Typography>
					</li>
				))}
		</ul>
	);
}
