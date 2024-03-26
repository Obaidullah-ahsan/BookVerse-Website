import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import ListedBooks from './Components/Listed Books/ListedBooks';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Book from './Components/Book/Book';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path:"/blog/:id",
        element: <Book></Book>,
        loader: ()=>fetch('https://obaidullah-ahsan.github.io/b9a8-json-data/jsondata.json'),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
