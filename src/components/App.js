import React from 'react';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
//import Login from './Login';
import Navigation from './Navigation';
//import PollPage from './PollPage';

import Container from 'react-bootstrap/Container';
import '../App.css';

const App = (props) => {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props, props.authedUser]);

	return (
		<Fragment>
			<LoadingBar />
			<div className='App'>
				<Container>
					<Navigation />
				</Container>
			</div>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser }) => ({
	loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
