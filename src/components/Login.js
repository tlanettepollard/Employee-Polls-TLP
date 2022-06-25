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
import sarahedo from '../images/AvatarSarah.png';
import tylermcginnis from '../images/AvatarTyler.png';
import mtsamis from '../images/AvatarMike.png';
import zoshikanlu from '../images/AvatarZenobia.png';

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
							<Card.Title className='text-center form-title'>
								Sign In
							</Card.Title>
							{userSelected === 'sarahedo' && (
								<img src={sarahedo} className='avatar-img' alt='avatar' />
							)}
							{userSelected === 'tylermcginnis' && (
								<img src={tylermcginnis} alt='avatar' className='avatar-img' />
							)}
							{userSelected === 'mtsamis' && (
								<img src={mtsamis} alt='avatar' className='avatar-img' />
							)}
							{userSelected === 'zoshikanlu' && (
								<img src={zoshikanlu} alt='avatar' className='avatar-img' />
							)}
							<Form data-testid='submit-form'>
								<Form.Group>
									<Form.Control
										as='select'
										size='lg'
										aria-label='Select a User'
										className='login-form rounded-0 shadow'
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
										<Button disabled className='login-form'>
											Login
										</Button>
									) : (
										<Button
											onClick={handleLogin}
											type='submit'
											variant='outline-dark'
											data-testid='submit-btn'
											className='login-form'>
											Log In
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
