export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const SIGN_OUT = 'SIGN_OUT';

export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id,
	};
}

export function signOut() {
	return {
		type: SIGN_OUT,
	};
}
