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


/**
 * Comprehensive Project Qualification Details Dataset
 */
const PROJECTS_DATA = {
  "interviewforge": {
    title: "InterviewForge",
    category: "Machine Learning & AI",
    status: "Active",
    role: "AI & Full Stack Developer • 2025",
    overview: "InterviewForge is an AI-powered interview preparation platform designed to help students and job seekers practice for technical and behavioral interviews. It generates personalized interview questions based on job roles, simulates realistic interview sessions, and provides structured AI-driven feedback and answer readiness scoring.",
    qualifications: [
      "Engineered role-specific AI prompt pipelines to dynamically generate tailored technical, behavioral, and algorithmic interview questions.",
      "Built an automated evaluation engine analyzing user answers for clarity, technical depth, and actionable improvement recommendations.",
      "Designed a responsive and accessible user interface for seamless session simulation and history tracking.",
      "Integrated secure API communication flows with low-latency response streaming for real-time practice."
    ],
    techStack: ["Python", "AI/LLM APIs", "Web Technologies", "JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "research-agent": {
    title: "Research Agent",
    category: "Machine Learning & AI",
    status: "Completed",
    role: "AI & Python Developer • 2025",
    overview: "An AI-powered autonomous research assistant designed to help users explore complex subjects, discover relevant information, and synthesize comprehensive, structured research responses through conversational AI workflows.",
    qualifications: [
      "Integrated AI/LLM APIs with information retrieval mechanisms to automate knowledge synthesis and topic exploration.",
      "Architected structured distillation workflows that transform multi-source findings into concise, readable briefs.",
      "Implemented a dynamic conversational interface for interactive multi-turn exploration and query refinement.",
      "Built error-handling routines for reliable query resolution and high response quality."
    ],
    techStack: ["Python", "AI/LLM APIs", "Web Technologies", "NLP", "JSON/REST"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "amazon-clone": {
    title: "Amazon Clone",
    category: "Web Development",
    status: "Completed",
    role: "Frontend Developer • 2025",
    overview: "A responsive e-commerce web application inspired by Amazon, built to practice modern web development and user interface design principles. The project includes rich product listings, multi-level navigation, shopping layouts, and seamless responsiveness across devices.",
    qualifications: [
      "Constructed a high-fidelity Amazon-inspired layout featuring category banners, product grids, and header search navigation.",
      "Implemented client-side interactivity including cart state updates, dynamic pricing calculations, and responsive menus.",
      "Optimized mobile-first CSS architecture with fluid typography, responsive flexbox, and CSS grid layouts.",
      "Ensured clean semantic HTML5 markup and cross-browser consistency."
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "nosy-neighbor": {
    title: "Nosy Neighbor (Smart Security)",
    category: "Web Development",
    status: "Completed",
    role: "Lead Developer • 2025",
    overview: "A smart home security and surveillance monitor designed to detect anomalies, capture camera feeds in real-time, stream video with low latency, and trigger instant safety notifications.",
    qualifications: [
      "Implemented computer vision motion detection algorithms to identify visual anomalies in live feeds.",
      "Configured video streaming pipeline with low latency for continuous surveillance.",
      "Integrated automated security alert dispatching and snapshot logging upon trigger events.",
      "Engineered a responsive dashboard interface for monitoring feeds across viewports."
    ],
    techStack: ["Python", "Flask", "OpenCV", "WebSockets", "HTML5", "CSS3"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "jarvis": {
    title: "Jarvis (Virtual Assistant)",
    category: "Machine Learning & AI",
    status: "Completed",
    role: "AI & Python Developer • 2024 - 2025",
    overview: "A Python voice assistant that automates local operations, runs web searches, and processes desktop instructions hands-free through speech recognition and voice synthesis.",
    qualifications: [
      "Built natural speech-to-text processing for accurate command interpretation and speech feedback.",
      "Automated system operations including launching applications, executing file commands, and opening web URLs.",
      "Integrated dynamic query routing for quick Wikipedia, web search, and calculation answers.",
      "Created modular command handler structure to easily register new voice skills."
    ],
    techStack: ["Python", "SpeechRecognition", "Pyttsx3", "OS Automation"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "ai-chatbot": {
    title: "AI Chatbot",
    category: "Machine Learning & AI",
    status: "Completed",
    role: "ML Developer • 2025",
    overview: "An intelligent conversational chatbot trained to comprehend user intentions, classify input queries, and generate dynamic responses in real-time.",
    qualifications: [
      "Constructed NLP text processing pipeline for intent recognition and query classification.",
      "Implemented lightweight response dispatching with fast inference time.",
      "Built fallback handlers to gracefully handle ambiguous or unrecognized inputs.",
      "Embedded into an interactive web chat widget for user engagement."
    ],
    techStack: ["Python", "NLP", "Scikit-Learn", "Flask", "JavaScript"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "iot-water-sensor": {
    title: "IoT Based Water Sensor",
    category: "IoT / Hardware",
    status: "Completed",
    role: "IoT & Hardware Developer • 2024",
    overview: "An automated IoT device measuring water reservoir levels and transmitting live telemetry metrics to prevent overflow and conserve resources.",
    qualifications: [
      "Calibrated ultrasonic distance sensors for accurate water volume percentage calculations.",
      "Implemented threshold-triggered alerts and safety alarms when reservoir levels cross safe limits.",
      "Streamed live sensor metrics to cloud IoT endpoints for remote monitoring.",
      "Engineered reliable microcontroller firmware for continuous hardware uptime."
    ],
    techStack: ["C / C++", "Arduino / ESP32", "Ultrasonic Sensors", "IoT Cloud"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  },

  "snake-water-gun": {
    title: "Snake Water Gun Game",
    category: "Python Apps & Games",
    status: "Completed",
    role: "Python Developer • 2024",
    overview: "A simple interactive game based on the classic Snake-Water-Gun concept. The project implements core game logic, user input handling, random computer choices, and result calculations with engaging user feedback.",
    qualifications: [
      "Engineered clean conditional game logic and random selection algorithms in Python.",
      "Implemented user input validation, round score tracking, and end-of-game summary statistics.",
      "Structured reusable function modules for game loops, win/loss evaluation, and replay choices.",
      "Designed clear and interactive feedback prompts for enjoyable gameplay sessions."
    ],
    techStack: ["Python", "Game Logic", "CLI / GUI", "Random Algorithms"],
    githubUrl: "https://github.com/akhileshyadav117",
    liveUrl: "https://github.com/akhileshyadav117"
  }
};


/**
 * Project Qualification Modal Interactive Controller
 */
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalCategory = document.querySelector("[data-modal-category]");
const modalStatus = document.querySelector("[data-modal-status]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalRole = document.querySelector("[data-modal-role]");
const modalBanner = document.querySelector("[data-modal-banner]");
const modalOverview = document.querySelector("[data-modal-overview]");
const modalQualifications = document.querySelector("[data-modal-qualifications]");
const modalTech = document.querySelector("[data-modal-tech]");
const modalLive = document.querySelector("[data-modal-live]");
const modalGithub = document.querySelector("[data-modal-github]");

const openProjectModal = function (projectId) {
  const project = PROJECTS_DATA[projectId];
  if (!project || !modalContainer) return;

  // Set Modal Details
  if (modalTitle) modalTitle.innerText = project.title;
  if (modalCategory) modalCategory.innerText = project.category;
  
  if (modalStatus) {
    const isCompleted = project.status.toLowerCase() === "completed";
    const isLive = project.status.toLowerCase() === "live";
    const iconName = isCompleted ? "checkmark-circle" : (isLive ? "globe-outline" : "sync-outline");
    modalStatus.innerHTML = `<ion-icon name="${iconName}"></ion-icon> <span>${project.status}</span>`;
  }

  if (modalRole) modalRole.innerText = project.role;
  if (modalOverview) modalOverview.innerText = project.overview;

  // Copy or render banner SVG from corresponding project card
  if (modalBanner) {
    const projectCard = document.querySelector(`.project-item[data-project-id="${projectId}"]`);
    if (projectCard) {
      const svgThumb = projectCard.querySelector(".project-svg-thumb");
      if (svgThumb) {
        modalBanner.innerHTML = svgThumb.outerHTML;
      }
    }
  }

  // Populate Qualifications Bullet Points
  if (modalQualifications) {
    modalQualifications.innerHTML = "";
    project.qualifications.forEach(function (qual) {
      const item = document.createElement("div");
      item.className = "modal-qualification-item";
      item.innerHTML = `<ion-icon name="checkmark-done-circle-outline"></ion-icon><span>${qual}</span>`;
      modalQualifications.appendChild(item);
    });
  }

  // Populate Tech Stack Badges
  if (modalTech) {
    modalTech.innerHTML = "";
    project.techStack.forEach(function (tech) {
      const pill = document.createElement("span");
      pill.className = "modal-tech-pill";
      pill.innerText = tech;
      modalTech.appendChild(pill);
    });
  }

  // Set Links
  if (modalLive) {
    modalLive.href = project.liveUrl || "https://github.com/akhileshyadav117";
  }
  if (modalGithub) {
    modalGithub.href = project.githubUrl || "https://github.com/akhileshyadav117";
  }

  // Open Modal
  modalContainer.classList.add("active");
  document.body.style.overflow = "hidden";
};

const closeProjectModal = function () {
  if (modalContainer) {
    modalContainer.classList.remove("active");
    document.body.style.overflow = "";
  }
};

// Event listener for opening modal on triggers
document.addEventListener("click", function (e) {
  const trigger = e.target.closest("[data-modal-trigger]");
  if (trigger) {
    const projectId = trigger.dataset.modalTrigger;
    if (projectId) {
      e.preventDefault();
      openProjectModal(projectId);
    }
  }
});

// Close button click
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeProjectModal);
}

// Click outside modal box on backdrop overlay
if (modalContainer) {
  modalContainer.addEventListener("click", function (e) {
    if (e.target === modalContainer) {
      closeProjectModal();
    }
  });
}

// Close on Escape key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modalContainer && modalContainer.classList.contains("active")) {
    closeProjectModal();
  }
});

