# Upvoid Technologies

A responsive smart-home automation landing page for Upvoid Technologies. The site presents the company, its automation services, contact information, and an interactive AI-style assistant named Nova.

## Features

- Responsive landing page for desktop and mobile screens
- Fixed glass-effect navigation bar
- Hero image slideshow with manual controls and automatic rotation
- About section with company information and statistics
- Smart-home service cards:
  - Customizable Smart Home
  - Security & Surveillance
  - Smart Lighting
  - Smart Office
  - Water Automation
  - Home Entertainment
- Contact and callback enquiry form
- Contact details and social links in the footer
- Draggable Nova AI assistant with:
  - Expandable chat panel
  - Quick prompt suggestions
  - Local conversational responses
  - Mobile-friendly layout
- Production-ready Vite build

## Technology

- React
- Vite
- JavaScript
- CSS
- HTML

## Project structure

```text
src/
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
│   └── Website images and illustrations
├── index.html
├── main.jsx
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm

## Run locally

Open a terminal in the project directory:

```powershell
cd E:\src
npx vite --host 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173
```

The development server supports hot module replacement, so changes appear automatically in the browser.

## Create a production build

```powershell
cd E:\src
npx vite build
```

The generated production files are written to the `dist/` directory.

## Preview the production build

```powershell
cd E:\src
npx vite preview --host 127.0.0.1
```

## Customizing the project

### Hero slideshow

Update the image imports and the `images` array in [components/Home.jsx](./components/Home.jsx).

### Services

Update the `services` array in [components/Services.jsx](./components/Services.jsx) to change service images, names, or numbering.

### Contact information

Update the contact links in [components/Footer.jsx](./components/Footer.jsx).

### Nova AI assistant

The assistant currently uses local responses and does not connect to an external AI service. To connect it to a real AI backend, update the `sendMessage` logic in [components/AIAssistant.jsx](./components/AIAssistant.jsx) and add server-side API handling for credentials and requests.

## Notes

- The callback form currently logs submitted form data in the browser console. It does not send data to a backend.
- The Nova assistant is a front-end interaction demo and does not call an external AI API.
- Keep API keys and other secrets on a server or in environment variables; do not place them in browser source files.
