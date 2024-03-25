class homePage{
        firstsActionsOnHomePage(){
            cy.visit('https://www.carnival.com/')
            cy.get('.vifp-no-thankyou').click()
            cy.get('.plain-button').click()
        }
        clickOnDestination(){
            cy.get('[id=cdc-destinations]').click()
        }
        selectBahamas(){
            cy.contains('.cdc-filter-button', 'Bahamas').click()
        }
        clickOnDuration6to9Days(){
            cy.get('[id=cdc-durations]').click()
            cy.contains('.cdc-filter-button', '6 - 9 Days', { timeout: 10000 }).click()
        }
        clickOnSearch(){
            cy.get('.cdc-filters-tab--searchcta').click()
        }    
    }
    
    module.exports = new homePage();