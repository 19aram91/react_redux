import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {todos : state.todo};
}

const List = ( {todos} ) => (
  <div>
    <ul>
      <h1>This is a list</h1>
      {todos.map( todo => (
            <li id={ todo.id } key={ todo.id }> {todo.todoText} </li>
      ))}
    </ul>
  </div>
)

const conList = connect(mapStateToProps)(List);

export default conList;
