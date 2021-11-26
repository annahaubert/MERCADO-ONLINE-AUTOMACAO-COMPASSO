import Base from './_base.page'

import { CHECKOUT } from './components/checkout.elements'

export default class checkout extends Base {
    static acessarSite() {
        cy.visit(CHECKOUT.URL)
    }

    static checkoutProduto() {
        super.clickOnElement(CHECKOUT.CONTINUAR)
        super.verifyIfElementExists(CHECKOUT.URL_FINAL)
        
    }
}