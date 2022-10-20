const environment = {
  URL: process.env.CF_PAGES == 1 ?
    process.env.CONTEXT == 'production' ?
      process.env.CF_PAGES_URL :
      process.env.DEPLOY_PRIME_URL :
    'http://localhost:8000'
}
export default environment
