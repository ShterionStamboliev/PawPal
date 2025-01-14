import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import App from './Router.tsx';
import { BrowserRouter as Router } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <Router>
                    <App />
                </Router>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>,
);
