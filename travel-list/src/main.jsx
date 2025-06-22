import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Flashcards from "./Flashcards"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Flashcards/> */}
  </StrictMode>,
)
