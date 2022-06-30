import React, {Fragment} from 'react';
import PollSummary from './PollSummary';
import PollQuestion from './PollQuestion';

const UserCard = () => {
    return (
        <Fragment>
            <PollSummary />
            <PollQuestion />
        </Fragment>
    );
};

export default UserCard;
