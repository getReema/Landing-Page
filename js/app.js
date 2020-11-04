/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/






/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function navBuilder(){
    // first, let me get the nav:
    let navbar_list = document.querySelector("#navbar__list"); //  ul list

    // I'll get the sections using their IDs, add them in an array: 
    list_of_sections= [];
    list_of_sections.push(document.getElementById("section1"));
    list_of_sections.push(document.getElementById("section2"));
    list_of_sections.push(document.getElementById("section3"));
    list_of_sections.push(document.getElementById("section4"));
    // ~ New Sections can be added here ~
    
    // I'll loop over the sections, get the text content based on the data-nav:
    for(let i=0; i<list_of_sections.length; i++){
        // Create anchor and list item:
        anchor = document.createElement("a"); 
        let nav_element = document.createElement("li");

        // set href of anchor to the section based on its id: 
        //-- #source for this idea:https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/ -- 
        anchor.href ="#"+list_of_sections[i].getAttribute("id");

        // get the text content based on the data-nav:
        nav_element.textContent= list_of_sections[i].getAttribute("data-nav");
        // append li to a 
        anchor.appendChild(nav_element);
        // append a to nav 
        navbar_list.appendChild(anchor);
    } // will use fragment if possabile.
}

// Add class 'active' to section when near top of viewport



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
navBuilder();
// Scroll to section on link click

// Set sections as active


