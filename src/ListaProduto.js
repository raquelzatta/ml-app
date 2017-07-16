import React, { Component } from 'react';
import $ from 'jquery';
import {ProdutoItem} from './ProdutoItem';


export class ListaProduto extends Component{
	render(){
		return (
		 <div className="conteudoProduto" >
		 <ProdutoItem/>
		 <ProdutoItem/>
		 <ProdutoItem/>
		 <ProdutoItem/>
                    
                </div>
		
		)
		
		}
	}// JavaScript Document