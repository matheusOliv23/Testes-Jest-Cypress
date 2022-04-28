Feature: Clients
  Scenario: "List of clients"
    Given I'm have '10' clients in my database
    When I access the name webpage
    Then see the list of '10' itens