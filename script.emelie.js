const hamburger = document.querySelector("#hamburger"); //select my hamburger menu, finding first element with id hamburger
const nav = document.querySelector("#nav"); //this selects my nav element

/*creating an onclick event for my burger menu. () => this is an arrow function.*/
hamburger.onclick = () => {
    nav.classList.toggle("open"); /*this toggles the class "open" on and off when the hamburger is clicked*/ /*never use . or #*/

    if (nav.classList.contains("open")) {
        hamburger.textContent = "🍔"; //changes the hamburger to a burger when clicked
    } else {
        hamburger.textContent = "☰"; //changes the burger back to a hamburger when clicked again
    }
}

