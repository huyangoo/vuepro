let baseUrl = null

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'http://localhost:8090/test'
} else {
  baseUrl = 'http://localhost:8090/test'
}

export {
  baseUrl
}
