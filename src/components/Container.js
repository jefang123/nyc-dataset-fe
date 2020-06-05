// THIS MODULE CONTAINS CONTAINER AND GRID COMPONENTS 

import React from 'react';

export const Container = ({children}) => {
  return (
    children ? 
      <div className="container">
        {children}
      </div> : null
  )
}

export const MainGrid = ({children}) => {
  return (
    children ? 
      <div className="main-grid">
        {children}
      </div> : null
  )
}

export const MiniGrid = ({children}) => {
  return (
    children ?
      <div className="mini-grid">
        {children}
      </div> : null
  )
}