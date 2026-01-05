import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from './routes';
import GlobalStyle from './style/global';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle/>
    <Routes />
  </StrictMode>,
)
