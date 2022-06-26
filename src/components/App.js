import React from 'react';
import { useEffect } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import Login from './Login';
//import PageNavbar from './PageNavbar';
import Container from 'react-bootstrap/Container';
import '../App.css';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	});

	return (
		<Container>
			<LoadingBar />
			<Login />
		</Container>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
