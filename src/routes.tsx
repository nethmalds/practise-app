import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/practise-app/",
    element: <App />,
    children: [
      {
        path: "/practise-app/",
        element: <HomePage />,
      },
      {
        path: "/practise-app/movie/:id",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);
