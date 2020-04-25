export type Dog = string

export interface DogsState {
  dogs: Array<Dog>
  isFetching: boolean
}

// Describing the different ACTION NAMES available
export const REQUEST_DOGS = 'REQUEST_DOGS'
export const RECEIVE_DOGS = 'RECEIVE_DOGS'

export interface RequestDogsAction {
  type: typeof REQUEST_DOGS
}

export interface ReceiveDogsAction {
  type: typeof RECEIVE_DOGS
  dogs: Array<Dog>
}

export type DogsActionTypes = RequestDogsAction | ReceiveDogsAction
