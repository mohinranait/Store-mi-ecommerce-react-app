import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Routes.jsx'
import OnclickProvider from './frontend/Providers/OnclickProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <OnclickProvider>
      <RouterProvider router={myRoutes}></RouterProvider>
    </OnclickProvider>
  </React.StrictMode>,
)
