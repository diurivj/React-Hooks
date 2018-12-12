import React, { useState } from 'react'
import Card from './Card';

const WithHooks = (props) => {

  const [name, setName] = useState('Diego');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <section>
      <Card label='Name'>
        <input 
          value={name}
          onChange={handleNameChange}
        />
      </Card>
    </section>
  )
}

export default WithHooks;
