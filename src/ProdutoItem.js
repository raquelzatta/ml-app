import React, { Component } from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom'

export class ProdutoItem extends Component{
	
	
	render(){
		return (
                    <Link style={{color:"#000"}} to={"/items/" + this.props.produto.id + "/"}>
					<div className="containerProduto">
                        
						<div className="imgProduto"><img src={this.props.produto.picture} width="150" height="150"/></div>

						<div className="valor"><p className="pValor">{this.props.produto.price.currency}{new Intl.NumberFormat('pt-BR').format(this.props.produto.price.amount)}<sup>{this.props.produto.price.decimals}</sup></p></div>
                        <div className="imgProduto"><img src={require('./img/circle.png')} width="15" height="15"/></div>
                        <div className="descricaoEsq"><p className="pDescricaoEsq">{this.props.produto.condition}</p></div>
                        <div className="descricaoDir"><p className="pDescricaoDir">{this.props.produto.title}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p></div>                      
                    </div>
					</Link>                   
		
		)
		
		}
	}// JavaScript Document// JavaScript Document