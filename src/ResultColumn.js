import React from 'react';


const checkField = (field, desc) => 
  field ? 
    <p> {desc}: {field} </p> : null

export const ResultColumn = ({result}) => {

  const {
    first_name,
    last_name,
    mi,
    exam_no,
    list_title_code : title_no,
    list_title_desc : title,
    established_date : pass_date,
    annivesary_date : expiration,  
    published_date : record_date,
  } = result

  return (
    <div>
      {first_name ? checkField(first_name, "First Name") : null}
      {last_name ? checkField(last_name, "Last Name") : null}
      {mi ? checkField(mi, "MI") : null}
      {exam_no ? checkField(exam_no, "Exam No.") : null}
      {title_no ? checkField(title_no, "Title No.") : null}
      {title ? checkField(title, "Title") : null}
      {pass_date ? checkField(pass_date, "Pass Date") : null}
      {expiration ? checkField(expiration, "Expiration") : null}
      {record_date ? checkField(record_date, "Record Date") : null}
    </div>
  )
}