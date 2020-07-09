import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api';

export default class Dashboard2 extends Component {

    constructor(props){
        super(props)

        this.state = { totalCredito: 0, totalDebito: 0}
    }

    componentWillMount(){
        axios.get(`${BASE_URL}/ciclopagamentos/summary`)
            .then(resposta => this.setState(resposta.data))
    }

    render() {

        const { totalCredito, totalDebito } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 2.0" />
                <Row>
                    <Content>
                        <ValueBox
                            cols="12 4"
                            color="green"
                            icon="bank"
                            value={`R$ ${totalCredito}`} text="Total de Créditos" />
                        <ValueBox
                            cols="12 4"
                            color="red"
                            icon="credit-card"
                            value={`R$ ${totalDebito}`} text="Total de Débitos" />
                        <ValueBox
                            cols="12 4"
                            color="blue"
                            icon="money"
                            value={`R$ ${totalCredito - totalDebito}`} text="Valor Consolidado" />
                    </Content>
                </Row>
            </div>
        )
    }
}
