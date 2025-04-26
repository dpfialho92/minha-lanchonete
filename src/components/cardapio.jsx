import React from "react";

const itens = [
    {nome: "Cachorro Quente", preco: 7.0, imagem: "/public/images/cachorroQuente.png"},
    {nome: "Bauru Simples", preco: 10.3, imagem: "/public/images/bauru.png"}, 
    {nome: "Bauru com ovo", preco: 15.0, imagem: "/public/images/bauruComOvo.png"},
    {nome: "Hamburguer", preco: 7.0, imagem: "/public/images/hamburguer.png"},
    {nome: "Cheeseburguer", preco: 10.0, imagem: "/public/images/cheeseburger.png"},
    {nome: "X-Tudo", preco: 13.0, imagem: "/public/images/xtudo.png"},
    {nome: "Porção de Fritas", preco: 10.0, imagem: "/public/images/batatafrita.png"},
    {nome: "Refrigerante", preco: 5.0, imagem: "/public/images/refrigerante.png"},
    
];

function Cardapio() {
    return (
        <div className="menu-container">
          {itens.map((item, index) => (
                <div key={index} className="menu-item">
                    <h3> {item.nome}  </h3>
                    <p>R$ {item.preco.toFixed(2)}  </p> 
                    <img src={item.imagem} className="menu-item-img"></img>
                    <input type="number" min="0" className="quantidade-input" placeholder="Quantidade"></input>
                </div>
            ))
            }
        </div>
    )
}

export default Cardapio;
