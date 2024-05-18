import React, { ReactElement } from 'react'
import {
  InstantSearch,
  PoweredBy
} from 'react-instantsearch-dom'

import { Input } from './input'
import { CustomHits } from './customHits'
import { Results } from './results'
import { createClient } from './searchClient'

interface SearchProps {
  indices: Index[];
  renderEmptyQuery: ReactElement;
  minAmountofCharacters: number;
}

interface Index {
  name: string;
  title: string;
  hitComp: string;
}

const Search = ({ indices, renderEmptyQuery, minAmountofCharacters }: SearchProps) => {
  const searchClient = createClient(minAmountofCharacters)

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
    >
      <Input delay={200} />
      <Results renderEmptyQuery={renderEmptyQuery} minAmountofCharacters={minAmountofCharacters}>
        <CustomHits />
        <PoweredBy />
      </Results>
    </InstantSearch>
  )
}
export default Search
