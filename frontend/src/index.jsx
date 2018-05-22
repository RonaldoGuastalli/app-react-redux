import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

/* 
instancia o app do comp. app.jsx.
o getElementById('app') manda renderizar no index.html na div
com id="app" <div id="app" class='container'></div>.
*/
ReactDOM.render(<App />, document.getElementById('app'))