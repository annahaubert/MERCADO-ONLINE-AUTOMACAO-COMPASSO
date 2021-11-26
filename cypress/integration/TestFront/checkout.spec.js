/// <reference types="cypress" />

import carrinho from '../../pages/carrinho.page'
import login from '../../pages/login.page'
import checkout from '../../pages/checkout.page'

describe('Testes para checkout', () => {
    it('Realiza checkout corretamente', () => {
        login.acessarSite()
        login.realizarLogin()
        carrinho.acessarSite()
        carrinho.adicionarProduto()
        checkout.checkoutProduto()
    })

})
