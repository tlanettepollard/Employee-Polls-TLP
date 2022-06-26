import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { LoadingBar } from 'react-redux-loading';

import companyLogo from '../images/companyavatar.png';

const Login = ({ users, dispatch }) => {
	const [userSelected, setUserSelected] = useState('none');

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(setAuthedUser(userSelected));
	};

	return (
		<div className='container'>
			<LoadingBar />
			<div>
				<h1 className='text-center app-heading'>Welcome to Employee Polls!</h1>
				<h3 className='text-center app-subheading'>
					Please sign in to continue.
				</h3>
			</div>
			<img src={companyLogo} alt='company logo' className='app-logo' />
			<form className='login'>
				<h2 className='text-center form-title'>Sign In</h2>
				<select
					aria-label='Select a User'
					className='login-form'
					onChange={(e) => setUserSelected(e.target.value)}
					value={userSelected}>
					<option value='none' disabled className='user-dropdown'>
						Select a User...
					</option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>
				{userSelected === 'none' ? (
					<button disabled className='login-btn'>
						Sign In
					</button>
				) : (
					<button onClick={handleLogin} className='login-btn'>
						Sign In
					</button>
				)}
			</form>
		</div>
	);
};

function mapStateToProps({ users }) {
	return {
		users: Object.keys(users).map(function (key) {
			return users[key];
		}),
	};
}

export default connect(mapStateToProps)(Login);
