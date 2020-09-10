import React from "react";
import MatBackdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: "#fff",
	},
}));

function Backdrop({open}) {
	const classes = useStyles();

	return (
		<MatBackdrop className={classes.backdrop} open={open}>
			<CircularProgress color="primary" />
		</MatBackdrop>
	);
}

export default Backdrop;
