import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [
    thunk
]

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : null;

// TODO: add check for dev mode
middlewares.push(createLogger({
    collapsed: true
}))

const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

export default store
