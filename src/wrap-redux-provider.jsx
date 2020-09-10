import React from "react";
import {Provider as ReduxProvider} from "react-redux";

import createStore from "./redux";

function WrapReduxProvider({element}) {
	const store = createStore();
	return <ReduxProvider store={store}>{element}</ReduxProvider>;
}

export default WrapReduxProvider;
