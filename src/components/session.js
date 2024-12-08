import { useDispatch, useSelector } from 'react-redux';
import { decrement_session, increment_session } from '../redux/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export default function Session() {
    const sessionLength = useSelector(state => state.session);
    const isRunning = useSelector(state => state.isRunning);
    const dispatch = useDispatch();
    const decrement = () => {
        if (!isRunning)
        dispatch(decrement_session());
    }
    const increment = () => {
        if (!isRunning)
        dispatch(increment_session());
    }
    return (
        <>
        <div className="session">
            <h3 id="session-label">Session Length</h3>
            <div className='buttons-and-session-length'>
                <button id="session-decrement" onClick={decrement}>
                    <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                </button>
                <span id="session-length">{sessionLength}</span>
                <button id="session-increment" onClick={increment}>
                    <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                </button>
            </div>
        </div>
        </>
    )
}