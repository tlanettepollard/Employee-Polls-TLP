import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { LoadingBar } from 'react-redux-loading';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
			<Row className='just-content-center align-items-center min-vh-100'>
				<Col xs={12} md={4}>
					<Card bg='light' className='text-center'>
						<Card.Header className='text-center'>
							<h1>Welcome to Employee Polls!</h1>
							<h3>Please sign in to continue.</h3>
						</Card.Header>
						<Container>
							<img src={companyLogo} alt='company logo' className='app-logo' />
						</Container>
						<Card.Body>
							<Card.Title className='text-center form-title'>
								<h2>Sign In</h2>
							</Card.Title>
							<Form data-testid='submit-form'>
								<Form.Group>
									<Form.Control
										as='select'
										aria-label='Select a user...'
										className='user-dropdown'
										onChange={(e) => setUserSelected(e.target.value)}
										value={userSelected}>
										<option value='none'>Select a User...</option>
										{users.map((user) => (
											<option key={user.id} value={user.id}>
												{user.name}
											</option>
										))}
									</Form.Control>
								</Form.Group>

								<Form.Group>
									{userSelected === 'none' ? (
										<Button disabled className='login-btn'>
											Sign In
										</Button>
									) : (
										<Button
											onClick={handleLogin}
											type='submit'
											variant='outline-dark'
											data-testid='submit-btn'
											className='login-btn'>
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

function mapStateToProps({ users }) {
	return {
		users: Object.keys(users).map(function (key) {
			return users[key];
		}),
	};
}

export default connect(mapStateToProps)(Login);
