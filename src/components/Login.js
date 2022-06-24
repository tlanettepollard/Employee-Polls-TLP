import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { LoadingBar } from 'react-redux-loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = (props) => {
	return (
		<Container>
			<LoadingBar />
			<Row className='justify-content-center align-items-center min-vh-100'>
				<Col xs={12} md={4}>
					<Card bg='light' className='text-center'>
						<Card.Header>Login</Card.Header>
						<Card.Body>
							<Form data-testid='submit-form'>
								<Form.Group controlId='formGridState'>
									<Form.Label>Username</Form.Label>
									<Form.Control as='select' data-testid='submit-select'>
										<option value=''>Select user</option>
									</Form.Control>
								</Form.Group>
								<Button
									type='submit'
									variant='outline-dark'
									data-testid='submit-btn'></Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
