console.log("Extension active: hiding gpt pop ups");

// Function that hides matching elements
function hideElements() {
  document.querySelectorAll(".rounded-3xl.items-start").forEach(el => {
    if (el.style.display !== "none") {
      el.style.display = "none";
    }
  });
}

// Run once immediately
hideElements();

// Watch for new DOM changes
const observer = new MutationObserver(hideElements);

// Start observing the whole page
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});