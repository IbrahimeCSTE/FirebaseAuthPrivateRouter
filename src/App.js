import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import PrivateRouter from "./component/privateRouter/PrivateRouter";
import Main from "./layout/Main";
import Cart from "./screen/cartScreen/Cart";
import Home from "./screen/homeScreen/Home";
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
          path: "/user/login",
          element: <Login />,
        },
        {
          path: "/user",
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
