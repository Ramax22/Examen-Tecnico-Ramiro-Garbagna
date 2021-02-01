import { forEach } from "async";
import { expect } from "chai";

describe('Test - Backend', function(){
    //beforeEach(()=>cy.request('https://api.openbrewerydb.org/breweries/autocomplete?query=lagunitas').as('breweries'));
    it('Paso 1 ', function(){
        //cy.request('/breweries');
        // Paso 1 - Obtener la lista de cervecerías que contengan el texto "lagunitas"
        cy.api(
            { 
                url: '/breweries/autocomplete?query=lagunitas'
            }).then((res) => {
                expect(res.status).to.equal(200);

                // Paso 2 - Tomar aquellos que contengan en "name" el valor "Lagunitas Brewing Co"
                var newArray = res.body.filter(getDesiredItems);

                // Paso 3 - Obtener la que tenga como state "California"
                for (var i = 0; i < newArray.length; i++){
                    cy.api(
                        {
                            url: '/breweries/' + newArray[i].id
                        }).then((result) => {
                            if (result.body.state == "California"){
                                // Paso 4 - Hago los asserts correspondientes
                                expect(result.body.id).to.equal(761);
                                expect(result.body.name).to.equal("Lagunitas Brewing Co");
                                expect(result.body.street).to.equal("1280 N McDowell Blvd");
                                expect(result.body.phone).to.equal("7077694495");
                                cy.end();
                            }
                        })
                }
        });
    });
})

function getDesiredItems(item){
    return item.name == "Lagunitas Brewing Co";
}