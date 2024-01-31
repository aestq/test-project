import { createRoot } from 'react-dom/client'
import { App } from '@/app/App'
import '@/app/styles/index.css'

const root = document.getElementById('root')

if(root === null) {
  throw new Error('Not found root container')
}

createRoot(root).render(
  <App />
)
