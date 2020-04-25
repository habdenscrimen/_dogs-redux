import { Dog, REQUEST_DOGS, RECEIVE_DOGS } from './types'
import { Dispatch } from 'redux'

export const requestDogs = () => ({
  type: REQUEST_DOGS,
})

interface DogsResponse {
  message: Array<Dog>
  status: 'success' | string
}

export const receiveDogs = (dogsResponse: DogsResponse) => ({
  type: RECEIVE_DOGS,
  dogs: dogsResponse.message,
})

export const fetchDogs = () => (dispatch: Dispatch) => {
  dispatch(requestDogs())

  return fetch('https://dog.ceo/api/breeds/image/random/50')
    .then((res) => res.json())
    .then((json) => dispatch(receiveDogs(json)))
}
