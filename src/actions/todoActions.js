import todoList from '../api';

export const addTodo = todo => ({
  type: "ADD",
  payload: todo
});

export const addListFromApi = {
  type: "ADD_BULK",
  payload: todoList.get()
}
