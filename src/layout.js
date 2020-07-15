import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import injectContext, { Context } from "./store/appContext"
import HelloView from './views'
import Dashboard from './views/dashboard/index'
import Register from './views/register'

const Layout = () => {
	const { actions, store } = useContext(Context);

	return (
		<Switch>
			<Route exact path="/" >
				<HelloView />
			</Route>
			<Route path="/dashboard" >
				<Dashboard />
			</Route>
			<Route path="/register" >
				<Register />
			</Route>
			<Route render={() => <h1>Not found!</h1>} />
		</Switch >
	);
}

export default injectContext(Layout);