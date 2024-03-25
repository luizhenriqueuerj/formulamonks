import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../pages/homePage"
import cruisePage from "../../pages/cruisePage"

Given('the user wants to search cruises to The Bahamas with duration between 6 and 9 days', function() {
    homePage.firstsActionsOnHomePage()
    homePage.clickOnDestination()
    homePage.selectBahamas()
    homePage.clickOnDuration6to9Days()
})

Given('the user wants to choose one sail and learn more about the trip', function() {
    homePage.firstsActionsOnHomePage()
})

When ('the user click on search cruises', function(){
    homePage.clickOnSearch()
})

Then ('a set of results will be displayed, default view will be a grid', function(){
    cruisePage.setOfResultsVisible()
})

Then ('the user will be able to sort by price, default value will be cheapest first', function(){
    cruisePage.verifySortByPrice()
})

Then ('the user will be able to filter by price, using the slider bar', function(){
    cruisePage.verifySliderPrice()
})

Then ('user will be able to read ABOUT each day', function(){
    cruisePage.verifyIfUserCanReadAboutEachDay()
})

Then ('A BOOK NOW button will be placed into the page', function(){
    cruisePage.verifyIfButtonBookNowIsShowing()
})

And ('click on view itinerary', function(){
    cruisePage.clickOnViewItinerary()
})