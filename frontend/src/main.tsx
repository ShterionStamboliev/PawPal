import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './Router.tsx';
import { BrowserRouter as Router } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>,
);
