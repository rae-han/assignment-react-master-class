import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from "../layouts/DefaultLayout.tsx";
import App from "../App.tsx";

import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";
import BookList from "../pages/BookList.tsx";
import BookDetail from "../components/BookDetail.tsx";
import ChapterList from "../components/ChapterList.tsx";
import CharacterList from "../components/CharacterList.tsx";

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
        path: "about",
        element: <About />
      },
      {
        path: "author/:authorId",
        element: <BookList />,
        children: [
          {
            path: ":bookId",
            element: <BookDetail />,
            children: [
              {
                path: "chapters",
                element: <ChapterList />
              },
              {
                path: "characters",
                element: <CharacterList />
              },
            ]
          }
        ]
      },
    ],
    // errorElement: <NotFound />,
  }
])

export default router;