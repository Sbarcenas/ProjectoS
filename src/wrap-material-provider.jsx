import React from "react";
import {MuiThemeProvider, ThemeProvider as MatThemeProvider} from "@material-ui/core/styles";
import {SnackbarProvider} from "notistack";
import theme from "./theme/theme-main";

function MaterialProvider({children}) {
	return (
		<MatThemeProvider theme={theme}>
			<MuiThemeProvider theme={theme}>
				<SnackbarProvider>{children}</SnackbarProvider>
			</MuiThemeProvider>
		</MatThemeProvider>
	);
}

export default MaterialProvider;
