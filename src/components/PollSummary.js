import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

const PollSummary = () => {
	return (
		<Fragment>
			<Card>
				<Card.Header>Would You Rather...</Card.Header>
				<Card.Body>
					<p>
						Question 1
						<br />
						or...
					</p>
					<Button type='submit'>Answer Poll</Button>
				</Card.Body>
			</Card>
		</Fragment>
	);
};

export default PollSummary;
