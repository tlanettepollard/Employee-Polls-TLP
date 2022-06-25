import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import Login from './Login';
import '../App.css';
import { Container } from 'react-bootstrap';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);

	return (
		<Router>
			<div className='app'>
				<LoadingBar />
				<Container>
					<Login />
				</Container>
			</div>
		</Router>
	);
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
	loading: questions === {} || users === {},
	authedUser,
});

export default connect(mapStateToProps)(App);
