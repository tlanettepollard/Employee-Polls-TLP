import React from 'react';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
//import { Route, Routes } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
//import PageNavbar from './PageNavbar';
import Login from './Login';
//import Home from './Home';
//import PollPage from './PollPage';

import Container from 'react-bootstrap/Container';
import '../App.css';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);

	

	return (
		<div className='App'>
			<Container>
				<LoadingBar />
				<Login />
			</Container>
		</div>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
