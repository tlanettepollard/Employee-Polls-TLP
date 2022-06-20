import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import '../App.css';
import { Container } from 'react-bootstrap';
//import Login from './Login';

function App(props) {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);


	return (
		<Router>
		
			<div className='app'>
				<LoadingBar />
				<Container>
					<h1 className='app-heading'>Employee Polls</h1>
				</Container>
			</div>
		</Router>
	);
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
	loading: questions==={} || users==={}, authedUser
});

export default connect(mapStateToProps)(App);
