import * as React from 'react'
import * as styles from './index.module.css'

type Props = {
  children?: React.ReactNode
}

const CardContainer = ({ children }: Props) =>
  <div className={styles.cardContainer}>
    {children}
  </div>

export default CardContainer
