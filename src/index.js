import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Context from './Context'
import { App } from './App'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

// optional cofiguration
const options = {
  offset: '10px',
  position: 'top center',
  timeout: 2000,
  type: 'info',
  transition: 'fade',
  containerStyle: {
    zIndex: 100
  }
}

const client = new ApolloClient({
  uri: 'https://petgram-server-willydavid.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error) => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

console.log(Context)
ReactDOM.render(
  <Context.Provider>
    <AlertProvider template={AlertTemplate} {...options}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </AlertProvider>
  </Context.Provider>,
  document.getElementById('app')
)
