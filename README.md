# Upvoid Technologies

Upvoid Technologies is a responsive smart-home automation landing page built with React and Vite. It presents the company, automation services, contact information, and a draggable AI-style assistant named Nova.

## Features

- Responsive desktop and mobile layout
- Fixed glass-effect navigation bar
- Hero image slideshow with automatic rotation and manual controls
- Animated smart-home hero visuals and status indicator
- About section with company information and statistics
- Service cards for:
  - Customizable Smart Home
  - Security & Surveillance
  - Smart Lighting
  - Smart Office
  - Water Automation
  - Home Entertainment
- Callback enquiry form
- Footer with contact and social links
- Draggable Nova AI assistant with:
  - Expandable chat panel
  - Quick prompt suggestions
  - Local demo responses
  - Mobile-friendly layout

## Tech stack

- React
- Vite
- JavaScript
- CSS
- HTML

## Requirements

- Node.js 18 or newer
- npm
- Internet access for the first dependency installation

## Project structure

This repository uses its root directory as the application directory. There is no `src/` wrapper folder.

```text
E:\src\
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
├── README.md
└── .gitignore
```

## Installation

1. Clone the repository:

   ```powershell
   git clone https://github.com/Sujalgayakwad/Sujalgayakwad1.git
   cd Sujalgayakwad1
   ```

2. Install the runtime and build dependencies:

   ```powershell
   npm install react react-dom vite
   ```

   The repository currently does not include a `package.json`, so this command installs the dependencies directly in the cloned project. It also creates a local `package.json` and `package-lock.json` for that checkout.

3. Start the development server:

   ```powershell
   npx vite --host 127.0.0.1
   ```

4. Open the application in a browser:

   ```text
   http://127.0.0.1:5173
   ```

The Vite development server provides hot module replacement, so source changes appear automatically in the browser.

## Production build

Create an optimized production build:

```powershell
npx vite build
```

The generated files are written to `dist/`.

Preview the production build locally:

```powershell
npx vite preview --host 127.0.0.1
```

## Customization

### Hero slideshow

Update the image imports and `images` array in [components/Home.jsx](./components/Home.jsx).

### Services

Update the `services` array in [components/Services.jsx](./components/Services.jsx) to change service images, names, or numbering.

### Contact information

Update the phone, email, website, and social links in [components/Footer.jsx](./components/Footer.jsx).

### Nova AI assistant

Nova is currently a front-end demo with local responses. Its interaction logic is in [components/AIAssistant.jsx](./components/AIAssistant.jsx). To connect it to a real AI service, add a server-side API and update the message handling logic. Keep API keys on the server and never place them in browser source code.

## Current limitations

- The callback form currently logs submitted data to the browser console; it does not send the data to a backend.
- Nova does not call an external AI API.
- `node_modules/` is excluded from Git. Dependencies must be installed locally after cloning.
- `dist/` is generated output and can be regenerated with `npx vite build`.

## License

No license has been specified for this project yet.
