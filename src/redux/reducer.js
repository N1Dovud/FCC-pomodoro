import { DECREMENT_BREAK,DECREMENT_SESSION, INCREMENT_BREAK, INCREMENT_SESSION, ISRUNNING, SET } from './actions.js';

//initial state
const initialState = { 
    break: 5,
    session: 25,
    isRunning: false
 };


// reducer
export default function reducer(state = initialState, { type }) {
    switch (type) {
        case DECREMENT_BREAK:
            if (state.break > 1)
            return { ...state, break: state.break - 1 };
            return state;
        case DECREMENT_SESSION:
            if (state.session > 1)
            return { ...state, session: state.session - 1 };
            return state;
        case INCREMENT_BREAK:
            if (state.break < 60)
            return { ...state, break: state.break + 1 };
            return state;
        case INCREMENT_SESSION:
            if (state.session < 60)
            return { ...state, session: state.session + 1 };
            return state;
        case SET:
            return { ...state, break: 5, session: 25, isRunning: false };
        case ISRUNNING:
            return { ...state, isRunning: !state.isRunning};
        default:
            return state;
    }
}