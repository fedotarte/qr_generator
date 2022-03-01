import React, { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import AppContainer from './AppContainer';
import Form from './Form';
import Header from './Header';

function App() {
    return (
        <Router>
            <AppContainer leftChild={<Header />} rightChild={<Form />} />
        </Router>
    );
}

export default App;
