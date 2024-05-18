import * as React from 'react'

interface PostDataProps {
  date?: any
  className?: string
}

const PostDate = (props: PostDataProps) => (
  <p className={props.className}>Posted
    <time> {props.date}</time>
  </p>
)

export default PostDate
