import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const NewPoll = () => {
	return (
		<Fragment>
			<Container>
				<Card>
					<Card.Header as='h2' className='text-center'>
						New Poll Page
					</Card.Header>
					<Card.Body>
						<p className='text-center'>Create Your Own Poll</p>
						<h4 className='text-center'>Would You Rather...</h4>
					</Card.Body>
				</Card>
			</Container>
		</Fragment>
	);
};

export default NewPoll;
