'use strict';

/**
 * Element toggle function helper
 */
const elementToggleActive = function (elem) { elem.classList.toggle("active"); }


/**
 * Sidebar functionality for mobile
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar on mobile when button clicked
if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleActive(sidebar);
  });
}


/**
 * Projects Filtering functionality
 */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

// Toggle filter dropdown menu on mobile
if (select) {
  select.addEventListener("click", function () {
    elementToggleActive(this);
  });
}

// Function to filter projects by category
const filterFunc = function (selectedValue) {
  const normSelectedValue = selectedValue.toLowerCase().trim();

  for (let i = 0; i < filterItems.length; i++) {
    const itemCategory = filterItems[i].dataset.category.toLowerCase().trim();

    if (normSelectedValue === "all projects" || normSelectedValue === "all" || normSelectedValue === itemCategory) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Filter click handler for mobile dropdown items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let clickedValue = this.innerText;
    if (selectValue) selectValue.innerText = clickedValue;
    if (select) select.classList.remove("active");
    filterFunc(clickedValue);
  });
}

// Filter click handler for desktop tabs
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let clickedValue = this.innerText;
    if (selectValue) selectValue.innerText = clickedValue;
    
    if (lastClickedBtn) lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

    filterFunc(clickedValue);
  });
}


/**
 * Contact Form validation and interactive state handling
 */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable submit button only if form is fully valid
if (form && formInputs && formBtn) {
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // Handle form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    // Create a temporary success feedback element
    const btnText = formBtn.querySelector("span");
    const originalText = btnText.innerText;
    
    btnText.innerText = "Message Sent! ✓";
    formBtn.style.background = "linear-gradient(135deg, #10B981 0%, #059669 100%)"; // Emerald green success color
    formBtn.style.boxShadow = "0 0 15px rgba(16, 185, 129, 0.4)";
    
    // Reset form fields
    form.reset();
    formBtn.setAttribute("disabled", "");

    // Restore button after 3 seconds
    setTimeout(function() {
      btnText.innerText = originalText;
      formBtn.style.background = ""; // reverts to CSS file styles
      formBtn.style.boxShadow = "";
    }, 3000);
  });
}


/**
 * Page Tab Switching Navigation functionality
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.dataset.navLink.toLowerCase().trim();

    // Toggle active tab content
    for (let j = 0; j < pages.length; j++) {
      const pageName = pages[j].dataset.page.toLowerCase().trim();
      if (targetPage === pageName) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        // Scroll smoothly back to top of page content on tab switch
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
