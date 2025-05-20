Feature: Navigation Feature

  Scenario: Navigate to a URL
    Given I have a lunched browser
    When I enter the "https://www.wp.pl" url into navigation
    Then The page with ulr: "https://www.wp.pl" will be loaded