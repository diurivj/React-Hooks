import React, { Component } from 'react';
import Card from './Card';

class WithoutHooks extends Component {

  state = {
    name: 'Diego'
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
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
      </section>
    )
  }
}

export default WithoutHooks;