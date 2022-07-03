import React, { Fragment } from 'react';
import UserCard from './UserCard';

const QuestionPage = (props) => {
	const { idsList, listNote } = props;

	return (
		<Fragment>
			<h2 className='text-center my-3'>
				<small>Would You Rather...</small>
			</h2>
			{idsList.length ? (
				idsList.map((id) => <UserCard key={id} id={id} />)
			) : (
				<p className='text-center'>{listNote}</p>
			)}
		</Fragment>
	);

}

export default QuestionPage;