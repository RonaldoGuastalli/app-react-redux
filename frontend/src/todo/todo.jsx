import React, { Component } from 'react'
import axios from 'axios'


import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

// url para acesso ao backend
const URL = 'http://localhost:3030/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    //refresh a lista
    // search para filrar uma pesquisa
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }

    /* handleChange recebe um evento (e), devolve o valor (value) description
    que nada mais é do que esta na entrada do input */
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    //remove e atualiza a lista de acordo com metodo refresh
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    //btn done em todoList
    //o refresh recebe o estado atual não apagando o campo digitado
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    //btn pending em todoList
    //o refresh recebe o estado atual não apagando o campo digitado
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
    }

    // pesquisa o refresh recebe o estado atual não apagando o campo digitado
    handleSearch() {
        this.refresh(this.state.description)
    }

    //uso no form
    handleClear() {
        this.refresh()
    }


    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch} 
                    handleClear={this.handleClear}/>
                <TodoList
                    // list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}