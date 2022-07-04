import React, { Fragment } from 'react';
//import { connect } from 'react-redux';

import Card from 'react-bootstrap/Card';

const QuestionPage = (props) => {
	return (
		<Fragment>
			<Card>
				<Card.Header className='text-center my-3'>
					Would You Rather...
				</Card.Header>
				<Card.Body>Questions</Card.Body>
			</Card>
		</Fragment>
	);
};

export default QuestionPage;
