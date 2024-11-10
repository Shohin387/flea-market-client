import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelNavigation from './components/panel-navigation'
import HomePage from './pages/home-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Store } from './store/cardsStore/cardsStore'
import { Provider } from 'react-redux'
import AddProductPage from './pages/add-product-page'
import ProductPage from './pages/product-page'

const router = createBrowserRouter([
  {path:"/", element:<HomePage />}, 
  {path:"/add-product", element:<AddProductPage />},
  {path: "product/:productId", element: <ProductPage />}
])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PanelNavigation >
      <Provider store={Store}>
        <RouterProvider router={router}/>
      </Provider>
    </PanelNavigation>
  </StrictMode>,
)

