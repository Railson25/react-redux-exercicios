import React, { Component } from 'react'
import { connect } from 'react-redux'


class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.handleChange} value={this.props.value} />
            </div>
        )
    } 
}

//mapeando o state para as props dos componentes 
//controlando o state atraves do props
//cria-se forada classe para que não haja dependencia do redux no componente
function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

export default connect(mapStateToProps) (Field)
//Padrao de Projeto conhecido decoration
//está passando um componente retornando o mesmo componente
//agora com o state mapeado pro valores do state global
// da aplicaçao