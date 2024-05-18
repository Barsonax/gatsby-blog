import * as React from 'react'
import * as styles from './index.module.css'

const ListHeader = () => (
  <header className={styles.listHeader}>
    <p className={styles.listHeaderSubtext}>Coding and photography</p>
    <h1 className={styles.listHeaderTitle}>Photogrammer</h1>
  </header>
)

export default ListHeader
