# Glassmorphic Personal Portfolio Website 💻✨

A premium, dark-themed, glassmorphic portfolio website developed from scratch using vanilla frontend technologies. Fully responsive, interactive, and optimized for showcasing software engineering projects, educational milestones, and professional skills.

👉 **Live Demo:** [http://localhost:8000](http://localhost:8000) *(when running locally)*

---

## 🎨 Design System & Aesthetics
- **Theme**: Cyber Space / Modern Dark Slate
- **Color Palette**: 
  - Background: Cyber Slate (`#0B0F19`)
  - Accent Color: Neon Cyber Cyan (`#00F0FF`)
  - Action/Hover Gradients: Electric Blue Gradient (`linear-gradient(135deg, #00F0FF, #0072FF)`)
- **Key Visuals**: Glassmorphic elements utilizing `backdrop-filter: blur(16px)` and translucent border borders, subtle breathing animation glow effects on avatar vector, and card-elevation transitions.

---

## ⚙️ Core Features
1. **Interactive Sidebar**: Shows profile avatar, professional title, location, and social links. Automatically collapses into a drawer on mobile with a togglable expansion button.
2. **Smooth Tab Transitions**: Dynamic Single-Page Application (SPA) experience. Easily switch between **About**, **Education**, **Projects**, **Certificates**, and **Contact** pages smoothly without reloading.
3. **Responsive Project filtering**: Custom category-based project filter tabs for desktop and collapsible list menus for mobile devices.
4. **Interactive Connect Dashboard**: Beautiful connection cards for Email, LinkedIn, and GitHub with animated gradient hovers.

---

## 🛠️ Built With (Tech Stack)
- **Structure**: Semantic HTML5
- **Styles**: Custom CSS3 variables, transitions, keyframe animations, and media queries (No UI Frameworks/Tailwind)
- **Logic**: Vanilla ES6+ JavaScript (Tab switching, projects filter, and sidebar state controls)
- **Icons**: Ionicons CDN

---

## 📂 Project Structure
```
/
├── index.html            # Main markup and SVG icons
├── README.md             # Project documentation
├── assets/
│   ├── css/
│   │   └── style.css     # Glassmorphic styles and animations
│   └── js/
│       └── script.js     # Sidebar drawer, tab control, and filtering
```

---

## 🚀 Getting Started

### Prerequisites
You only need a web browser and a local file explorer. If you want to run it on a local server, you should have Python installed.

### Run Locally (Double-click)
Go to the root directory and open `index.html` in any browser.

### Run with Local Python Server (Recommended)
1. Open terminal/PowerShell in the project directory.
2. Launch a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
3. Open [http://localhost:8000](http://localhost:8000) in your browser.

---

## 🌐 Deployment Instructions

### 1. GitHub Pages (Free)
1. Commit and push your code to your repository.
2. Go to the repository **Settings** tab.
3. Select **Pages** from the left navigation panel.
4. Under **Build and deployment**, set the source to **Deploy from a branch** and choose the `main` branch.
5. Save, and your portfolio will be live in 1-2 minutes!

### 2. Netlify (Free & Drag-and-Drop)
1. Log in to [Netlify](https://www.netlify.com/).
2. Drag and drop the `MY PORTFOLIO` folder directly into the upload box.
3. Your site will be instantly deployed with a custom link.

---

## 📄 License
This project is open-source and free to use. Feel free to customize and expand it!
