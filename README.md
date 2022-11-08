![](./assets/wireframe.png)

# Plan

## HTML

-   section for elf stats
    -   div for message with # of trolls defeated
    -   div for elf HP
    -   p with elf emoji alive/dead
-   section for troll stats
    -   input with label for new troll
    -   add troll button
    -   ul with li items of trolls
        -   divs in li items for name, alive/dead emoji, and hp
    -   clear dead trolls button

## JS

### State

    - array of troll objects (name, id, hp)
    - # of defeated trolls
    - elf HP
    - currentID (to create new trolls with ID's)

### Events

    - troll is clickable
        - event listener('click') that...
            - possibly decrements troll  hp
            - possibly decrements elf hp
            - possibly increments defeated trolls
            - updates the DOM with the new troll/elf hp and defeated state
    - new troll form
        - user inputs name and submits form
        - creates a new troll object
        - add's new troll object to trolls array
        - "update list display"
            - clears out the list DOM
            - for loop thru the trolls
            - render new troll element for each item
            - append each el to the container el

### Functions

-   displayTrolls() clears out the list and renders the troll element for each item
-   renderTroll(troll) creates a check element for the spec troll object
-   trollClickHandle() takes care of the game logic which trolls are clicked
