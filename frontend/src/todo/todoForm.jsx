import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription } from './todoActions'

/* 
    onChande -> handleChange -> todo -> handleChange(e) -> 
    altera description = e.target.value -> description={this.state.description}
*/

const TodoForm = props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }


    return (
        <div role='form' className='todoForm'>

            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}>
                </input>
            </Grid>

            <Grid cols='12 3 2'>
                <IconButton
                    style='primary'
                    icon='plus'
                    onClick={props.handleAdd}>
                </IconButton>
                <IconButton
                    style='info'
                    icon='search'
                    onClick={props.handleSearch}>
                </IconButton>
                <IconButton
                    style='default'
                    icon='close'
                    onClick={props.handleClear}>
                </IconButton>
            </Grid>

        </div>
    )
}

/* 
actionCreators - An action creator, or an object whose values are action creators - changeDescription em todoActions.js.
dispatch function available on the Store instance - todo em reducers.js.
*/
const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)


