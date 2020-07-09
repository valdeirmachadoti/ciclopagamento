import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

import multi from 'redux-multi'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducers from './main/reducers'

import AuthOrApp from './main/authOrApp'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>,
document.getElementById('app'))

serviceWorker.unregister();
