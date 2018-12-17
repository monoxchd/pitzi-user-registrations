import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UsersIndex from './users/UsersIndex';
import UsersNew from './users/UsersNew';
import UsersShow from './users/UsersShow';
import DevicesNew from './devices/DevicesNew';

export default class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<div className="main">
						<Switch>
							<Route path="/" exact component={UsersIndex} />
							<Route path="/users/new" exact component={UsersNew} />
							<Route path="/users/:id" exact component={UsersNew} />
							<Route path="/users/:id/details" component={UsersShow} />
							<Route path="/users/:user_id/devices/new" exact component={DevicesNew} />
							<Route path="/users/:user_id/devices/:id" exact component={DevicesNew} />
						</Switch>										
					</div>
				</div>
			</Router>
		);
	}
}