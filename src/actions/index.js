import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const CREATE_USER = 'create_user';
export const EDIT_USER = 'edit_user';
export const FETCH_USER = 'fetch_user';
export const DELETE_USER = 'delete_user';

const ROOT_URL = 'https://pitzi-api.herokuapp.com';

export const fetchUsers = () => {
	const request = axios.get(`${ROOT_URL}/users`);

	return {
		type: FETCH_USERS,
		payload: request
	};
}

export const createUser = (values, callback) => {
	const request = axios.post(`${ROOT_URL}/users`, values)
		.then(() => callback());

	return {
		type: CREATE_USER,
		payload: request
	};
}

export const editUser = (values, id) => {
	const request = axios.put(`${ROOT_URL}/users/${id}`);

	return {
		type: EDIT_USER,
		payload: request
	}
}

export const fetchUser = id => {
	const request = axios.get(`${ROOT_URL}/users/${id}`);

	return {
		type: FETCH_USER,
		payload: request
	};
}

export const deleteUser = (id, callback) => {
	const request = axios.delete(`${ROOT_URL}/users/${id}`)
		.then(() => callback());

	return {
		type: DELETE_USER,
		payload: id
	}
}