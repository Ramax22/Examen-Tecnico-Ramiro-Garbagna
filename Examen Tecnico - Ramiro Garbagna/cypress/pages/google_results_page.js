class googleResultPage{
    constructor(){
        this.firstLink = '.LC20lb > span';
    }

    clickFirstLink = () => {
        cy.get(this.firstLink).first().click();
    }

    getFirstLink = (text) => {
        return cy.get(this.firstLink).first();
    }
}
export default new googleResultPage();