import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ResourceRentalRouter from './components/nav/ResourceRentalRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
    <ResourceRentalRouter />
)
