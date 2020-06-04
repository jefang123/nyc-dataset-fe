import React from 'react';

export const Input = ({inputName}) => {
  return (
    inputName ? 
      <input type="text" placeholder={inputName}>
      </input> : null
  )
}
