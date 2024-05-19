/// <reference types="cypress" />

import produtosPage from "../support/page_objects/produtos.page";
import checkoutPage from "../support/page_objects/checkout.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.fixture('produtos').then((data) => {
            for (var index in data) {
                let pedido = data[index]

                //acessa o produto 
                produtosPage.acessaProduto(pedido.nomeProduto)
                //seleciona o produto
                produtosPage.selecionaProduto(pedido.tamanho, pedido.cor, pedido.quantidade)
                //faz o checkout na página de produto
                produtosPage.fazCheckout()
                //preenche os dados de checkout
                cy.fixture('checkout').then(dados => {
                    checkoutPage.preencherCheckout(dados.nome, dados.sobrenome, dados.pais, dados.endereco, dados.cidade, dados.estado, dados.cep, dados.telefone, dados.email)
                })
                checkoutPage.finalizacaoDePedido(pedido.nomeProduto)
            }
        })
    });

})
