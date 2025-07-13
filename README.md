# 🎬 Netflix Clone - React.js + Tailwind CSS

This is a responsive Netflix homepage clone built using **React.js**, **Tailwind CSS**, and **Vite**. The project replicates the core UI layout of Netflix, including the Hero section, trending movies, FAQs, and a custom footer.

---

## 🚀 Features

- ⚡️ Built with **Vite** for fast development
- 💅 Styled with **Tailwind CSS**
- 📺 Dynamic **Trending Movies** section using **OMDb API**
- 📱 Fully **Responsive Design**
- 📦 Clean and reusable components
- 🔍 Interactive **FAQ Accordion**
- 📩 Email CTA form
- 🔺 Gradient curves and effects
- 🌈 Hover and blur UI enhancements

---

## 🏗️ Folder Structure
📁 src/
┣ 📁 assets/ // Images and logos
┣ 📁 Components/ // Reusable React components
┃ ┣ 📄 Navbar.jsx
┃ ┣ 📄 HeroSection.jsx
┃ ┣ 📄 TrendingNow.jsx
┃ ┣ 📄 FAQSection.jsx
┃ ┣ 📄 EmailCTA.jsx
┃ ┣ 📄 Footer.jsx
┃ ┣ 📄 CurveDivider.jsx
┃ ┗ 📄 ReasonsToJoin.jsx
┣ 📄 App.jsx // Main app layout
┗ 📄 main.jsx // Entry point



---

## 🧠 Component Overview

### ✅ `Navbar.jsx`
A responsive navigation bar with Netflix branding and a sign-in button.

### ✅ `HeroSection.jsx`
Large hero banner with background image, call-to-action text, and a reusable email form.

### ✅ `TrendingNow.jsx`
Fetches dynamic data using the **OMDb API**. A horizontal slider shows top 10 movies with image, name, and index.

> 🔗 **API Used**: [OMDb API](https://www.omdbapi.com/)  
> Example: `https://www.omdbapi.com/?s=avengers&apikey=YOUR_API_KEY`

Movie names used for dynamic fetch:



### ✅ `ReasonsToJoin.jsx`
Grid layout cards highlighting reasons to join Netflix with icons and gradient backgrounds.

### ✅ `FAQSection.jsx`
Accordion-style collapsible FAQ section with toggleable "+" and "×" signs.

### ✅ `EmailCTA.jsx`
A styled form to collect email addresses, used in both Hero and Footer sections.

### ✅ `Footer.jsx`
Simple text footer for brand consistency.

### ✅ `CurveDivider.jsx`
SVG-based curved line divider with glowing blue blur background for aesthetic transitions.

---

## 📦 Installation & Setup

```bash
git clone https://github.com/AhmedSaeed216/Task.git
cd Task
npm install
npm run dev
