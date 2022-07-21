

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import CadastroContato from './modules/cadastroContato';

const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
const cadastroContato = new CadastroContato('.form-cadastro-contato')

login.init();
cadastro.init();
cadastroContato.init();

// import './assets/css/style.css';