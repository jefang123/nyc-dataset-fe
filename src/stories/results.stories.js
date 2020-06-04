import '../index.css';
import React from 'react';
import { Results } from '../Results';

export default { title: 'Results' };


export const withoutResults = () => (
  <Results/>
);

export const withResults = () => {
  let state = {
    "0" : {
      "anniversary_date": "12/21/22",
      "established_date": "12/21/18",
      "exam_no" : "0001",
      "first_name" : "TEST",
      "last_name" : "ONE",
      "list_title_code": "99999",
      "list_title_desc": "TESTER",
      "published_date": "06/22/16"
    },
    "1" : {
      "anniversary_date": "12/21/20",
      "established_date": "12/21/16",
      "exam_no" : "0002",
      "first_name" : "TEST",
      "last_name" : "TWO",
      "list_title_code": "99999",
      "list_title_desc": "TESTER",
      "published_date": "06/22/12"
    }
  }

  return (
    <Results results={state}/>
  )
};