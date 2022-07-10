import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/questions';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

const NewPoll = ({ dispatch, authedUser }) => {
	const navigate = useNavigate();
	const [optionOne, setOptionOne] = useState('');
	const [optionTwo, setOptionTwo] = useState('');
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const handleChangeOptionOne = (e) => {
		const text = e.target.value;
		setOptionOne(text);
	};

	const handleChangeOptionTwo = (e) => {
		const text = e.target.value;
		setOptionTwo(text);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			dispatch(handleSaveQuestion(optionOne, optionTwo));
			setSuccess(true);
			setError(false);
		} catch (e) {
			setSuccess(false);
			setError(false);
		}
		setOptionOne('');
		setOptionTwo('');
		navigate('/');
	};

	return (
		<Fragment>
			<Container>
				{success && <h1 className={'Success'}>Name Submitted!</h1>}
				{error && <h1 className={'Error'}>Please enter both options.</h1>}
				<Card>
					<Card.Header as='h2' className='text-center'>
						Would You Rather...
					</Card.Header>
					<Card.Body>
						<p className='text-center'>Create Your Own Poll</p>
						<Form
							name='question-form'
							className='new-question'
							onSubmit={handleSubmit}>
							<Form.Label className='large-label' htmlFor='optionOneValue'>
								First Choice
								<InputGroup>
									<Form.Control
										placeholder='Option one'
										onChange={handleChangeOptionOne}
										value={optionOne}
										name='optionOneValue'
									/>
								</InputGroup>
							</Form.Label>
							<Form.Label className='large-label' htmlFor='optionTwoValue'>
								Second Choice
								<InputGroup>
									<Form.Control
										placeholder='Option two'
										onChange={handleChangeOptionTwo}
										value={optionTwo}
										name='optionTwoValue'
									/>
								</InputGroup>
							</Form.Label>
							<Button type='submit'>Submit</Button>
						</Form>
					</Card.Body>
				</Card>
			</Container>
		</Fragment>
	);
};

const mapStateToProps = ({ authedUser }) => {
	return {
		authedUser,
	};
};

export default connect(mapStateToProps)(NewPoll);
