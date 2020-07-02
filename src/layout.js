import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import injectContext, { Context } from "./store/appContext";
import HelloView from './views';
import Backdrop from '@material-ui/core/Backdrop';
import { CircularProgress, Snackbar, DialogContent } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const Layout = () => {
	const { actions, store } = useContext(Context);
	const classes = useStyles();

	return (
		<BrowserRouter >
      {/*
			<Backdrop className={classes.backdrop} open={store.isLoading} >
				<CircularProgress color="inherit" />
			</Backdrop>
      */}
			<Switch>
       
				<Route exact path="/" component={HelloView} />
        {/*
				<Route exact path="/familyRegister" component={FamilyRegister} />
        <Route exact path="/forgotPassword" component={ForgotPassword} />
        */}
				<Route render={() => <h1>Not found!</h1>} />
			</Switch>
		</BrowserRouter>
	);
}

export default injectContext(Layout);