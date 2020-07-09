import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Dashboard from "../dashboard/dashboard";
import CicloPagamento from "../cicloPagamento/cicloPagamento";

export default (props) => (
		<div className="content-wrapper">
			<Switch>
				<Route exact path='/' component={Dashboard } />
				<Route exact path='/ciclopagamentos' component={CicloPagamento} />
				<Redirect from='*' to='/' />
			</Switch>
		</div>
)