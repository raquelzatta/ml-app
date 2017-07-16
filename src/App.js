import React, { Component } from 'react';
import logo from './logo.svg';
import './style.css';
import {Produto} from '.Produto';

class App extends Component {
	
	
  render() {
    return (
     <div className="container">
    <div className="topo">
        <div className="topoCentraliza">
            <div className="topoContainer">
                <div className="logo"><img src="img/download.png" width="25" height="20" /></div>
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} methodo="post">
				<div className="campoPesquisa"><input id="nome" type="text" name="nome" value="" size="100" class="formCampoPesquisa"/> </div>
				</form>
                <div className="buttonPesquisa"><img src="img/Search_icon.png" width="18" height="18" /> </div>
            </div>
        </div>
    </div>
    <div className="conteudo">
        <div className="conteudoCentraliza">
            <div className="conteudoContainer">
                <div className="navegation">l~l~çl</div>
                <div className="conteudoProduto" >
                    <div className="containerProduto">
                        <div className="imgProduto"><img src="#" width="150" height="150"/></div>
                        <div className="valor"><p className="pValor">21131350</p></div>
                        <div className="imgProduto"><img src="#" width="20" height="20"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">nnvsndvndvnnvkl </p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">nnvsndvndvnnvkl nvkdnvçfmadmcclcknklasdncklac klnakcnasklcSKLCKsnklsnklasncklanc naklnaknaknakclnlvn anvkalnvkandvndvnadlnvnadklnvn</p></div>                      
                    </div>
                     <div className="containerProduto">
                        <div className="imgProduto"><img src="#" width="150" height="150"/></div>
                        <div className="valor"><p className="pValor">21131350</p></div>
                        <div className="imgProduto"><img src="#" width="20" height="20"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">nnvsndvndvnnvkl </p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">nnvsndvndvnnvkl nvkdnvçfmadmcclcknklasdncklac klnakcnasklcSKLCKsnklsnklasncklanc naklnaknaknakclnlvn anvkalnvkandvndvnadlnvnadklnvn</p></div>                      
                    </div>
                    <div className="containerProduto">
                        <div className="imgProduto"><img src="#" width="150" height="150"/></div>
                        <div className="valor"><p className="pValor">21131350</p></div>
                        <div className="imgProduto"><img src="#" width="20" height="20"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">nnvsndvndvnnvkl </p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">nnvsndvndvnnvkl nvkdnvçfmadmcclcknklasdncklac klnakcnasklcSKLCKsnklsnklasncklanc naklnaknaknakclnlvn anvkalnvkandvndvnadlnvnadklnvn</p></div>                      
                    </div>
                    <div className="containerProdutoUltimoItem">
                        <div className="imgProduto"><img src="#" width="150" height="150"/></div>
                        <div className="valor"><p className="pValor">21131350</p></div>
                        <div className="imgProduto"><img src="#" width="20" height="20"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">nnvsndvndvnnvkl </p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">nnvsndvndvnnvkl nvkdnvçfmadmcclcknklasdncklac klnakcnasklcSKLCKsnklsnklasncklanc naklnaknaknakclnlvn anvkalnvkandvndvnadlnvnadklnvn</p></div>                      
                    </div>
					<Produto/>
                    	
    
                </div>
            </div>            
        </div>
     </div>
    
</div>

    );
  }
}

export default App;
