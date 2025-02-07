import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  
  //Como el INDEX.html. llama al componente principal
  <StrictMode>  
    <GifExpertApp />
  </StrictMode>,
)
