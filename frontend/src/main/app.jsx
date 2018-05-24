import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'

//meus componentes
    // import Todo from '../todo/todo' 
    // import About from '../about/about'
import Menu from '../template/menu'
import Routes from './routes';

/* 
este arquivo é usado em index.jsx, por exemplo,
ReactDOM.render(<App />, document.getElementById('app'))
*/
export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
)