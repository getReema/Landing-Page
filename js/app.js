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
 // I'll get the sections using their IDs, add them in an array: 
 list_of_sections= [];
 list_of_sections.push(document.getElementById("section1"));
 list_of_sections.push(document.getElementById("section2"));
 list_of_sections.push(document.getElementById("section3"));
 list_of_sections.push(document.getElementById("section4"));
 // ~ New Sections can be added here ~
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// refrence: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// reference: https://www.youtube.com/watch?v=T8EYosX4NOo&app=desktop 

let options = {
    root: null, //Defaults to the browser viewport if not specified or if null
    rootMargin: '0px',
    threshold: 1.0
  }
  
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting)
            // Add class 'active' to section when near top of viewport
            entry.target.classList.toggle("your-active-class");
    });
  }, options);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
function navBuilder(){
    // first, let me get the nav:
    let navbar_list = document.querySelector("#navbar__list"); //  ul list

   
    
    // I'll loop over the sections:
    for(let i=0; i<list_of_sections.length; i++){
        // Create anchor and list item:
        anchor = document.createElement("a"); 
        let nav_element = document.createElement("li");

        // set href of anchor to the section based on its id: 
        //-- #source for this idea:https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/ -- 
         //-- #source for getAttribute https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_global_data
        anchor.href ="#"+list_of_sections[i].getAttribute("id");

        // get the text content based on the data-nav:
        nav_element.textContent= list_of_sections[i].getAttribute("data-nav");
        // append li to a 
        anchor.appendChild(nav_element);
        // append a to ul 
        navbar_list.appendChild(anchor);
    } // will use fragment if possabile.
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu & Scroll to section on link click
navBuilder();

// Set sections as active
list_of_sections.forEach(section=> {
  observer.observe(section);
})

