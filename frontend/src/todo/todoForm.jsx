import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

/* 
    onChande -> handleChange -> todo -> handleChange(e) -> 
    altera description = e.target.value -> description={this.state.description}
*/

/* transformar para classe para usar componentWillMount() sempre chamado para componente exibido */

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render() {
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={this.props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={this.props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={this.props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }

}

/* 
actionCreators - An action creator, or an object whose values are action creators - changeDescription em todoActions.js.
dispatch function available on the Store instance - todo em reducers.js.
*/
const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)


