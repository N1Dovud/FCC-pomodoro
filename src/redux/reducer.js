import { DECREMENT_BREAK,DECREMENT_SESSION, INCREMENT_BREAK, INCREMENT_SESSION, SET } from './actions.js';

//initial state
const initialState = { 
    break: 5,
    session: 25
 };


// reducer
export default function reducer(state = initialState, { type }) {
    switch (type) {
        case DECREMENT_BREAK:
            if (state.break > 1)
            return { ...state, break: state.break - 1 };
        case DECREMENT_SESSION:
            if (state.session > 1)
            return { ...state, session: state.session - 1 };
        case INCREMENT_BREAK:
            return { ...state, break: state.break + 1 };
        case INCREMENT_SESSION:
            return { ...state, session: state.session + 1 };
        case SET:
            return { ...state, break: 5, session: 25 };
        default:
            return state;
    }
}