import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./pages/PageToRead/PagesToRead.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import Home from "./pages/Home/Home.jsx";
import SingleBookDetails from "./pages/SingleBookDetails/SingleBookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single-bookdetails/:bookId",
        element: <SingleBookDetails />,
      },
      {
        path: "/listed-read-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-To-Read",
        element: <PagesToRead />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
