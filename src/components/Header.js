import React from 'react';

// class = {
//   max-width:100%,
//   text-align:center
// }


export const Header = ({text}) => {
  return (
    text ? 
      <div className={c}>
        text
      </div> : null
  )
}
