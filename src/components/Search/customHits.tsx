import React from 'react'
import { connectHits } from 'react-instantsearch-dom'
import BlogCard from '../BlogCard'
import { CustomHighlight } from './customHighlight'
import { CustomSnippet } from './customSnippet'

export const CustomHits = connectHits(({ hits }) => (
  <>
    {hits.map((hit) => (
      <BlogCard
        key={hit.objectID}
        title={
          <CustomHighlight attribute="title" hit={hit} />
        }
        slug={hit.slug}
        excerpt={
          <CustomSnippet attribute="excerpt" hit={hit} />
        }
        date={hit.date}
        // @ts-ignore
        tags={hit.tags}
      />
    ))}
  </>
))
