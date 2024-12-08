import React from 'react';
import Break from '../components/break';
import Session from '../components/session';
import Timer from '../components/timer';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import reducer from '../redux/reducer';
import { Provider } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown  } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faArrowDown, faArrowUp);
const store = configureStore({
    "reducer": reducer
});
const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <h1>25 + 5 Clock</h1>
            <section className="break-session">
                <Break />
                <Session />
            </section>
            <Timer />
        </React.StrictMode>
    </Provider>
);