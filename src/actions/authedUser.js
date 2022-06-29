export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SIGNOUT_AUTHED_USER = 'SIGNOUT_AUTHED_USER';

// Action creator for signed in user
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	};
}

// Action creator to sign out current user
export function signoutAuthedUser() {
	return {
		type: SIGNOUT_AUTHED_USER,
	};
}
