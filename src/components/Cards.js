import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Some EPIC ✨ Works By US 🌏 </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1595846936289-91371459c5bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
              text='Look at this Amazing Interior of a Study Room'
              label='Interior'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1611596188649-7c8e9507bdb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1010&q=80'
              text='White Bathroom Design'
              label='Interior'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1507086182422-97bd7ca2413b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
              text='Look at this Amazing Interior of a Study Room'
              label='Interior'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1496664444929-8c75efb9546f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
              text='White Bathroom Design'
              label='Interior'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1610963490387-0c08126eacf8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80'
              text='Text Random'
              label='Interior'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
