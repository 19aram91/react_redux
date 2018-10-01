const todoReducer = (store = [], action) => {
  switch (action.type) {
    case 'ADD':
      return [...store, action.payload]
      break;
    case 'ADD_BULK':
        return [...store, ...action.payload]
        break;
    default:
      return store;
  }
}

export default todoReducer;
