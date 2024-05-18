import algoliasearch from 'algoliasearch/lite'
import { MultipleQueriesQuery } from '@algolia/client-search'

const algoliaClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID!,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY!
)

export const createClient = (minAmountofCharacters: number) => {
  const searchClient = {
    search(requests: MultipleQueriesQuery[]) {
      if (requests.every(q => q.params?.query?.length || 0 < minAmountofCharacters)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            processingTimeMS: 0,
          }))
        })
      }
      return algoliaClient.search(requests)
    }
  }

  return searchClient
}
