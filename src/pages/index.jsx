/* eslint-disable react-hooks/exhaustive-deps */
import React, {Fragment, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useGlobalStyles from "../theme/styles-global";
import MaterialProvider from "../wrap-material-provider";
import {getCategories} from "../redux/actions/categories";

import Backdrop from "../components/Backdrop";
import Categories from "../components/CategoriesMain";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBanner from "../components/SearchBanner";

const useStyles = makeStyles(theme => ({
	banner: {
		position: "relative",
		minHeight: 660,
	},
	bannerText: {
		position: "absolute",
		top: 180,
		fontSize: 52,
		lineHeight: 1,
	},
	bannerImage: {
		position: "absolute",
		top: 10,
		right: 80,
		width: 680,
	},
}));

function IndexPage() {
	const [openBackdrop, setOpenBackdrop] = useState(true);

	useGlobalStyles({});
	const dispatch = useDispatch();
	const classes = useStyles({});

	useEffect(() => {
		dispatch(getCategories()).subscribe({
			complete: () => setOpenBackdrop(false),
		});
	}, []);

	return (
		<Fragment>
			<Backdrop open={openBackdrop} />
			<Header />
			<Container maxWidth={"lg"}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<SearchBanner />
					</Grid>
					<Grid item xs={12}>
						<Categories />
					</Grid>
					<Grid item xs={12}>
						<div className={classes.banner}>
							<Typography className={classes.bannerText} variant="h4" component="h2">
								<strong>Pronto</strong> podrás hacer
								<br />
								pedidos en Snaqui
								<br />
								<strong>desde la app.</strong>
							</Typography>
							<img className={classes.bannerImage} src={`${process.env.PUBLIC_URL}/images/app_preview.png`} alt={"app_preview"} />
						</div>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</Fragment>
	);
}

export default () => <MaterialProvider children={<IndexPage />} />;
