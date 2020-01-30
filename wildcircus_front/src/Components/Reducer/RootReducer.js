const initState = {
  truc: 'test',
  data:['nothing yet']
}

const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case "ONE":
      return { ...state, truc: action.payload }
    case "SETDATA":
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default RootReducer;