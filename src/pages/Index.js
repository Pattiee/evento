import React, { useState } from 'react';
import Header from '../components/Header'
import Djs from '../sections/Djs';

const Index = () => {
  const [djs, setDjs] = useState([
    {
      name: 'Festoo',
      phone: '0123456789'
    },
    {
      name: 'Nick',
      phone: '0987654321'
    },
    {
      name: 'Festoo',
      phone: '0123456789'
    },
    {
      name: 'Nick',
      phone: '0987654321'
    },
    {
      name: 'Festoo',
      phone: '0123456789'
    },
    {
      name: 'Nick',
      phone: '0987654321'
    },
    {
      name: 'Festoo',
      phone: '0123456789'
    },
    {
      name: 'Nick',
      phone: '0987654321'
    },
  ]);


  return (
    <div>
      <div>
        <Header/>
        <Djs djsList={djs}/>
      </div>

      <div>
        <h1>Home page contents</h1>
      </div>
    </div>
  )
}

export default Index
