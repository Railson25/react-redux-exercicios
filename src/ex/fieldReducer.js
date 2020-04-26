const INITIAL_STATE = { value: 'Opa' }

//O state abaixo nao é o global da aplicação , é o state atual
// do campo no state => Field
export default function(state = INITIAL_STATE, action ) {
    switch(action.type) {
        case 'VALUE_CHANGED':
            //Criando novo Objeto sem alterar o state atual do campo Field
            return { value: action.payload }
        default: 
            return state    
    }
}  