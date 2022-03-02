import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { electionReducer } from '../reducers/electionReducer';
import { positionReducer } from '../reducers/positionReducer';

import { requirementReducer } from '../reducers/requirementReducer';
import { userReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    users: userReducer,
    requirements: requirementReducer,
    positions: positionReducer,
    elections: electionReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);