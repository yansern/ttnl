import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import TickSvg from '../../../assets/svg/tick.svg';
import TickGreenSvg from '../../../assets/svg/tick-green.svg';
import ExclamationSvg from '../../../assets/svg/exclamation.svg';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im; // eslint-disable-line
  return re.test(phone);
}

function validate(values) {
  // console.log(values) -> { firstName: '', lastName: '', ... }
  const { firstName = '', lastName = '', email = '', message = '', phone = '' } = values;
  const errors = {};

  if (!firstName.trim()) {
    errors.firstName = 'We need your first name.';
  }

  if (!lastName.trim()) {
    errors.lastName = 'We need your last name.';
  }

  if (!email.trim() || !validateEmail(email)) {
    errors.email = 'Please use a valid e-mail address.';
  }

  if (phone.trim() && !validatePhone(phone)) {
    errors.phone = 'Enter a valid phone number';
  }

  if (!message) {
    errors.message = 'Sorry, your message can\'t be empty.';
  }

  // If errors is empty, the form is fine to submit
  return errors;
}

@reduxForm({
  form: 'ContactForm',
  validate,
})
export default class Contact extends Component {
  onSubmit(values) {
    // this === component
    console.log(values);
  }

  renderField(field) {
    const { meta: { touched, error, valid, pristine } } = field;

    return (
      <div className='field'>
        <div className={ `control ${ valid && !pristine ? 'has-icons-right' : '' }` }>
          {
            field.type === 'text' ?
              (<input
                type='text'
                className='input'
                placeholder={ field.placeholder }
                { ...field.input }
              />) : ''
          }
          {
            field.type === 'textarea' ?
              (<textarea
                className='textarea'
                placeholder={ field.placeholder }
                { ...field.input }
              />) : ''
          }
          { valid && !pristine ? (<span className='icon is-right'><TickGreenSvg /></span>) : '' }
        </div>
        { touched && error ? (<p className='help is-danger'>{ error }</p>) : '' }
      </div>
    );
  }

  render() {
    const { handleSubmit, submitFailed, submitSucceeded } = this.props; // eslint-disable-line

    return (
      <section id='contact' className='section hero bg-winter'>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title has-text-centered is-uppercase has-text-white size-'>We would love to<br />hear from you</h2>
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
              { submitFailed ?
                (<div className='notification'>
                  <span className='icon'>
                    <ExclamationSvg />
                  </span>
                  Please complete the form and try again.
                </div>) : '' }
              { submitSucceeded ?
                (<div className='notification'>
                  <span className='icon'>
                    <TickSvg />
                  </span>
                  Thank you, we have received your message.
                </div>) : '' }
              <fieldset>
                <div className='columns'>
                  <div className='column'>
                    <Field type='text' name='firstName' component={ this.renderField } placeholder='First name' />
                  </div>
                  <div className='column'>
                    <Field type='text' name='lastName' component={ this.renderField } placeholder='Last name' />
                  </div>
                </div>
                <div className='columns'>
                  <div className='column'>
                    <Field type='text' name='email' component={ this.renderField } placeholder='Your email address' />
                  </div>
                  <div className='column'>
                    <Field type='text' name='phone' component={ this.renderField } placeholder='Your phone number (optional)' />
                  </div>
                </div>
                <div className='columns'>
                  <div className='column'>
                    <Field type='textarea' name='message' component={ this.renderField } placeholder='Your message...' />
                  </div>
                </div>
              </fieldset>
              <div className='has-text-centered'>
                <button className='button is-primary send-button'>Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
