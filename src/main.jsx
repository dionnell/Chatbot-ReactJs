import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import {ChatBotApp} from './ChatBotApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChatBotApp />
    </BrowserRouter>    
  </StrictMode>,
)
