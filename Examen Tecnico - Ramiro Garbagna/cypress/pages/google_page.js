class googleHomePage{
    constructor(){
        this.searchText = '.gLFyf';
        this.searchButton = '.FPdoLc > center > .gNO89b';
        this.firstResult = '.sbre > .jKWzZXdEJWi__suggestions-inner-container > .sbtc > .sbl1 > span';
    }

    typeInSearchText = (text) => {
        cy.get(this.searchText).type(text);
    }

    searchByPressingButton = () => {
        cy.get(this.searchButton).click({force: true});
    }

    searchByPressingEnter = () => {
        cy.get(this.searchText).type('{enter}');
    }

    clickFirstResult = () => {
        cy.get(this.firstResult).click();
    }
}
export default new googleHomePage();