Feature: The home page shop button
  As a customer
  I want to access the product page

  Background:
    Given I open the url "/"

  Scenario: Test the initial page title
    Then I expect that the title is "Robot Parts Emporium"

  Scenario: Test the button functionality
    When I click on the element ".shop-callout a"
    Then I expect that the title is "Totally Not Evil Sentient Robot - Robot Parts Emporium"
    And I expect the url to contain "product-page.html"