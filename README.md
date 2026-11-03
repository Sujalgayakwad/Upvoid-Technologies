# Upvoid Technologies

<p align="center">
  <strong>Intelligence for everyday living.</strong><br />
  Smart-home automation solutions designed to make everyday spaces more comfortable, connected, and secure.
</p>

<p align="center">
  <a href="https://github.com/Sujalgayakwad/Upvoid-Technologies">GitHub Repository</a>
</p>

---

## Overview

**Upvoid Technologies** is a React-based website presenting smart-home and connected-living solutions. The site introduces the company, highlights its services, and gives visitors a way to enquire about a project. Its interface uses a rotating hero slideshow, responsive page sections, service cards, and an interactive assistant-style chat panel.

The project is built with React and Vite, with styling managed through CSS and Tailwind CSS configuration.

## Website sections and features

- **Home / hero:** rotating image slideshow with automatic transitions, previous/next controls, slide indicators, and a call to explore services.
- **About:** company introduction section.
- **Services:** cards for six smart-living service categories:
  - Customizable Smart Home
  - Security & Surveillance
  - Smart Lighting
  - Smart Office
  - Water Automation
  - Home Entertainment
- **Contact enquiry:** form fields for name, phone, email, and project details.
- **Nova AI assistant UI:** floating, draggable chat panel with suggested prompts and conversational placeholder responses.
- **Navigation and footer:** links to the main page sections and company contact details.
- **Service detail component:** a service-detail view with feature and benefit lists and an interest modal is present in the source tree.

> **Implementation note:** The contact form currently logs submitted form data to the browser console. The Nova assistant uses a local placeholder response; no AI service is connected in the inspected component. The service-detail component also contains a TODO for real form submission and is not imported by the main app component shown in this repository. Connect these pieces to a backend or service before relying on them for production enquiries or AI responses.

## Tech stack

| Technology | Use |
| --- | --- |
| [React 18](https://react.dev/) | Component-based user interface |
| [Vite 5](https://vite.dev/) | Local development server and production build |
| JavaScript / JSX | Application logic and components |
| CSS | Component and page styling |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling configuration and classes |
| [Framer Motion](https://www.framer.com/motion/) | Motion utilities used by the service-detail component |
| [React Router](https://reactrouter.com/) | Routing dependency used by the service-detail component |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library dependency |
| [EmailJS](https://www.emailjs.com/) | Email integration dependency (verify/configure before use) |
| [Axios](https://axios-http.com/) | HTTP client dependency |

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (included with Node.js)

Check your installation:

```bash
node --version
npm --version
```

### 1. Clone the repository

```bash
git clone https://github.com/Sujalgayakwad/Upvoid-Technologies.git
cd Upvoid-Technologies
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite prints a local URL in the terminal (typically `http://localhost:5173/`). Open that URL in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm start` | Starts Vite (same development server) |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs ESLint checks |

To test the production build locally:

```bash
npm run build
npm run preview
```

## Project structure

The repository uses a relatively flat Vite/React layout:

```text
Upvoid-Technologies/
├── components/
│   ├── AIAssistant.jsx
│   ├── AIAssistant.css
│   ├── App.jsx
│   ├── App.css
│   ├── Footer.jsx
│   ├── Footer.css
│   ├── Home.jsx
│   ├── Home.css
│   ├── Navbar.jsx
│   └── Services.jsx
├── styles/
│   ├── About.jsx
│   ├── About.css
│   ├── ContactForm.jsx
│   ├── ContactForm.css
│   ├── Navbar.css
│   └── Services.css
├── img/
│   └── website images and logo assets
├── Service Detail Page Component.jsx
├── index.html
├── main.jsx
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

The checked-in `dist/` directory contains a built site. For normal development, edit the source files and generate a fresh build with `npm run build`.

## Customization

- **Hero slideshow:** update the image imports and `images` array in `components/Home.jsx`.
- **Service cards:** edit the `services` array in `components/Services.jsx` and replace the corresponding images in `img/`.
- **Navigation and page composition:** edit `components/Navbar.jsx` and `components/App.jsx`.
- **Contact form behavior:** update `handleSubmit` in `styles/ContactForm.jsx` to send validated data to your chosen backend or form service.
- **Assistant behavior:** replace the placeholder reply logic in `components/AIAssistant.jsx` with a secure server-side API integration. Do not expose private API keys in frontend code.
- **Visual styling:** update the CSS files under `components/` and `styles/`, along with `tailwind.config.js` where applicable.

## Production considerations

Before deploying the site or accepting real customer enquiries:

1. Connect the contact form to a backend or trusted form provider and add appropriate validation and spam protection.
2. Connect the assistant to a real service only through a secure backend; the current component is a UI demonstration.
3. Review the service-detail component imports and routing setup before enabling service detail URLs.
4. Replace placeholder social links with the company's official profiles.
5. Review page metadata, favicon paths, accessibility, and mobile layouts.
6. Run `npm run lint` and `npm run build` before publishing.

## Repository

- **GitHub:** https://github.com/Sujalgayakwad/Upvoid-Technologies
- **Default branch:** `main`

## Maintainer

**Sujal Gayakwad** — [@Sujalgayakwad](https://github.com/Sujalgayakwad)

---

<p align="center">
  Made for smarter, more connected everyday living.
</p>
