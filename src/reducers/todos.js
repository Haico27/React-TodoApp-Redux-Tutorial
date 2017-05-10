const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }

      default:
        return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, //returns all items of the current state
        todo(undefined, action) //adds the newly added todo as the last item in the array
      ]

    default:
      return state
  }
}

export default todos
