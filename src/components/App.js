import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';
import Login from './Login';
import Navigation from './Navigation';
import Home from './Home';
import NewPoll from './NewPoll';
import QuestionPage from './QuestionPage';
//import QuestionPageSub from './QuestionPageSub';
import Leaderboard from './Leaderboard';
import '../App.css';

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
					<Route path='/questions/:qid' element={<QuestionPage />} />
					<Route path='/new' element={<NewPoll />} />
					<Route path='/leaderboard' element={<Leaderboard />} />
				</Routes>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	return {
		authedUser: state.authedUser,
	};
};

export default connect(mapStateToProps)(App);
