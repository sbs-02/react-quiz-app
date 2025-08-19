# REACT QUIZAPP :

A modern, interactive Quiz Application built with React and TypeScript. This app features seamless navigation, stylish components, alert notifications, state management using Redux Toolkit, and responsive design powered by Vite, TailwindCSS, ShadCN UI, React-hot-toast, and React Router DOM.

## Features

- Interactive quiz interface with multiple pages/routes
- Global state management via Redux Toolkit
- Styled with TailwindCSS and ShadCN UI components
- Real-time feedback using toast notifications
- Fast development experience powered by Vite

## Tools & Technologies

- **Vite** — build tool with speedy hot module replacement
- **React + TypeScript** — typed, component-driven UI
- **TailwindCSS** — utility-first styling
- **ShadCN UI** — flexible UI primitives
- **Redux Toolkit** — scalable global state management
- **React Router DOM** — client-side routing
- **React-Toastify** — toast notification UI
- **ESLint** with support for TypeScript and React rules

## Project Structure

├── index.html
├── package-lock.json
├── package.json
├── public
│ └── images
│ ├── css.svg
│ ├── html.svg
│ ├── javascript.svg
│ └── react.svg
├── README.md
├── src
│ ├── App.css
│ ├── App.tsx
│ ├── Components
│ │ ├── Buttons
│ │ │ └── TopicButtons.tsx
│ │ ├── Cards
│ │ │ └── QuizCard.tsx
│ │ ├── Container.tsx
│ │ └── ui
│ │ ├── alert.tsx
│ │ ├── button.tsx
│ │ └── progress.tsx
│ ├── Contexts
│ │ ├── QuizContext.tsx
│ │ └── useQuizContext.tsx
│ ├── index.css
│ ├── Interfaces
│ │ ├── ContainerProps.tsx
│ │ ├── Questions.tsx
│ │ ├── QuizCardProps.tsx
│ │ └── TopicsButtonProps.tsx
│ ├── lib
│ │ └── utils.ts
│ ├── main.tsx
│ ├── Questions
│ │ ├── CssQuestions.tsx
│ │ ├── HtmlQuestions.tsx
│ │ ├── JavascriptQuestions.tsx
│ │ └── ReactQuestions.tsx
│ ├── store
│ │ ├── scoreSlice.ts
│ │ └── store.ts
│ └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.tsbuildinfo
└── vite.config.ts

## Getting Started

```bash
git clone https://github.com/sbs-02/react-quiz-app.git
cd react-quiz-app
npm install
npm run dev

```

## Build & Preview

npm run build
npm run preview
