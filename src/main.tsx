import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@/app/App'
import '@/app/styles/index.css'

const root = document.getElementById('root')

if(root === null) {
  throw new Error('Not found root container')
}

const queryClient = new QueryClient()

createRoot(root).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
)
