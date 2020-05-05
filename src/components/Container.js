import React from 'react';

const Container = ({children}) => {
  return (
    children ? 
      <div className="container">
        {children}
      </div> : null
  )
}
