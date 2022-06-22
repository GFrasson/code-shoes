import React from 'react'
import { Navbar } from '../../components/Navbar';
import { ErrorContainer } from './style';

export function Error() {
  return (
    <>
      <Navbar />
      <ErrorContainer>
        <h1 className='error-status'>
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <p className='error-message'>Desculpe, esta página não existe...</p>
      </ErrorContainer>
    </>
  );
}