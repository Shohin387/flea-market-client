import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { Store } from './store/Store'
import { Provider } from 'react-redux'
import {router} from './router'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)

