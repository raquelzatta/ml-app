import React, { Component } from 'react';
import $ from 'jquery';
import {ProdutoItem} from './ProdutoItem';


export class ListaProduto extends Component{
	
	constructor(){
		super();
		this.state = {lista : []};
	}
	
	componentDidMount(){
		$.ajax({
			url:"http://localhost:3001/produtos",
			dataType: 'json',
			success:function(resposta){
				this.setState({lista:resposta});
			}.bind(this)
		});
	}
			
	render(){
		return (
		 <div className="conteudoProduto" >
		 {
			 this.state.lista.map(function(produto){
				 return (
				 <ProdutoItem produto={produto}/>
				 );
			 })
		}
		 
		        </div>
		
		)
		
		}
	}// JavaScript Document