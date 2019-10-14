import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

// 1
// importing required dependencies
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// 2
// creating httpLink that will connect ApolloClient instance with GraphQL API,
// server will be running on localhost:4000
const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

// 3
// instantiating ApolloClient by passing in httpLink and new cache instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

// 4
// rendering root component of app
ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
serviceWorker.unregister();