import "./App.css"
import Body from "./component/Body/Body"
import HomeRoute from "./Route/HomeRoute";
import Home from "./Pages/Home"
import { Outlet, RouterProvider, createBrowserRouter, useNavigation } from "react-router-dom"
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


const PageLoader = ()=> {
  const navigation = useNavigation()

  const isPageLoading = navigation.state === "loading"

  return isPageLoading ? <Loader /> : <Outlet />
}
const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setIsLoading(false), 1000)
  }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeRoute />,
      children: [
        { path: "productpage", element: <PageLoader />, children: [{ path: "", element: <ProductPage /> }] },
        { path: "home", element: <PageLoader />, children: [{ path: "", element: <Home /> }] },
        { path: "blog", element: <PageLoader />, children: [{ path: "", element: <Blog /> }] },
        { path: "pages", element: <PageLoader />, children: [{ path: "", element: <Pages /> }] },
        { path: "user", element: <PageLoader />, children: [{ path: "", element: <User /> }] },
        { path: "categories", element: <PageLoader />, children: [{ path: "", element: <Categories /> }] },
        { path: "contact", element: <PageLoader />, children: [{ path: "", element: <Contact /> }] },
        { path: "body", element: <PageLoader />, children: [{ path: "", element: <Body /> }] },
        { path: "cart", element: <PageLoader />, children: [{ path: "", element: <Cart /> }] },
      ],
    },
    { path: "/login", element: <PageLoader />, children: [{ path: "", element: <Login /> }] },
    { path: "/signup", element: <PageLoader />, children: [{ path: "", element: <Signup /> }] },
  ]);
    
    return isLoading ? <Loader /> : <RouterProvider router={router}/>
}

export default App