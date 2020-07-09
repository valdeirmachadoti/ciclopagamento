import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="/" icon="dashboard" label="Dashboard" />
        <MenuTree label="Cadastro" icon="edit">
            <MenuItem path="ciclopagamentos" label=" Ciclos de Pagamentos" icon="usd" />
        </MenuTree>
    </ul>
)