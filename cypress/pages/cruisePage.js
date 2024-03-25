
class cruisePage{
    setOfResultsVisible(){
        cy.get('[data-testid=cruisetotalResults]', { timeout: 10000 }).should('be.visible')
    }
    verifySortByPrice(){
        cy.get('[data-testid="sortBySelect"]', { timeout: 10000 }).should('be.visible')
    }
    verifySliderPrice(){
        cy.get('[data-testid="pricingFilterButton"]').click()
        cy.get('[data-testid="pricingSlider"]', { timeout: 10000 }).should('be.visible')
    }
    verifyIfUserCanReadAboutEachDay(){
        cy.get('[data-testid="dayTile0"]', { timeout: 10000 }).should('be.visible')
    }
    verifyIfButtonBookNowIsShowing(){
        cy.get('[data-testid="startBooking"]').contains('BOOK NOW')
    }
    clickOnViewItinerary(){
        cy.get('[data-testid=cg-itinerary_CT1_SYD_LM_2_Wed]').click()
    }
}

module.exports = new cruisePage();
require('cypress-xpath');

