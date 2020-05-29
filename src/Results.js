import React from 'react';
import ResultColumn from './ResultColumn';

export const Results = ({results}) => {
  const res = Object.keys(results).map(key => 
      <ResultColumn key={key} result={results[key]}/> 
    )
  return (
    res.length ?
      <>
        {res}
      </> : 
      //{  null }
      <p>
        no results
      </p>
  )
}