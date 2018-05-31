import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

/* 
instancia o app do comp. app.jsx.
o getElementById('app') manda renderizar no index.html na div
com id="app" <div id="app" class='container'></div>.
*/

/*tudo de dados esta no objeto store
provider tem este objeto unico para transmitir
*/
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)