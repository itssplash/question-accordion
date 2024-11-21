// Select all accordion buttons
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  // Click event to toggle accordion
  accordion.addEventListener("click", function () {
    // Toggle 'is-open' class
    this.classList.toggle("is-open");

    // Update aria-expanded attribute
    const isExpanded = this.classList.contains("is-open");
    this.setAttribute("aria-expanded", isExpanded);

    // Toggle content visibility
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // Close the accordion
      content.style.maxHeight = null;
    } else {
      // Open the accordion
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });

  // Keydown event for keyboard interaction
  accordion.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.click(); // Simulate click event
    }
  });
});
