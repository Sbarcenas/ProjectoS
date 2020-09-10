import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useSpring, animated} from "react-spring/web.cjs";

const useStyles = makeStyles(theme => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "0px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Fade = React.forwardRef(function Fade(props, ref) {
	const {in: open, children, onEnter, onExited, ...other} = props;
	const style = useSpring({
		from: {opacity: 0},
		to: {opacity: open ? 1 : 0},
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

Fade.propTypes = {
	children: PropTypes.element,
	in: PropTypes.bool.isRequired,
	onEnter: PropTypes.func,
	onExited: PropTypes.func,
};

export default function Login(props) {
	const classes = useStyles();
	// const [open, setOpen] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [currentUser, setCurrentUser] = useState({});
	// const [auth, setAuth] = useState(false);

	useEffect(() => {});

	const login = async evt => {};

	// if (auth) return <Redirect to="" />;

	return (
		<div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				className={classes.modal}
				open={props.openLogin}
				onClose={props.handleCloseLogin}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={props.openLogin}>
					<div className={classes.paper}>
						<div className="row">
							<div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
								<form className="form">
									<fieldset>
										<input className="block" type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
									</fieldset>

									<fieldset>
										<input className="block" type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
									</fieldset>

									<button type="button" className="button button-primary block signup" onClick={() => login()}>
										Log in
									</button>

									<button type="button" className="button button-primary block signup" onClick={() => this.signup()}>
										Signup
									</button>
								</form>
							</div>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
