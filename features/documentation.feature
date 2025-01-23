Feature: Open the Cucumber website and navigate to Documentation

  Scenario: Open the Cucumber website, tap on Documentation, and verify the title
    Given I open the Cucumber website
    Then tap on Documentation
    And verify the title "Introduction"
