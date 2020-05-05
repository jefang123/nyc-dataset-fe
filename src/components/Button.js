import React from 'react';

const Button = ({buttonName}) => {
  return (
    buttonName ? 
      <button>
        {buttonName}
      </button> : null
  )
}
