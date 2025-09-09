import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App/App.jsx'
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/AuthContext.jsx"
import { SavedArticlesProvider } from "./contexts/SavedArticlesContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <SavedArticlesProvider>
            <App />
        </SavedArticlesProvider>
        </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
