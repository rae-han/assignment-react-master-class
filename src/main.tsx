import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {RouterProvider} from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
