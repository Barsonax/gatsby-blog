import * as React from 'react'
import * as styles from './index.module.css'

type Props = {
  children?: React.ReactNode
}

const Dropdown = ({ children }: Props) =>
  <div className={styles.dropdown} >
    <button className={styles.dropbtn}>Dropdown</button>
    <div className={styles.dropdownContent} >
      {children}
    </div>
  </div>

export default Dropdown
