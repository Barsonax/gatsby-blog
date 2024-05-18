import React, { ReactElement } from 'react'
import {
  connectStateResults
} from 'react-instantsearch-dom'

interface ResultsProps {
  renderEmptyQuery: ReactElement;
  minAmountofCharacters: number;
  children?: React.ReactNode
}

export const Results = ({ children, renderEmptyQuery, minAmountofCharacters }: ResultsProps) => {
  const ResultConnector = connectStateResults(({ searchState }) => (searchState?.query && searchState.query.length >= minAmountofCharacters ? <>{children}</> : renderEmptyQuery))

  return (
    <ResultConnector>
      {children}
    </ResultConnector>
  )
}
