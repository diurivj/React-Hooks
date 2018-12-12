import React from 'react';

class Card extends React.Component {

  render() {
    return (
      <div className='card'>
        <p style={{ color: '#666666' }}> {this.props.label} </p>
        {this.props.children}
      </div>
    )
  }
}

export default Card;  