import React, { FunctionComponent } from 'react'
import { useTimeout } from 'react-use'

interface SpinnerProps {
  timeout?: number
}

export const Spinner: FunctionComponent<SpinnerProps> = ({ timeout = 500 }) => {
  const [isReady] = useTimeout(timeout)

  return isReady() && <section>Loading...</section>
}
