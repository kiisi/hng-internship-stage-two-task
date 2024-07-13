import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { queryClientConfig } from './constants/query-client-config.js'
import CartProvider from './contexts/cart.jsx'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient(queryClientConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <HelmetProvider>
            <CartProvider>
                <App />
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    toastOptions={{
                        duration: 2000,
                    }}
                />
            </CartProvider>
        </HelmetProvider>
    </QueryClientProvider>
)
