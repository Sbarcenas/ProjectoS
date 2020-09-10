import React, {Fragment, useState} from "react";
import {useSelector} from "react-redux";
import clsx from "clsx";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Logo from "./Logo.jsx";
import Login from "./Login";
import {SELECTOR_SESSION} from "../redux/selectors/session";

const useStylesSessionSection = makeStyles(theme => ({
	address: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "nowrap",
	},
	buttonEnter: {
		padding: theme.spacing(0.5, 1.5),
		background: "linear-gradient(to right, rgba(255,233,207,1) 0%, rgba(255,146,10,1) 100%)",
		fontSize: 12,
		fontWeight: "bold",
		textTransform: "initial",
		filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffaf4b', endColorstr='#ff920a', GradientType=1 )",
	},
}));

function SessionSection() {
	const [openLogin, setOpenLogin] = useState(false);

	const session = useSelector(SELECTOR_SESSION);

	const classes = useStylesSessionSection({});

	if (!session.isAuthenticated) {
		return (
			<Fragment>
				<Grid item>
					<Button className={classes.buttonEnter} onClick={() => setOpenLogin(true)}>
						Ingresar
					</Button>
					<Login openLogin={openLogin} handleCloseLogin={() => setOpenLogin(false)} />
				</Grid>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<Grid item>
				<Typography variant={"body1"}>Entregar en:</Typography>
				<div className={classes.address}>
					<LocationOnOutlinedIcon className={classes.locationIcon} />
					<Typography variant={"body2"}>Escoge una dirección</Typography>
					<KeyboardArrowDownIcon className={classes.rowIcon} />
				</div>
			</Grid>
		</Fragment>
	);
}

const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: "8px !important",
		margin: theme.spacing(0),
		height: 72,
		backgroundColor: theme.palette.background.paper,
		boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.05),0px 1px 1px 0px rgba(0,0,0,0.03),0px 1px 3px 0px rgba(0,0,0,0.02)",
		color: theme.palette.text.primary,
	},
	logoContent: {},
	icons: {
		fontSize: "28px !important",
	},
}));

function Header() {
	const classes = useStyles({});

	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar>
				<Grid container spacing={2} direction={"row"} wrap={"nowrap"} alignItems={"center"}>
					<Grid item>
						<IconButton>
							<MenuIcon className={classes.icons} />
						</IconButton>
					</Grid>
					<Grid item className={classes.logoContent}>
						<Logo />
					</Grid>
					<Grid item className={clsx("flex-grow")} />
					<SessionSection />
					<Grid item>
						<IconButton edge="start" color="inherit" aria-label="open drawer">
							<ShoppingCartOutlinedIcon className={classes.icons} />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
