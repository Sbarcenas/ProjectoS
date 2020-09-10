import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useClassSpin = makeStyles({
	content: {
		position: "absolute",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	},
});

export default function SpinLoad() {
	const classes = useClassSpin();
	return (
		<div className={classes.content}>
			<CircularProgress color="primary" />
		</div>
	);
}
