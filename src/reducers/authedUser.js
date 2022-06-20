import { SET_AUTHED_USER, SIGNED_OUT_USER } from '../actions/authedUser';

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		case SIGNED_OUT_USER:
			return null;
		default:
			return state;
	}
}
