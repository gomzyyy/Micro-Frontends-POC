import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './routes/routes.jsx'
import {Provider} from "react-redux"
import Store from './store/store.jsx'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes}>
    <Provider store={Store}>
    <App />
    </Provider>
  </RouterProvider>,
)