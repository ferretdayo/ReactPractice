import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, Middleware } from 'redux'

import App from './App'
import { rootReducer } from './redux/stores'

const middlewares: Middleware<any, any, any>[] = [thunk]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div,
  )
  ReactDOM.unmountComponentAtNode(div)
})
