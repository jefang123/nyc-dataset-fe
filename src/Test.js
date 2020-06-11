import React, { Component } from 'react';
import logo from './logo.svg';


const example = {
  "0": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "KARA", 
    "group_no": "000", 
    "last_name": "KUAN-LAM", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 109, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "C", 
    "published_date": "05/24/17"
  }, 
  "1": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "ARMINDO", 
    "group_no": "000", 
    "last_name": "MONTEIRO", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 110, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "G", 
    "published_date": "05/24/17"
  }, 
  "2": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "GEORGE", 
    "group_no": "000", 
    "last_name": "SARKISSIAN", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 111, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "G", 
    "published_date": "05/24/17"
  }, 
  "3": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "PHILIP", 
    "group_no": "000", 
    "last_name": "CAPONITI", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 112, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "4": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "NITISH", 
    "group_no": "000", 
    "last_name": "TAILOR", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 113, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "P", 
    "published_date": "05/24/17"
  }, 
  "5": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "ERIC", 
    "group_no": "000", 
    "last_name": "PRONO", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 114, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "6": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "BHAVNA", 
    "group_no": "000", 
    "last_name": "RAVAL", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 115, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "R", 
    "published_date": "05/24/17"
  }, 
  "7": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "CHRISTOPHER", 
    "group_no": "000", 
    "last_name": "PAGGI", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 116, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "8": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "PATRICIA", 
    "group_no": "000", 
    "last_name": "ZANDER", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 117, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "J", 
    "published_date": "05/24/17"
  }, 
  "9": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "SAMIR", 
    "group_no": "000", 
    "last_name": "SALAH", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 118, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "10": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "SAKKAPAN", 
    "group_no": "000", 
    "last_name": "POTHIWIT", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 119, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "11": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "SEUNGCHUL", 
    "group_no": "000", 
    "last_name": "OK", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 120, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "12": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "NASER", 
    "group_no": "000", 
    "last_name": "HAMOUDEH", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 121, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "M", 
    "published_date": "05/24/17"
  }, 
  "13": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "BERHANE", 
    "group_no": "000", 
    "last_name": "TADESE", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 122, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "S", 
    "published_date": "05/24/17"
  }, 
  "14": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "LI", 
    "group_no": "000", 
    "last_name": "HUANG", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 123, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "15": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "CHARLY", 
    "group_no": "000", 
    "last_name": "AYOUB", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 124, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "F", 
    "published_date": "05/24/17"
  }, 
  "16": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "XHEVDET", 
    "group_no": "000", 
    "last_name": "CELO", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 125, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "17": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "KIRK", 
    "group_no": "000", 
    "last_name": "HIPPS", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 126, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "H", 
    "published_date": "05/24/17"
  }, 
  "18": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "NARENDRA", 
    "group_no": "000", 
    "last_name": "KHATRI", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 127, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "N", 
    "published_date": "05/24/17"
  }, 
  "19": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "SYMEON", 
    "group_no": "000", 
    "last_name": "KEFALIDIS", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 128, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "20": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "JOSEPH", 
    "group_no": "000", 
    "last_name": "ATANGA", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 173, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "A", 
    "published_date": "05/24/17"
  }, 
  "21": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "BIKYIN", 
    "group_no": "000", 
    "last_name": "NG", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 174, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "published_date": "05/24/17"
  }, 
  "22": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "JAMES", 
    "group_no": "000", 
    "last_name": "CARLESE", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 175, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "W", 
    "published_date": "05/24/17"
  }, 
  "23": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "GHANSHYAM", 
    "group_no": "000", 
    "last_name": "PATEL", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 176, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "V", 
    "published_date": "05/24/17"
  }, 
  "24": {
    "adj_fa": 100, 
    "anniversary_date": "12/27/21", 
    "established_date": "12/27/17", 
    "exam_no": "7012", 
    "first_name": "KEVIN", 
    "group_no": "000", 
    "last_name": "CLARKE", 
    "list_agency_code": "000", 
    "list_agency_desc": "OPEN COMPETITIVE", 
    "list_no": 177, 
    "list_title_code": "10015", 
    "list_title_desc": "ADMINISTRATIVE ENGINEER", 
    "mi": "A", 
    "published_date": "05/24/17"
  }
}


export class App extends Component {
  state = example;

  render() {
    let state = this.state;
    const results = state ? Object.keys(state).map(key => 
      <React.Fragment key={key}>
        <div>First Name {`${state[key].first_name}`}</div>  
        { state[key].mi ? <div>Middle Name {`${state[key].mi}`}</div> : null }
        <div>Last Name {`${state[key].last_name}`}</div>
        <div>Exam No {`${state[key].exam_no}`}</div>
        <div>Exam Title {`${state[key].list_title_desc}`}</div>
      </React.Fragment>
    ) : null
    return (
      <div className="App home-container">
        <div className="App-header navBar">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="hideText">Welcome to React</h2>
        </div>
        <p className="App-intro">
          NYC Datasets
        </p>
        <div className="f">
          {results}
        </div>
      </div>
    );
  }
}
