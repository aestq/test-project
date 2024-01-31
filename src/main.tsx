import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import '@/app/styles/index.css'

const root = document.getElementById('root')

if(root === null) {
  throw new Error('Not found root container')
}

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
