const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state
        }

        return Object.assign({}, state, {
          completed: !state.completed
        })
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
    case 'TOGGLE_TODO':
      return state.map(t =>
      todo(t, action)
    )

    default:
      return state
  }
}

export default todos
