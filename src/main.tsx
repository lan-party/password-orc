import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import { BasicProvider } from '@basictech/react';
import { schema } from '../basic.config';
import Vault from './pages/Vault.tsx';
import Settings from './pages/Settings.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasicProvider project_id={schema.project_id} schema={schema}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<div className='text-3xl font-bold m-20'>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </BasicProvider>
  </StrictMode>
)
