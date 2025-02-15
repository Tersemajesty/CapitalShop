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
// import PrivateRoute from "./Route/PrivateRoute";

const App = () => {
 const router = createBrowserRouter([
    {
     path: "",
     element: <HomeRoute />,

       children: [
          
          {
            path: "/productpage",
            element:<ProductPage/>
          },

          {
            path: "/Home",
            element:<Home/>
          },

          {
            path: "/blog",
            element:<Blog/>
          },

          {
            path: "/pages",
            element:<Pages/>
          }, 

          {
            path: "/user",
            element:<User/>
          },

          {
            path:"/categories",
            element: <Categories />
          },

          {
            path:"/contact",
            element: <Contact />
          },

          
        {
          path: "/body",
          element: <Body />
       },

          {
            path:"/Cart",
            element: <Cart />
          }
       ]
    },

    {
        path: "/login",
        element: <Login />
    },

    {
        path: "/signup",
        element: <Signup />
    },
    // {
    //   path:"/private",
    //   element: <PrivateRoute/>,
    //   children:[
    //     {
    //       path: 'Dashboard',
    //       element: <Dashboard/>
    //     }
    //   ]
    // }
 ])
    
    return (
       <RouterProvider router={router}/>
    )
}

export default App