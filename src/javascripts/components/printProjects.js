const printProjects = (project) => {
  let domString = '';
  project.forEach((element) => {
    domString += `<div class="card mb-3 shadow-lg p-4 rounded" style="width: 60rem">
    <div class="row g-0">
      <div class="col-lg-6">
        <img class="card-img" src="${element.screenshot}" alt="project screenshot">
      </div>
      <div class="col-lg-6">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text description"> ${element.overview}</p>
            <p class="card-text technology"> ${element.tech}</p>
            <a href="${element.url}" class="btn btn-secondary">Netlify</a>
            <a href="${element.github}" class="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  </div>`;
  });
  document.querySelector('#work-display').innerHTML = domString;
};

export default printProjects;
