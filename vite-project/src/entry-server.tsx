import React from "react"
import { Provider } from "react-redux"
import { renderToPipeableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'

import store from "./store"
import App from "./App"

export const render = (url: string, options?: object) => {
  return renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    options
  ) 
}
