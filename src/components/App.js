import React from 'react';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import '../App.css';
import logo from '../images/companyavatar.png';

function App(props) {
	useEffect(() => {
		props.dispatch(handleInitialData());
	}, [props]);

	return (
		<Fragment>
			<div className='container'>
				<h1 className="app-heading">Employee Polls</h1>
				<img src={logo} className='app-logo' alt='logo' />
			</div>
		</Fragment>
	);
	
}
const maptStateToProps = ({ questions }) => ({
	loading: questions === null,
})

export default connect(maptStateToProps)(App);
