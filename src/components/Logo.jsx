import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import {makeStyles} from "@material-ui/core/styles";
import Img from "gatsby-image";

const w = 160;

const useStyles = makeStyles(theme => ({
	root: ({width}) => ({
		width: width || w,
	}),
}));

function Logo({width}) {
	const classes = useStyles({width});

	const imageData = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: {eq: "search_background.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
	`);

	return (
		<div className={classes.root}>
			<Img fluid={imageData.placeholderImage.childImageSharp.fluid} alt="Logo" width={width || w} />
		</div>
	);
}

export default Logo;
