import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ListaProduto} from './ListaProduto';
import { render } from 'react-dom'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createHashHistory';
import {AppProduto} from './AppProduto';
import {Busca} from './Busca';

ReactDOM.render((<Router  >

<div>
	<Route exact   path="/" component={App}/>

	<Route path="/items/:id" component={AppProduto}/>
</div>

</Router>), document.getElementById('root'));
registerServiceWorker();
