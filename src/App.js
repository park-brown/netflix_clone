import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Home from './page/Home';
import Login from './page/Login';
function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>
		</React.Fragment>
	);
}

export default App;
