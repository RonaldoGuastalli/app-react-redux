const INITIAL_STATE = { description: '', list: [] }


// alteração do estado
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}