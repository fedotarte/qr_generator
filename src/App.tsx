import React, { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Form from './Form';
import Header from './Header';

function App() {
    return (
        <Router>
            <Header />
            <Form />
        </Router>
    );
}

export default App;
