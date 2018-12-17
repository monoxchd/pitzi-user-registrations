import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createDevice, editDevice } from '../../actions';

class DevicesNew extends Component {
	renderField(field) {
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">
					{touched ? error : ''}
				</div>
			</div>
		);
	}

	onSubmit(values) {
		const { user_id, id } = this.props.match.params;

		if (this.props.match.path === "/users/:user_id/devices/new") {
			this.props.createDevice(values, user_id, () => {
				this.props.history.push(`/users/${user_id}/details`);
			});
		} else {
			this.props.editDevice(values, user_id, id, () => {
				this.props.history.push(`/users/${user_id}/details`);
			});
		}	
		
	}

	render() {
		const {handleSubmit} = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Aparelho"
					name="device"
					component={this.renderField}
				/>
				<Field
					label="IMEI"
					name="imei"
					component={this.renderField}
				/>
				<Field
					label="Valor Anual"
					name="yearly_price"
					component={this.renderField}
				/>
				<Field
					label="Parcelas"
					name="installments"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to={`/users/${this.props.match.params.user_id}/details`} className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {

	const errors = {};
	
	if (!values.device) {
		errors.device = "Inserir um aparelho!";
	}
	if (!values.imei) {
		errors.imei = "Inserir um IMEI!";
	}
	if (!values.yearly_price) {
		errors.yearly_price = "Inserir um valor anual!";
	}
	if (isNaN(Number(values.yearly_price))) {
		errors.yearly_price = "O valor precisa ser numérico";
	}
	if (!values.installments) {
		errors.installments = "Inserir quantidades de parcelas!";
	}
	if (isNaN(Number(values.installments))) {
		errors.yearly_price = "A quantidade de parcelas precisa ser numérico";
	}


	return errors;
}

const formWrapped = reduxForm({
	validate,
	form: 'DevicesNewForm'
})(DevicesNew)

const mapStateToProps = ({ users, devices }, ownProps) => {
	return {
		user: users[ownProps.match.params.user_id],
		initialValues: devices[parseInt(ownProps.match.params.id)]
	};
}

export default connect(
	mapStateToProps,
	{ createDevice, editDevice }
)(formWrapped);