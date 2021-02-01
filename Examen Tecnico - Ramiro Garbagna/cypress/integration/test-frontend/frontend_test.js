import { assert } from 'chai';
import googleHomePage from '../../pages/google_page';
import googleResultPage from '../../pages/google_results_page';

describe('Google Homepage Search', function(){
    beforeEach(function(){
        cy.visit('www.google.com.ar');
    });
    it('Test #1 - Realizar búsqueda con resultado éxitoso - Sin texto predictivo', function(){
        googleHomePage.typeInSearchText("The name of the wind");
        googleHomePage.searchByPressingButton();
        googleResultPage.clickFirstLink()
    });
    it('Test #2 - Realizar búsqueda con resultado éxitoso - Con texto predictivo', function(){
        googleHomePage.typeInSearchText("The name of the w");
        cy.wait(100);
        googleHomePage.clickFirstResult();
        googleResultPage.clickFirstLink()
    });
    it('Test #3 - Realizar una búsqueda con resultado no exitoso', function(){
        googleHomePage.typeInSearchText("The name of the Rose");
        googleHomePage.searchByPressingButton();
        googleResultPage.getFirstLink().should('not.equal', 'El nombre del viento');
    })
    it('Test #4 - Realizar una búsqueda presionando Enter', function(){
        googleHomePage.typeInSearchText("The name of the wind");
        googleHomePage.searchByPressingEnter();
        googleResultPage.clickFirstLink()
    })
})