import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const mapDispatchToProps = dispatch => {
  return {
    addTodo : (todoText) => dispatch(addTodo(todoText))
  }
}

class Form extends Component{
  constructor() {
    super();
    this.state = {
      todoText : ''
    }

    this.changeText = this.changeText.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeText(event){
    this.setState({ [event.target.id] : event.target.value })
  }

  addTodo(event){
    event.preventDefault();
    const id = new Date().getTime();
    const todoText = this.state.todoText;
    this.props.addTodo({id, todoText});
    this.setState({todoText : ''});
  }

  render(){
    return(
      <div>
      <form onSubmit={this.addTodo}>
        <input
          type="text"
          id = "todoText"
          onChange = {this.changeText}
        />
        <button type="submit"> SAVE </button>
      </form>
      </div>
    )
  }
}

const conForm = connect(null, mapDispatchToProps)(Form);

export default conForm;
