import React, { Component } from 'react';
import Button from './components/Button';
const defaultState = {}

class Form extends Component {
  state = defaultState;

  render() {
    return (
      <form>
        <h3>Form</h3>  
        <input 
          type='text' 
          value=""
          placeholder= "Form Input"
          onChange={null}/>
        <Button></Button>
      </form>
    )
  }
}

export default Form;
