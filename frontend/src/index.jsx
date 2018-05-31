//react
import React from 'react'
import ReactDOM from 'react-dom'

//redux e redux-react
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

//middleware
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

//meus componentes
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
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app')
)