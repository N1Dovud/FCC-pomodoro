import { useDispatch, useSelector } from 'react-redux';
import { decrement_break, increment_break } from '../redux/actionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
export default function Break() {
    const breakLength = useSelector(state => state.break);
    const isRunning = useSelector(state => state.isRunning);
    const dispatch = useDispatch();
    const decrement = () => {
        if (!isRunning)
        dispatch(decrement_break());
    }
    const increment = () => {
        if (!isRunning)
        dispatch(increment_break());
    }
    return (
        <>
        <div className="break">
            <h3 id="break-label">Break Length</h3>
            <div className='buttons-and-break-length'>
                <button id="break-decrement" onClick={decrement}>
                    <FontAwesomeIcon icon="arrow-down"></FontAwesomeIcon>
                </button>
                <span id="break-length">{breakLength}</span>
                <button id="break-increment" onClick={increment}>
                    <FontAwesomeIcon icon="arrow-up"></FontAwesomeIcon>
                </button>
            </div>
        </div>
        </>
    )
}