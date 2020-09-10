import makeStyles from "@material-ui/core/styles/makeStyles";

const useGlobalStyles = makeStyles(theme => ({
	"@global": {
		html: {lineHeight: "1.15", webkitTextSizeAdjust: "100%"},
		body: {margin: "0", backgroundColor: theme.palette.background.default},
		main: {display: "block"},
		h1: {fontSize: "2em", margin: "0.67em 0"},
		hr: {
			boxSizing: "content-box",
			height: "0",
			overflow: "visible",
		},
		pre: {fontFamily: "monospace, monospace", fontSize: "1em"},
		a: {backgroundColor: "transparent"},
		"abbr[title]": {
			borderBottom: "none",
			textDecoration: "underline dotted",
			fallbacks: [
				{
					textDecoration: "underline",
				},
			],
		},
		"b, strong": {fontWeight: "bolder"},
		"code, kbd, samp": {fontFamily: "monospace, monospace", fontSize: "1em"},
		small: {fontSize: "80%"},
		"sub, sup": {
			fontSize: "75%",
			lineHeight: "0",
			position: "relative",
			verticalAlign: "baseline",
		},
		sub: {bottom: "-0.25em"},
		sup: {top: "-0.5em"},
		img: {borderStyle: "none"},
		"button, input, optgroup, select, textarea": {
			fontFamily: "inherit",
			fontSize: "100%",
			lineHeight: "1.15",
			margin: "0",
		},
		"button, input": {overflow: "visible"},
		"button, select": {textTransform: "none"},
		'button, [type="button"], [type="reset"], [type="submit"]': {webkitAppearance: "button"},
		'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
			borderStyle: "none",
			padding: "0",
		},
		'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
			outline: "1px dotted ButtonText",
		},
		fieldset: {padding: "0.35em 0.75em 0.625em"},
		legend: {
			boxSizing: "border-box",
			color: "inherit",
			display: "table",
			maxWidth: "100%",
			padding: "0",
			whiteSpace: "normal",
		},
		progress: {verticalAlign: "baseline"},
		textarea: {overflow: "auto"},
		'[type="checkbox"], [type="radio"]': {boxSizing: "border-box", padding: "0"},
		'[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {height: "auto"},
		'[type="search"]': {webkitAppearance: "textfield", outlineOffset: -2},
		'[type="search"]::-webkit-search-decoration': {webkitAppearance: "none"},
		"::-webkit-file-upload-button": {webkitAppearance: "button", font: "inherit"},
		details: {display: "block"},
		summary: {display: "list-item"},
		template: {display: "none"},
		"[hidden]": {display: "none"},
		".display-flex": {display: "flex"},
		".align-items-center": {alignItems: "center"},
		".justify-content-center": {justifyContent: "center"},
		".flex-grow": {flexGrow: 1},
		".template-img": {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			opacity: 0.3,
			"& img": {
				width: "100%",
			},
		},
	},
}));

export default useGlobalStyles;
