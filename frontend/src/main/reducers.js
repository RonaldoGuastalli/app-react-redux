import { combineReducers } from 'redux'

/* todo - chave do Reducer na Store (o state) */
const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },
        {
            _id: 2,
            description: 'Reunião com a equipe às 10:00',
            done: false
        },
        {
            _id: 3,
            description: 'Consulta médicas na terça depois do almoço',
            done: false
        }]
    })
})
export default rootReducer