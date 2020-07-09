const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {

    switch(action.type){
        case 'LISTA_DE_PAGAMENTOS': 
            return {...state, list: action.payload.data }
        default: 
        return state
    }
}