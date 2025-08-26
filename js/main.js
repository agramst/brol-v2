import { navLogic } from "./ui.js";
import { projects } from "./project-data.js";
import './project.js';
import './ui.js';

// Initialize navigation logic
document.addEventListener("DOMContentLoaded", navLogic);

// Render projects on the home page
if (document.getElementById('projects-container')) {
    const container = document.getElementById('projects-container');

    container.innerHTML = projects.map(project => `
    <a href="project.html?id=${project.id}">
    <div class="project-item">
        <img src="${project.image}" />
        <div>
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
        </div>
    </div>
    </a>
`).join('');
}
