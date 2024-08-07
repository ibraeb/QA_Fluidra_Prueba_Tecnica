@e2e
Feature: Google Search Automation

  Scenario: Search for automation and verify the details on Wikipedia
    Given The user opens Google search page
    When The user search for "automation" search term
    Then The user clicks on the Wikipedia link
    And The user verifies that the year of the first automated process is "1785"