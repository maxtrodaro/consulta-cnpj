import React from "react";

import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../util/Logged/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isLogged() ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/", state: { from: props.location } }} />
			)
		}
	/>
);

export default PrivateRoute;
