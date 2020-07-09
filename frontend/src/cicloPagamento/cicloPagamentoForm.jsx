import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from './cicloPagamentoActions'
import ItemList from './itemtList'
import Summary from './summary'

class CicloPagamentoForm extends Component {

    /* calcularSummary(){

		  const sum = (total, valorAtual) => total + valorAtual
		  
        return {
            somaCreditos: this.props.creditos.map(credito => +credito.valor || 0).reduce(sum),
            somaDebitos: this.props.debitos.map(debito => +debito.valor || 0).reduce(sum),
        }

    } */

    render() {

        const { handleSubmit, readOnly, creditos, debitos } = this.props
        //const { somaCreditos, somaDebitos } = this.calcularSummary()

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome"
                    />
                    <Field name='mes' component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Mês" cols="12 4" placeholder="Informe o mês"
                    />
                    <Field name='ano' component={LabelAndInput} type="number" readOnly={readOnly}
                        label="Ano" cols="12 4" placeholder="Informe o ano"
                    />
                    <Summary creditos={/* somaCreditos */100} debitos={/* somaDebitos */100}/>
                   
                   <ItemList cols="12 6" list={creditos} readOnly={readOnly}
                    field="creditos" legend="Créditos"/>

                   <ItemList cols="12 6" list={debitos} readOnly={readOnly} showStatus={true}
                    field="debitos" legend="Débitos"/>

                </div>

                <div className='box-footer'>
                    <button type='submit' className={`btn btn-sm btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button type='button' className='btn btn-sm btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

CicloPagamentoForm = reduxForm({ form: 'cicloPagamentoForm', destroyOnUnmount: false })(CicloPagamentoForm)
const selector = formValueSelector('cicloPagamentoForm')

const mapStateToProps = state => ({
    creditos: selector(state, 'creditos'),
    debitos: selector(state, 'debitos')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoForm)
