import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from './cicloPagamentoList'
import Formulario from './cicloPagamentoForm'
import { init, create, update, remove } from './cicloPagamentoActions'

class CicloPagamento extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <List />
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Formulario onSubmit={this.props.create}
                                    submitLabel="Incluir" submitClass="primary"
                                    />
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Formulario onSubmit={this.props.update}
                                    submitLabel="Alterar" submitClass="info"
                                />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Formulario onSubmit={this.props.remove} readOnly={true}
                                    submitLabel="Excluir" submitClass="danger"
                                />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ init, create, update, remove }, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamento)