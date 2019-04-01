const ADD_CATEGORY = 'category/add'
const SELECT_CATEGORY = 'category/select'
/* 
  id,
  name
*/
export const addCategory = payload => ({
  type: ADD_CATEGORY,
  payload: {
    ...payload,
    id: Math.random().toString(36)
  }
})

export const selectCategory = payload => ({
  type: SELECT_CATEGORY,
  payload,
})

const initialSate = {
  data: [{ id: 1, name: 'Default' }],
  selected: 1,
}

export default function(state = initialSate, action) {

  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case SELECT_CATEGORY:
      return {
        ...state,
        selected: action.payload
      }    
    default:
      return state
  }
}