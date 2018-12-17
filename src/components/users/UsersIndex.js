import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';
import _ from 'lodash';

class UsersIndex extends Component {
	componentDidMount() {
		this.props.fetchUsers();
	}

	renderUsers() {
		return _.map(this.props.users, user => {
			return (
				<li className="list-group-item" key={user.id}>
					<Link to={`/users/${user.id}`}>{user.name}</Link>
					<Link to={`/users/${user.id}/details`}><button className="btn btn-primary pull-xs-right">Devices</button></Link>
				</li>
			);
		});
	}

	render() {
		
		if(!this.props.users) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/users/new"><button className="btn btn-primary">New user</button></Link>
				<h3>Users</h3>
				<ul className="list-group">
					{ this.renderUsers() }
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ users }) => {
	return { users };
}

export default connect(mapStateToProps, { fetchUsers })(UsersIndex);