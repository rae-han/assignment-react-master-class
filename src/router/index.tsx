import { createBrowserRouter } from 'react-router-dom'

import App from "../App.tsx";

import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "character/:id",
        element: <Home />,
      },
    ]
  }
])

export default router;