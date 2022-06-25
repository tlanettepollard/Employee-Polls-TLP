export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

// Action creator for signed in user
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	};
}

// Action creator to sign out current user
export function removeAuthedUser() {
	return {
		type: REMOVE_AUTHED_USER,
	};
}
