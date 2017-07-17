import React, { Component } from 'react';
import $ from 'jquery';

export class Produto extends Component{
	
	constructor(){
		super();
		this.state = {produto : {}};
	}
	
	componentWillMount(){
		console.log(this.props.match)
		$.ajax({
			url:"http://localhost:3001/items/X1",
			dataType: 'json',
			async:false,
			success:function(produto){
				this.setState({produto:produto.item});
			}.bind(this)
		});
	}
	
	render(){
		return (
		
		 <div className="produto">
    				 	<div className="imgProdutoItem"><img src={this.state.produto.picture} width="300" height="300"/></div>
        					<div className="containerTxtProduto">
        						<div className="primeiroDescritivo"><p className="pPrimeiroDescritivo">{this.state.produto.condition}</p></div>
                                <div className="segundoDescritivo"><p className="pSegundoDescritivo">{this.state.produto.title}</p></div>
                                <div className="terceiroDescritivo"><p className="pTerceiroDescritivo">{this.state.produto.price.currency}{new Intl.NumberFormat('pt-BR').format(this.state.produto.price.amount)}<sup>{this.state.produto.price.decimals}</sup></p></div>
                                <a className="LinkBottonProdutoItem" href="#">
                                    <div className="bottonProdutoItem"><p className="pTerceiroDescritivo">Comprar</p></div>
                                </a>
        				</div>
                     	<div className="descritivoProduto">
                     		<div className="tituloDescritivoProduto"><p className="pTituloDescritivoProduto">{this.state.produto.title}</p></div>
                        	<div className="descritivoProdutoItem"><p className="pDescritivoProdutoItem">{this.state.produto.description}</p></div>
                     	</div> 
     	</div>
		
		)
		
		}
	}