import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Home from './pages/Home/Home';
import AddProduct from './pages/AddProduct/AddProduct';
import Error from './pages/Error/Error';
import Brands from './pages/Brands/Brands';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/Cart/Cart';
import Login from './pages/Register/Login';
import Register from './pages/Register/Register';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import UpdateProduct from './pages/UpdateProduct/UpdateProduct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error> ,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: "/update/:brand_name/:productId",
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.productId}`)
      },
      {
        path: "/brand/:brand_name",
        element: <Brands></Brands>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}`)
      },
      {
        path: "/product/:brand_name/:productId",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.brand_name}/${params.productId}`)
      },
      {
        path: "/cart/:userId",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/cart/${params.userId}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
