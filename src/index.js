import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './ex/field'

//reducers são funções puras sem efeito colateral 
const reducers = combineReducers({
    field: () => ({ value: 'Opa' })
})

ReactDOM.render(
    //chamndo o método createStore com os metodos reducers
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('root'))    