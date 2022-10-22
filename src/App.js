import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateRouter from "./component/privateRouter/PrivateRouter";
import Main from "./layout/Main";
import Cart from "./screen/cartScreen/Cart";
import Catagory from "./screen/catagory/Catagory";
import Home from "./screen/homeScreen/Home";
import SingleNews from "./screen/news/SingleNews";
import Login from "./screen/userScreen/Login";
import Register from "./screen/userScreen/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/catagory/:id",
          element: <Catagory />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/catagory/${params.id}`),
        },
        {
          path: "/news/:id",
          element: (
            <PrivateRouter>
              <SingleNews />
            </PrivateRouter>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/news/${params.id}`),
        },
        {
          path: "user/login",
          element: <Login />,
        },
        {
          path: "user/register",
          element: <Register />,
        },
        {
          path: "/cart",
          element: (
            <PrivateRouter>
              <Cart></Cart>
            </PrivateRouter>
          ),
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
