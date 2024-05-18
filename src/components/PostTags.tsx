import * as React from 'react'

interface Props {
  tags?: readonly string[]
}

const PostTags = (props: Props) => (
  <p>
    {props.tags?.join(', ')}
  </p>
)

export default PostTags
