import { projects } from "./project-data.js";

const params = new URLSearchParams(window.location.search);
const projectId = parseInt(params.get("id"));
const project = projects.find(p => p.id === projectId);

const container = document.getElementById("projects-container");

if (!project) {
    container.innerHTML = `<h2>Project not found</h2>`;
} else {
    container.innerHTML = `

    <h1>${project.title}</h1>
    <img src="${project.fullImage}" alt="${project.title}" />
    <p>${project.description}</p>
    <h3>Technologies Used:</h3>
    <ul>
      ${project.technologies.map(tech => `<li>${tech}</li>`).join("")}
    </ul>
    <a href="${project.link}" target="_blank" class="btn">View Live Project</a>
  `;
}
