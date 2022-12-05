import React from 'react';

export class Filter extends React.Component {
  state = {
    input: '',
  };

  handleInputChange = event => {
    this.setState({ input: event.currentTarget.value });
  };

  render() {
    return (
      <label htmlFor="">
        Name
        <input
          type="text"
          value={this.state.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleInputChange}
        />
      </label>
    );
  }
}
