import React from 'react';

export const Dropdown = ({children, show}) => {
  const c = show ? "drop" : "hidden"
  return (
    children ? 
      <div className={c}>
        {children}
      </div> : null
  )
}
