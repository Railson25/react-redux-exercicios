import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions'

const Counter = (props) => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged}
            value={props.counter.step} type='number' />
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>    
    </div>
)

//conectando counter ao componente 
const mapStateToProps =state => ({ counter: state.counter})
//ligando as ações ao dispatch do redux
const mapDispatchToProps = 
    dispatch => bindActionCreators({inc, dec, stepChanged }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (Counter)
 //lembrando o primeiro () é a chamada de uma função que retorna
 //uma função que está sendo chamada a partir do segundo parametro
 // no final o resultado das 2 chamadas que é exportado