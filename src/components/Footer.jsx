import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.black,
		color: "#fff",
	},
	textRegisterContent: {
		paddingLeft: theme.spacing(2),
	},
	textRegisterTitle: {
		fontSize: 16,
		fontWeight: 900,
		lineHeight: 2,
	},
	textRegister: {
		lineHeight: 1.2,
	},
	linkFooter: {
		padding: theme.spacing(1, 0),
		textTransform: "uppercase",
	},
}));

export default function OutlinedCard() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth={"lg"}>
				<Grid container spacing={3}>
					<Grid item xs={6} className={"display-flex align-items-center"}>
						<img src={`${process.env.PUBLIC_URL}/images/category_store.svg`} alt="service" />
						<div className={classes.textRegisterContent}>
							<Typography variant="h6" className={classes.textRegisterTitle}>
								Registra tu almacén en Snaqui
							</Typography>
							<Typography variant="caption" component={"div"} className={classes.textRegister}>
								Si eres una tienda, almacén o restaurante y quieres empezar a <br />
								recibir pedidos online con Snaqui de forma gratuita ¡Regístrate aquí!
							</Typography>
						</div>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1" className={classes.linkFooter}>
							PREGUNTAS FRECUENTES
						</Typography>
						<Typography variant="body1" className={classes.linkFooter}>
							TERMINOS Y CONDICIONES
						</Typography>
					</Grid>
					<Grid item xs={3}>
						<Typography variant="body1" className={classes.linkFooter}>
							POLÍTICAS DE PRIVACIDAD
						</Typography>
						<Typography variant="body1" className={classes.linkFooter}>
							CONTÁCTO
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
