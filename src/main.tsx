import React from 'react'
import './index.css'
import Routes from './routes'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
if (!container) {
  throw new Error('Container not found')
}

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
