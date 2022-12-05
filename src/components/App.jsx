import React from 'react';
import Form from './Form/Form';
import User from './User/User';
import { Filter } from './Filter/Filter';
export class App extends React.Component {
  state = {
    contacts: [],
  };
  formSubmitHandler = data => {
    this.setState({ contacts: [...this.state.contacts, data] });
    // setTimeout(console.log(data), 1000);
  };

  addItem = () => {
    this.setState({ contacts: [...this.state.contacts, this.state.name] });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <User events={this.state.contacts} />
        <Filter />
      </div>
    );
  }
}
