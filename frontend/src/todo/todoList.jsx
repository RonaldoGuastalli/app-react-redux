import React from 'react';
import IconButton from '../template/iconButton'

import {connect} from 'react-redux'

const TodoList = props => {

    /* 
        render das linhas,
        markedAsDone arquivo css
    */    
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton
                        style='success'
                        icon='check'
                        hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)}>
                    </IconButton>
                    <IconButton
                        style='warning'
                        icon='undo'
                        hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}>
                    </IconButton>
                    <IconButton
                        style='danger'
                        icon='trash-o'
                        hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}>
                    </IconButton>
                </td>
            </tr>
        ))

    }


    //estrutura da tabela
    //tableActions do custom.css
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

/* state - vem do provider atravez do store
todo - objeto no reducers 
list - e um parametro do objeto todo
connect - conexão com a store*/
const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)
