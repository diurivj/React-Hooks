import React, { useState } from 'react'
import Card from './Card';

const WithHooks = (props) => {

  const [name, setName] = useState('Diego');
  const [surname, setSurname] = useState('Vázquez');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  return (
    <section>
      <Card label='Name'>
        <input 
          value={name}
          onChange={handleNameChange}
        />
      </Card>
      <Card label='Surname'>
        <input 
          value={surname}
          onChange={handleSurnameChange}
        />
      </Card>
    </section>
  )
}

export default WithHooks;
