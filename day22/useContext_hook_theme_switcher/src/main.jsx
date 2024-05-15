import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ThemeSwitchProvider from './components/ThemeSwitchProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeSwitchProvider>
    <App />
  </ThemeSwitchProvider>,
)
