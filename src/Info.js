import React from 'react';
import { InfoColumn } from './InfoColumn.js'

export const Info = ({columns}) => {
  const info = columns ? Object.keys(columns).map(col =>{
    return <InfoColumn key={col} fieldValue={columns[col]}/>
  }) : null
  return (
    <div className="f aib fdc w8 ma" >
      {info}
    </div>
  )
}