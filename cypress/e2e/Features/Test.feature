Feature: Feature Name

    @TagName
    Scenario: User Story #01
        Given the user wants to search cruises to The Bahamas with duration between 6 and 9 days
        When the user click on search cruises
        Then a set of results will be displayed, default view will be a grid
        Then the user will be able to sort by price, default value will be cheapest first
        Then the user will be able to filter by price, using the slider bar

    Scenario: User Story #02
        Given the user wants to choose one sail and learn more about the trip
        When the user click on search cruises
        And click on view itinerary
        Then user will be able to read ABOUT each day
        Then A BOOK NOW button will be placed into the page 