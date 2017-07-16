import React, { Component } from 'react';
import $ from 'jquery';

export class Produto extends Component{
	render(){
		return (
		 <div className="Produto">
    				 	<div className="imgProdutoItem"><img src="#" width="300" height="300"/></div>
        					<div className="containerTxtProduto">
        						<div className="primeiroDescritivo"><p className="pPrimeiroDescritivo">hhkljljlkmmn</p></div>
                                <div className="segundoDescritivo"><p className="pSegundoDescritivo">Deco Reserve Sombrero Oxford</p></div>
                                <div className="terceiroDescritivo"><p className="pTerceiroDescritivo">$1.980,00</p></div>
                                <a className="LinkBottonProdutoItem" href="#">
                                    <div className="bottonProdutoItem"><p className="pTerceiroDescritivo">Comprar</p></div>
                                </a>
        				</div>
                     	<div className="descritivoProduto">
                     		<div className="tituloDescritivoProduto"><p className="pTituloDescritivoProduto">mmsvmvlmslvmlçsmsvlsmlm</p></div>
                        	<div className="descritivoProdutoItem"><p className="pDescritivoProdutoItem">vdsvdvdsklvndsvnjv ds v d v vdd v dv dijihihçhblb jhoscnj m v.d mnv m nnvndlvnndlnvldnvn cdklvldnvkldnvklnadklvnklndklvnkla ncdnlvnlnv\lsdnvl  cdnlnansvldnlvn kdldklkldvklnvlkndkvn</p></div>
                     	</div> 
     	</div>
		
		)
		
		}
	}