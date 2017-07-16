import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import {Produto} from './Produto';
import {Busca} from './Busca';
import {ListaProduto} from './ListaProduto';

class App extends Component {
	
	
  render() {
    return (
    <div className="container">
    <div className="topo">
        <div className="topoCentraliza">
           <Busca/>
        </div>
    </div>
    <div className="conteudo">
        <div className="conteudoCentraliza">
            <div className="conteudoContainer">
                <div className="navegation">l~l~çl</div>
                <ListaProduto/>
				<Produto/>
            </div>            
        </div>
     </div>
    
</div>

    );
  }
}

export default App;
