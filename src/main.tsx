import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelNavigation from './components/panel-navigation'
import HomePage from './pages/home-page'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { cardStore } from './store/cardsStore/cardsStore'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {path:"/", element:<HomePage />}, 

])



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PanelNavigation >
      <Provider store={cardStore}>
      <RouterProvider router={router}/>
      </Provider>
    </PanelNavigation>
  </StrictMode>,
)

