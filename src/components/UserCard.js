import React, { Fragment } from 'react';
import { connect } from 'react-redux';
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
