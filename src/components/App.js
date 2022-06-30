import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';
import Login from './Login';
import Navigation from './Navigation';
import Home from './Home';
//import UserCard from './UserCard';
//import Leaderboard from './Leaderboard';
import '../App.css';
//import authedUser from '../reducers/authedUser';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);

	if (props.authedUser === null) {
		return <Login />;
	}

	return (
		<Fragment>
			<div className='App'>
				<Navigation />
				<LoadingBar />
				<Routes>
					<Route path='/' exact element={<Home />} />
				</Routes>
			</div>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
