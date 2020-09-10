import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		margin: theme.spacing(6.5, 0, 0, 0),
		height: 372,
		borderRadius: "40px",
		backgroundImage: "url(https://snaqui.s3-sa-east-1.amazonaws.com/imagesWeb/backgroundSearch.png)",
		backgroundColor: "#c9fbf9",
		backgroundPosition: "right",
		backgroundSize: "auto 100%",
		backgroundRepeat: "no-repeat",
	},
	inputContent: {
		display: "flex",
		alignItems: "center",
		width: 600,
		height: 60,
		boxShadow: "9px 5px 20px #00000017",
	},
	input: {
		flexGrow: 1,
		marginLeft: theme.spacing(1),
		fontSize: 20,
	},
	searchIcon: {
		width: 50,
		transform: "scale(1.2, 1.2)",
	},
	title: {
		marginBottom: 26,
		textAlign: "center",
	},
}));

const SearchBanner = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				<Typography variant="h3">
					Recibe tu <strong>pedido</strong> en poco tiempo
				</Typography>
			</div>
			<Paper component="form" className={classes.inputContent}>
				<InputBase className={classes.input} placeholder="Buscar productos" inputProps={{"aria-label": "Buscar productos"}} />
				<SearchIcon color="error" className={classes.searchIcon} />
			</Paper>
		</div>
	);
};

export default SearchBanner;
