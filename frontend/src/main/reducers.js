import { combineReducers } from 'redux'
import todoReducer from '../todo/todoReducer'

/* todo - chave do Reducer na Store (o state) */
const rootReducer = combineReducers({
    todo: todoReducer
})
export default rootReducer