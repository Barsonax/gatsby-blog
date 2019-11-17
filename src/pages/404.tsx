import * as React from 'react'
import { Link } from 'gatsby'

import Main from '../components/Main'
import IndexLayout from '../layouts'

const NotFoundPage = () => (
  <IndexLayout>
    <Main>
      <h1>404: Page not found.</h1>
      <p>
        You've hit the void. <Link to="/">Go back.</Link>
      </p>
    </Main>
  </IndexLayout>
)

export default NotFoundPage
