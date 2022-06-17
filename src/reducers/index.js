import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';

// CreateStore only accepts a single reducer 
export default combineReducers({
	authedUser,
	questions,
	users,
});
