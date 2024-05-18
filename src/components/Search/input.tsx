import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import * as styles from './index.module.css'

interface InputProps {
  delay: number;
}

export const Input = ({ delay }: InputProps) => {
  let timerId: NodeJS.Timeout | null = null

  const InputConnector = connectSearchBox(({ refine }) => (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => {
          const value = e.target.value
          if (timerId) {
            clearTimeout(timerId)
          }

          timerId = setTimeout(() => {
            console.log('search')
            return refine(value)
          }, delay)
        }}
      />
      <div className={styles.searchIcon} />
    </form>
  ))

  return <InputConnector />
}
