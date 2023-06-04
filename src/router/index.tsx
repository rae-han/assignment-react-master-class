import { createBrowserRouter } from 'react-router-dom'

import App from "../App.tsx";

import Home from "../pages/Home";
import Character from "../pages/Character";

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
        path: "character/:characterId",
        element: <Character />,
      },
    ]
  }
])

export default router;