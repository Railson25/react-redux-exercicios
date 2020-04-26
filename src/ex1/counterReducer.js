const INITIAL_STATE = { step: 1, number: 0 }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'INC':
            return { ...state, number: state.number + state.step }
        case 'DEC':
            return { ...state, number: state.number - state.step }
        case 'STEP_CHANGED' : 
            //o sinal + antes da action é para tranformar em numero
            //e nao concantenar os 2 numeros   
            return { ...state, step: +action.payload}  
        default:
            return state      
    }
}