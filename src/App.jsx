import "./App.css"
import Body from "./component/Body/Body"
import HomeRoute from "./Route/HomeRoute";
import Home from "./Pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Cart from "./Pages/Cart"
import Blog from "./Pages/Blog"
import User from "./Pages/User"
import Pages from "./Pages/Pages"
import Categories from "./Pages/Categories"
import Contact from "./Pages/Contact";
import { useState, useEffect } from "react";
import Loader from "./component/Loader/loading";
// import PrivateRoute from "./Route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,

    children: [
      { path: "home", element: <Home /> },
      { path: "productpage", element: <ProductPage /> },
      { path: "blog", element: <Blog /> },
      { path: "pages", element: <Pages /> },
      { path: "user", element: <User /> },
      { path: "categories", element: <Categories /> },
      { path: "contact", element: <Contact /> },
      { path: "body", element: <Body /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
]);

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); 
  }, []);
    
    return isLoading ? <Loader /> : <RouterProvider router={router}/>
}

export default App