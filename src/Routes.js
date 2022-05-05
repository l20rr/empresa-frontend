import React from 'react';

import {  BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


// IMPORTS ADMIN
import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutoEditar from './pages/admin/produtos/Produtos.editar';
import ProdutoCadastrar from './pages/admin/produtos/Produtos.cadastrar'

import Usuarios from './pages/admin/usuarios/index';
import UsuarioEditar from './pages/admin/usuarios/usuario.editar';
import UsuarioCadastrar from './pages/admin/usuarios/Usuario.cadastrar'

// IMPORTS CLIENT
import Home from './pages/client/index';
import ProdutoDetails from './pages/admin/produtos/produtos.details';
import Login from './pages/admin/login';
import cadastrar from './pages/admin/login/cadastar'
import PrivateRoute from './services/wAuth';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                {/* Rota Cliente */}
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/produtos/:idProduto" exact component={ProdutoDetails} />

                {/* Rota Admin */}
                <Route path="/admin/login" exact component={Login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />
                
                <PrivateRoute path="/admin/produtos" exact component={Produtos} />
                <PrivateRoute path="/admin/produtos/cadastrar" exact component={ProdutoCadastrar} />
                <PrivateRoute path="/admin/produtos/editar/:idProduto" exact component={ProdutoEditar} />

                <PrivateRoute path="/admin/usuarios" exact component={Usuarios} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />
                <Route path="/admin/cadastrar" exact component={cadastrar} />
             
            </Switch>
        </BrowserRouter>
    )
}