import React from 'react';

export const Button = ({children, onClick}) => {
  return (
    children ? 
      <button onClick={onClick}> 
        {children}
      </button> : null
  )
}
