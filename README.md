# FlyRank Capstone

A React application built as part of the FlyRank Frontend training program. This project demonstrates AI-assisted development by implementing the same feature using two different prompting approaches and comparing the results.

## Project Overview

The application is built with React and Vite and includes a Settings Form with client-side validation.

### Features

- Settings form
- React Hook Form for form management
- Zod schema validation
- Accessible form labels
- Inline validation messages
- Success message after submission
- Clean component structure

## Tech Stack

- React
- Vite
- React Hook Form
- Zod
- @hookform/resolvers
- JavaScript

## Project Structure

```text
src/
├── components/
│   ├── SettingsForm.jsx
│   └── SuccessMessage.jsx
├── validation/
│   └── settingsSchema.js
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd flyrank_capstone
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## AI Development Workflow

This project was completed as an AI prompting exercise.

Two separate implementations were created:

- **ai-vague** – generated from a minimal prompt.
- **ai-structured** – generated from a detailed prompt with requirements, constraints, and verification instructions.

The comparison between both approaches is documented in `WORKFLOW.md`.

## Lessons Learned

- Detailed prompts produce higher-quality code.
- Verification and testing reduce review effort.
- AI-generated code should always be reviewed before merging.
