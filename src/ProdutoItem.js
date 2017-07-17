import React, { Component } from 'react';
import $ from 'jquery';

export class ProdutoItem extends Component{
	
	
	render(){
		return (
                    <a class="linkItemProduto" href="#">
					<div className="containerProduto">
                        <div className="imgProduto"><img src="#" width="150" height="150"/></div>
                        <div className="valor"><p className="pValor">{this.props.produto.item.price.currency}</p></div>
                        <div className="imgProduto"><img src="#" width="20" height="20"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">{this.props.produto.item.title}nnn,n,n</p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">{this.props.produto.author.name}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p></div>                      
                    </div>
					</a>                   
		
		)
		
		}
	}// JavaScript Document// JavaScript Document