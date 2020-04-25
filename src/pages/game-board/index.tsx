import React, { FunctionComponent, useEffect } from 'react'
import { RouteComponentProps, Link } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '~/store'
import { fetchDogs } from '~/store/dogs/actions'

export const GameBoardPage: FunctionComponent<RouteComponentProps> = () => {
  const dispatch = useDispatch()
  const dogs = useSelector((state: AppState) => state.dogs)

  useEffect(() => {
    dispatch(fetchDogs())
  }, [])

  if (dogs.isFetching) {
    return (
      <section>
        <span>Loading...</span>
      </section>
    )
  }

  return (
    <main>
      GameBoard page
      <Link to="/menu">Leave game</Link>
    </main>
  )
}
