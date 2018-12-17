import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUser, deleteUser, fetchDevices, deleteDevice } from '../../actions';
import _ from 'lodash';

class UsersShow extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchUser(id);
		this.props.fetchDevices(id);
	}

	onDeleteClick() {
		const { id } = this.props.match.params;
		this.props.deleteUser(id, () => {
			this.props.history.push('/');
		});
	}

	onDeleteDeviceClick(device) {
		const { id } = this.props.match.params;
		this.props.deleteDevice(id, device, () => {
			this.props.history.push(`/users/${id}/details`);
		});
	}

	renderDevices() {
		return _.map(this.props.devices, device => {
			return (
				<li className="list-group-item" key={device.id}>
					Aparelho: {device.device} | IMEI: {device.imei} | Valor anual: {device.yearly_price} | Parcelas: {device.installments} | 
					<Link to={`/users/${this.props.user.id}/devices/${device.id}`}><button className="btn btn-primary">Edit</button></Link> |
					<button className="btn btn-danger" onClick={() => this.onDeleteDeviceClick(device.id)}>Delete Device</button>
				</li>
			);
		});
	}

	render() {
		const { user } = this.props;

		if (!user) { 
			return <div>Loading...</div>;
		}

		return (
			<div>
				<button
					className="btn btn-danger pull-xs-right"
					onClick={this.onDeleteClick.bind(this)}
				>
					Delete User
				</button>
				<h3>Name: { user.name }</h3>
				<h6>CPF: { user.cpf }</h6>
				<p>Email: { user.email }</p>
				<hr />
				<Link to={`/users/${user.id}/devices/new`}><button className="btn btn-primary">New device</button></Link> | <Link to="/"><button className="btn btn-primary">Back</button></Link>
				<h3>Devices</h3>
				{ this.renderDevices() }
			</div>
		);
	}
}

function mapStateToProps({ users, devices }, ownProps) {
	return { 
		user: users[ownProps.match.params.id],
		devices 
	};
}

export default connect(mapStateToProps, { fetchUser, deleteUser, fetchDevices, deleteDevice })(UsersShow);