const printProjects = (project) => {
  let domString = '';
  project.forEach((element) => {
    domString += `<div class="card mb-3" style="width: 60rem">
    <div class="row g-0">
      <div class="col-md-4">
        <img class="card-img" src="${element.screenshot}" alt="project screenshot">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text description"> ${element.overview}</p>
            <p class="card-text techs"> ${element.tech}</p>
            <a href="${element.url}" class="btn btn-outline-light">Project</a>
            <a href="${element.github}" class="btn btn-outline-light">GitHub</a>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.querySelector('#work-display').innerHTML = domString;
};

export default printProjects;
