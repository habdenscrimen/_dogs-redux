import { DogsState, DogsActionTypes, REQUEST_DOGS, RECEIVE_DOGS } from './types'

const initialState: DogsState = {
  dogs: [],
  isFetching: false,
}

export const dogsReducer = (state = initialState, action: DogsActionTypes): DogsState => {
  switch (action.type) {
    case REQUEST_DOGS:
      return Object.assign({}, state, {
        isFetching: true,
      })

    case RECEIVE_DOGS:
      return Object.assign({}, state, {
        dogs: action.dogs,
        isFetching: false,
      })

    default:
      return state
  }
}
