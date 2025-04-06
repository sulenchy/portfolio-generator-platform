function generatePortfolio(formData, templateHtml) {
    const skillsList = formData.skills.map(skill => `<li>${skill}</li>`).join("");
    const projectBlocks = formData.projects.map(project => `
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      </div>
    `).join("");
  
    let result = templateHtml
      .replace(/{{name}}/g, formData.name)
      .replace(/{{tagline}}/g, formData.tagline)
      .replace(/{{bio}}/g, formData.bio)
      .replace(/{{profile_image}}/g, formData.profile_image)
      .replace(/{{skills}}/g, skillsList)
      .replace(/{{projects}}/g, projectBlocks);
  
    return result;
  }
  