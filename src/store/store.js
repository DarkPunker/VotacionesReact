import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { announcementReducer } from '../reducers/announcementReducer';

import { authReducer } from '../reducers/authReducer';
import { electionReducer } from '../reducers/electionReducer';
import { positionReducer } from '../reducers/positionReducer';
import { postulationReducer } from '../reducers/postulationReducer';

import { requirementReducer } from '../reducers/requirementReducer';
import { rolReducer } from '../reducers/rolRuducer';
import { userReducer } from '../reducers/userReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    users: userReducer,
    requirements: requirementReducer,
    positions: positionReducer,
    elections: electionReducer,
    rols: rolReducer,
    announcements: announcementReducer,
    postulations: postulationReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);