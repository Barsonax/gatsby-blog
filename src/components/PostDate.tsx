import * as React from 'react'

interface PostDataProps {
  date: any
  className?: string
}

const PostDate = ({ date, className }: PostDataProps) => (
  <p className={className}>Posted
    <time> {date}</time>
  </p>
)

export default PostDate
