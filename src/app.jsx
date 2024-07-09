import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom"
import PageNotFound from "./pages/page-not-found"
import Home from "./pages/home";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

const Root = () => {

  return (
    <div>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/checkout',
        element: <Checkout />
      },
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}