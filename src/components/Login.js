import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import {
	Card,
	Container,
	Form,
	Button,
	Row,
	Col,
	Image,
} from 'react-bootstrap';
import { LoadingBar } from 'react-redux-loading-bar';
import companyLogo from '../images/companyavatar.png';
import { setAuthedUser } from '../actions/authedUser';

const Login = ({ users, dispatch }) => {
	const [userSelected, setUserSelected] = useState('none');

	const handleLogin = (e) => {
		e.preventDefault();
		dispatch(setAuthedUser(userSelected));
	};

	return (
		<Fragment>
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
								<Form className='Form'>
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
		</Fragment>
	);
};

const mapStateToProps = ({ users }) => {
	return {
		users: Object.keys(users).map(function (key) {
			return users[key];
		}),
	};
};
export default connect(mapStateToProps)(Login);
