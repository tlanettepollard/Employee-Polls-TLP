export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const UNSET_AUTHED_USER = 'SIGNED_OUT_USER';

// Action creator for signed in user
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	};
}

// Action creator to sign out current user
export function unsetAuthedUser() {
	return {
		type: UNSET_AUTHED_USER,
	};
}
