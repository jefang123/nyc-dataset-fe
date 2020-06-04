import React from 'react';

export const Container = ({children}) => {
  return (
    children ? 
      <div className="container">
        {children}
      </div> : null
  )
}
