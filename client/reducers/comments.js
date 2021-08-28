function postComments( state = [], action) {

  switch(action.type) {
    case 'ADD_COMMENT':
console.log('Add Comment')
    return [...state, {
      user: action.author,
      text: action.comment
    }]
    case 'REMOVE_COMMENT':
    console.log('Remove Comment')

      return [
        // from start to theone we want
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]


    default:
      return state
  }

  return state
}

function comments( state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}




export default comments
