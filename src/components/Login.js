import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { LoadingBar } from 'react-redux-loading';
import {
	Card,
	Container,
	Row,
	Col,
	Form,
	Button,
	Image,
} from 'react-bootstrap';

import companyLogo from '../images/companyavatar.png';

const Login = ({ users, dispatch }) => {
	const [userSelected, setUserSelected] = useState('none');

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(setAuthedUser(userSelected));
	};

	return (
		<Container>
			<LoadingBar />
			<Row className='justify-content-center align-items-center min-vh-100'>
				<Col xs={12} md={4}>
					<Container>
						<h1 className='text-center app-heading'>
							Welcome to Employee Polls!
						</h1>
						<h3 className='text-center app-subheading'>
							Please sign in to continue.
						</h3>

						<Image
							src={companyLogo}
							alt='company logo'
							className='fluid app-logo'
						/>
					</Container>
				</Col>
			</Row>
			<Row className='justify-content-center align-items-center min-vh-100'>
				<Col xs={12} md={4}>
					<Card className='bg-light text-center'>
						<Card.Body>
							<Form className='form'>
								<h2 className='text-center form-title'>Sign In</h2>
								<Form.Group>
									<Form.Control
										as='select'
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
									</Form.Control>
									{userSelected === 'none' ? (
										<Button disabled className='login-btn'>
											Sign In
										</Button>
									) : (
										<Button onClick={handleLogin} className='login-btn'>
											Sign In
										</Button>
									)}
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

const mapStateToProps = ({ users }) => {
	return {
		users: Object.keys(users).map(function (key) {
			return users[key];
		}),
	};
}

export default connect(mapStateToProps)(Login);
