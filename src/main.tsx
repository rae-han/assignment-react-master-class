import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {RecoilRoot} from "recoil";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      {/*<App />*/}
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
