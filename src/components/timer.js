import { useDispatch, useSelector } from 'react-redux';
import { isRunning, set } from '../redux/actionCreators';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStop, faPlay, faRotate } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
export default function Timer() {
    const { session: sessionLength, break: breakLength, isRunning: isTimeRunning }= useSelector(state => state);
    console.log('sessionLength:', sessionLength);
    const [ time, setTime ] = useState(sessionLength * 60);
    const [ isSession, SetIsSession ] = useState(true);
    const dispatch = useDispatch();
    const format = time => {
        const seconds = time % 60;
        const minutes = Math.floor(time / 60);
        
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${formattedMinutes}:${formattedSeconds}`;
    }
        

    const stop = () => { 
        dispatch(isRunning())
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };
    const play = () => { dispatch(isRunning())};
    const reset = () => { 
        dispatch(set())
        if (!isSession)
        SetIsSession(!isSession)
        setTime(sessionLength * 60);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const audioRef = useRef(null);

    const timeColor = time < 60 ? 'red' : 'white';
    // when there is a change in session
    useEffect(() => {
        if (isSession){
            setTime(sessionLength * 60);
        }
    }, [sessionLength]);

    // session changed
    useEffect(() => {
        if (!isSession) {
            setTime(breakLength * 60);
        }
    }, [breakLength]);

    useEffect(() => {
        console.log("isTimeRunning changed to:", isTimeRunning);
        let interval;
        if (isTimeRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime === 0) {
                        if (audioRef.current)
                        audioRef.current.play();
                        
                        const nextSession = !isSession;
                        SetIsSession(nextSession);
                        console.log("Is it session" + isSession)
                        if (nextSession){
                            // const nextSessionLength = sessionLength;
                            // return nextSessionLength * 60
                            return sessionLength * 60
                        } else {
                            // const nextBreakLength = breakLength;
                            // return nextBreakLength * 60
                            return breakLength * 60
                        }
                    }
                    else {
                        return prevTime - 1;
                    }
                })
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isTimeRunning, isSession]);
    return (
        <div className='timer-parent'>
            <div className='timer'>
                <h3 style={{color: timeColor}} id="timer-label">{isSession ? "Session" : "Break"}</h3>
                <span id="time-left" className="ticks" style={{color: timeColor}}>
                    {format(time)}
                </span>
            </div>
            <div className='controls'>
                {isTimeRunning ? 
                (<button id="start_stop" onClick={stop}><FontAwesomeIcon icon={faStop} ></FontAwesomeIcon></button>)
                : (<button id="start_stop" onClick={play}><FontAwesomeIcon icon={faPlay} ></FontAwesomeIcon></button>)}
                <button id="reset" onClick={reset}><FontAwesomeIcon icon={faRotate} ></FontAwesomeIcon></button>
                <audio id="beep" ref={audioRef} src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav" />
            </div>
        </div>
    )
}