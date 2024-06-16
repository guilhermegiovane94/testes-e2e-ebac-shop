class ProdutosPage {

    acessaProduto(nomeProduto ){
        const UrlFormatada = nomeProduto.replace(/ /g, '-' )
        cy.visit(`produtos/${UrlFormatada}` )
    }

    selecionaProduto(tamanho,cor,quantidade){
        cy.get(`.button-variable-item-${tamanho}`).click()
        cy.get(`.button-variable-item-${cor}`).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
    }

    fazCheckout(parametros){
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('//div[@id="cart"]//a[contains(text(),"Checkout")]').click()
    }

}

export default new ProdutosPage()