import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const CREATE_USER = 'create_user';
export const EDIT_USER = 'edit_user';
export const FETCH_USER = 'fetch_user';
export const DELETE_USER = 'delete_user';
export const FETCH_DEVICES = 'fetch_devices';
export const CREATE_DEVICE = 'create_device';
export const EDIT_DEVICE = 'edit_device';
export const DELETE_DEVICE = 'delete_device';

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

export const editUser = (values, callback) => {
	const request = axios.put(`${ROOT_URL}/users/${values.id}`, values)
		.then(() => callback());

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
	axios.delete(`${ROOT_URL}/users/${id}`)
		.then(() => callback());

	return {
		type: DELETE_USER,
		payload: id
	}
}

export const fetchDevices = id => {
	const request = axios.get(`${ROOT_URL}/users/${id}/orders`)

	return {
		type: FETCH_DEVICES,
		payload: request
	}
}

export const createDevice = (values, user_id, callback) => {
	const request = axios.post(`${ROOT_URL}/users/${user_id}/orders`, values)
		.then(() => callback());

	return {
		type: CREATE_DEVICE,
		payload: request
	}
}

export const editDevice = (values, user_id, id, callback) => {
	const request = axios.put(`${ROOT_URL}/users/${user_id}/orders/${id}`, values)
		.then(() => callback());

	return {
		type: EDIT_DEVICE,
		payload: request
	}
}

export const deleteDevice = (user_id, id, callback) => {
	axios.delete(`${ROOT_URL}/users/${user_id}/orders/${id}`)
		.then(() => callback());

	return {
		type: DELETE_DEVICE,
		payload: id
	}
}