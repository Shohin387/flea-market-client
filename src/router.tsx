import AddProductPage from './pages/add-product-page'
import ProductPage from './pages/product-page'
import LoginPage from './pages/login-page'
import AuthPage from './pages/auth'
import FoundDataPage from './pages/found-data-page'
import PanelNavigation from './components/panel-navigation'
import HomePage from './pages/home-page'
import { createBrowserRouter } from 'react-router'
import SalemanPage from './pages/saleman-page'

export const router = createBrowserRouter([
    {path: "/", element: <PanelNavigation />, children: [
      {path: "/", element: <HomePage/>},
      {path: "/add-product", element: <AddProductPage />},
      {path: "/product/:productId", element: <ProductPage />},
      {path: "/found-product", element: <FoundDataPage />},
      {path: '/user/:id', element: <SalemanPage />}
    ]},
    {path: '/login', element: <LoginPage/>},
    {path: '/auth', element:<AuthPage/>},
  ], {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
    }
  })
  