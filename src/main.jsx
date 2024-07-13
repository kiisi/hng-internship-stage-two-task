import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { queryClientConfig } from './constants/query-client-config.js'

const queryClient = new QueryClient(queryClientConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </QueryClientProvider>
)
