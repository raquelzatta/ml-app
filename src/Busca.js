import React, { Component } from 'react';
import $ from 'jquery';

export class Busca extends Component{
	render(){
		return (
		  <div className="topoContainer">
                <div className="logo"><img src="img/download.png" width="25" height="20" /></div>
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} methodo="post">
				<div className="campoPesquisa"><input id="nome" type="text" name="nome" value="" size="100" class="formCampoPesquisa"/> </div>
				</form>
                <div className="buttonPesquisa"><img src="img/Search_icon.png" width="18" height="18" /> </div>
            </div>		
		)
		
		}
	}