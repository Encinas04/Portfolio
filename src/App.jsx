import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import {projects} from "./data/projects.js";
import ProjectCard from "./components/ProjectCard.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="portfolio">
    <Header/>

    <main className="projects-grid">
        {projects.map(project => (
            <ProjectCard key={project.id} project={project}/>
        ))}

    </main>
</div>

  )
}

export default App
