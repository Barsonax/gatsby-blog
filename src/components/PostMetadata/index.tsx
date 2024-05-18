import * as React from 'react'
import * as styles from './index.module.css'

import PostDate from '../PostDate'
import classNames from 'classnames'
import PostTags from '../PostTags';

interface Props {
  date: string
  tags: readonly string[]
}

const PostMetadata = (props: Props) =>
  <div className={classNames(styles.postMetadata, styles.mutedText)}>
    <PostDate date={props.date} />
    <PostTags tags={props.tags} />
  </div>

export default PostMetadata
