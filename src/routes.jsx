import App from './components/App/App.jsx'
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import ShoppingPage from './components/ShoppingPage/ShoppingPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Cart from './components/Cart/Cart.jsx'

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "shop", element: <ShoppingPage /> },
      { path: "cart", element: <Cart /> }
    ]
  },
];

export default routes;
