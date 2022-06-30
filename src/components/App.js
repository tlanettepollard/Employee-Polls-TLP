import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';
import '../App.css';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);

	return (
		<Router>
			<Fragment>
				<LoadingBar />
				<div className='App'>
					<p>Home</p>
				</div>
			</Fragment>
		</Router>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
