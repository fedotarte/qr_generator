import React, { useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Link, useLocation } from 'react-router-dom';
import Form from './Form';

function App() {
    return (
        <Router>
            <Form />
        </Router>
    );
}

export default App;
