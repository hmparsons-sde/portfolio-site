const printApp = () => {
  document.querySelector('#main').innerHTML = `
  <nav class="navbar" id="navbar">
    <div class="container-fluid">
    <a class="navbar-left"><h1>HOLLY MCKEE PARSONS</h1>
    <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item text-my-own-color"><a href="#bio-page" id="navToBio" class="nav-link">BIO</a></li>
      <li class="nav-item"><a href="#tech-page" id="navToTech" class="nav-link">TECH</a></li>
      <li class="nav-item"><a href="#work-page" id="navToWork" class="nav-link">WORK</a></li>
    </ul>
  </div>  
  </nav>
  <div class="card mb-3" id="bio-page">
  <div class="row g-0">
    <div class="col-md-4">
      <img id="bio-image" src="" alt="bio image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <div id="bio-text"></div>
      </div>
    </div>
  </div>
</div>
</div>
  <div class="fullPage" id="tech-page">
  <h2 id="tech-header">TECH</h2>
  <ul class="d-flex flex-row flex-wrap justify-content-center align-items-center">
    <li class="tech-list">HTML</li>
    <li class="tech-list">CSS</li>
    <li class="tech-list">Bootstrap</li>
    <li class="tech-list">JS</li>
    <li class="tech-list">Firebase</li>
    <li class="tech-list">Postman</li>
    <li class="tech-list">Github</li>
    <li class="tech-list">Figma</li>
    <li class="tech-list">Canva</li>
  </ul>
  </div>
  <div class="fullPage" id="work-page">
  <h2 id="work-title">WORK</h2>
  <div class="d-flex flex-row flex-wrap justify-content-center" id="work-display"></div>
  </div>
  
  <nav class="navbar" id="footer">
    <div class="container-fluid">
    <ul id="contact-links" class="nav me-auto mb-2 mb-lg-0">
      <li class="nav-item"><a href="mailto:holly-parsons@outlook.com" id="email" class="nav-link">email</a></li>
      <li class="nav-item"><a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" class="nav-link">linkedin</a></li>
      <li class="nav-item"><a href="https://github.com/hmparsons-sde" id="github" class="nav-link">github</a></li>
    </ul>
  </div>  
  </nav>`;
};

export default printApp;
