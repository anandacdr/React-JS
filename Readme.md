## Installation

`npx create-react-app 01-basics_react`

## To Run Project
`npm run start`

OR,

## Using Vite
Vite: `bun create vite` or, `npm create vite@latest`

## Install
`npm i` or  `bun i`

## To Run Project
`npm run dev` or `bun run dev`

### Tips:

``1. File name is on Capital in First Letter``

## Install of, TailwindCSS


### 1. Install Tailwind CSS
   - `npm install -D tailwindcss postcss autoprefixer`
   - `npx tailwindcss init -p`


### 2. Configure Your Template Paths

filname: **tailwind.config.js**

    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  ],
  
### 3. Add the Tailwind directives to your CSS in index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
