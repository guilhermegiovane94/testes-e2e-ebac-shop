class CheckoutPage {

    preencherCheckout(nome,sobrenome,pais,endereco,cidade, estado,cep,telefone,email ){
        cy.get('#billing_first_name').clear().type(nome)
        cy.get('#billing_last_name').clear().type(sobrenome)
        //pais
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').clear().type(pais)
        cy.get('.select2-results').click()

        cy.get('#billing_address_1').clear().type(endereco)
        cy.get('#billing_city').clear().type(cidade)
        //estado
        cy.get('#select2-billing_state-container').click()
        cy.get('.select2-search__field').clear().type(estado)
        cy.get('.select2-results').click()

        cy.get('#billing_postcode').clear().type(cep)
        cy.get('#billing_phone').clear().type(telefone)
        cy.get('#billing_email').clear().type(email)
        cy.get('#terms').check()
        cy.get('#place_order').click()
    }

    finalizacaoDePedido(nomeProduto){
        cy.get('.woocommerce-table__product-name > a').should('contain',nomeProduto )
    }

}

export default new CheckoutPage()