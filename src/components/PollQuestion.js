import React, { Fragment } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const PollQuestion = () => {
	return (
		<Fragment>
			<p>Would You Rather:</p>
			<Row>
				<Col>
					<Card className='text-center' border='primary'>
						<Card.Header>Option One</Card.Header>
						<Card.Body>
							<Card.Text>Question Option One</Card.Text>
							<Button variant='primary'>Vote</Button>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card className='text-center' border='primary'>
						<Card.Header>Option Two</Card.Header>
						<Card.Body>
							<Card.Text>Question Option Two</Card.Text>
							<Button variant='primary'>Vote</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Fragment>
	);
};

export default PollQuestion;
