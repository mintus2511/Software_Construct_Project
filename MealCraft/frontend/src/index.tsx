import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/index.css'; // Đảm bảo file index.css nằm trong src/style/

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);