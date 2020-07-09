import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getList, showUpdate, showDelete } from '../cicloPagamento/cicloPagamentoActions'

class CicloPagamentoList extends Component {

    //Carrega
    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(ciclos => (
            <tr key={ciclos._id}>
                <td>{ciclos.nome}</td>
                <td>{ciclos.mes}</td>
                <td>{ciclos.ano}</td>
                <td>
                    <button className="btn btn-sm btn-warning" onClick={() => this.props.showUpdate(ciclos)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => this.props.showDelete(ciclos)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        console.log(this.props.list)
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.CicloPagamento.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)