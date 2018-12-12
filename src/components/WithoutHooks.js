import React, { Component } from 'react';
import Card from './Card';

class WithoutHooks extends Component {

  state = {
    name: 'Oswaldinho',
    surname: 'Martínez'
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSurnameChange = (e) => {
    this.setState({
      surname: e.target.value
    });
  };

  render() {
    return (
      <section>
        <Card label='Name'>
          <input 
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Card>
        <Card label='Surname'>
          <input 
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Card>
      </section>
    )
  }
}

export default WithoutHooks;