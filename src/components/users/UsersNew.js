import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser, editUser } from '../../actions';

class UsersNew extends Component {
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
		if (this.props.match.path === "/users/new") {
			this.props.createUser(values, () => {
				this.props.history.push('/');
			});
		} else {
			this.props.editUser(values, () => {
				this.props.history.push('/');
			});
		}	
		
	}

	render() {
		const {handleSubmit} = this.props;

		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Nome"
					name="name"
					component={this.renderField}
				/>
				<Field
					label="CPF"
					name="cpf"
					component={this.renderField}
				/>
				<Field
					label="Email"
					name="email"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {

	const errors = {};
	
	if (!values.name) {
		errors.title = "Inserir um nome!";
	}
	if (!values.cpf) {
		errors.cpf = "Inserir um CPF!";
	}
	if (!values.email) {
		errors.email = "Inserir um email!";
	}


	return errors;
}

const formWrapped = reduxForm({
	validate,
	form: 'UsersNewForm'
})(UsersNew)

const mapStateToProps = ({ users }, ownProps) => {
	return {
		users,
		initialValues: users[parseInt(ownProps.match.params.id)]
	};
}

export default connect(
	mapStateToProps,
	{ createUser, editUser }
)(formWrapped);