import { DECREMENT_BREAK, ISRUNNING, DECREMENT_SESSION, INCREMENT_BREAK, INCREMENT_SESSION, SET } from './actions.js';

function decrement_break() {
    return {
        type: DECREMENT_BREAK
    }
}

function decrement_session() {
    return {
        type: DECREMENT_SESSION
    }
}

function increment_break() {
    return {
        type: INCREMENT_BREAK
    }
}
function increment_session() {
    return {
        type: INCREMENT_SESSION
    }
}
function set() {
    return {
        type: SET
    }
}
function isRunning() {
    return {
        type: ISRUNNING
    }
}
export { decrement_break, isRunning, decrement_session, increment_break, increment_session, set };