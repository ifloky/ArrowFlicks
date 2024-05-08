import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import './index.css'
import '@mantine/core/styles.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <Router>
      <App />
    </Router>
  </MantineProvider>
)

