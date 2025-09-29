// Study notes: Cache references to the hamburger button and nav for reuse.
const btn = document.getElementById("hamburger");
const nav = document.getElementById("nav");

// Study notes: Click handler toggles the nav's visibility by adding/removing the
// 'active' class (CSS controls display). Also updates the button label and ARIA state
// for accessibility (screen readers announce expanded/collapsed state).
// Study notes: Using an arrow function keeps 'this' lexical; not needed here,
// but it's a concise modern pattern.
btn.addEventListener("click", () => {
  // Toggle the active class so CSS decides layout; avoid inline style flicker.
  nav.classList.toggle("active");

  // Determine open state from the presence of the class to keep a single source of truth.
  const isOpen = nav.classList.contains("active");

  // Change button icon between hamburger and close (visual feedback for state).
  btn.textContent = isOpen ? "✕" : "☰";
  // Reflect state for assistive tech.
  btn.setAttribute("aria-expanded", String(isOpen));
});