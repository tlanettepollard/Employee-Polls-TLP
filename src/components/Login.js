import React from 'react';
import { connect } from 'react-redux';
import { useState } from 'react';
import { setAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom';
import { LoadingBar } from 'react-redux-loading';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import companyImage from '../images/companyavatar.png';

const Login = ({ users, dispatch }) => {
	const [userSelected, setUserSelected] = useState('none');
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		dispatch(setAuthedUser(userSelected));
		navigate('/');
	};

	return (
		<Container>
			<LoadingBar />
			<Row className='justify-content-center align-items-center min-vh-100'>
				<Col xs={12} md={4}>
					<Card bg='light' className='text-center'>
						<Card.Img
							variant='top'
							src={companyImage}
							alt='logo'
							className='app-logo'
						/>
						<Card.Body>
							<Card.Title className='text-center'>Sign In</Card.Title>
							<Form data-testid='submit-form'>
								<Form.Select
									aria-label='Select a User'
									className='login-form'
									onChange={(e) => setUserSelected(e.target.value)}
									value={userSelected}>
									<option value='none'>Select a User...</option>
									{users.map((user) => (
										<option key={user.id} value={user.id}>
											{user.name}
										</option>
									))}
								</Form.Select>
								<Button
									onClick={handleLogin}
									type='submit'
									variant='outline-dark'
									data-testid='submit-btn'>
									Log In
								</Button>
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
