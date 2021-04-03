const printApp = () => {
  document.querySelector('#main').innerHTML = `
  <nav class="navbar navbar-expand-lg menu">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavigation" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><i class="fas fa-hamburger"></i></span>
    </button>
      <div class="container-fluid">
        <div class="collapse navbar-collapse sidenav" id="navbarNavigation">
          <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a href="#" id="navToLanding" class="nav-link">HMP</a></li>
            <li class="nav-item"><a href="#about-me" id="navToBio" class="nav-link">About me</a></li>
            <li class="nav-item"><a href="#work-page" id="navToWork" class="nav-link">My work</a></li>
            <li class="nav-item"><a href="#tech-page" id="navToTech" class="nav-link">Tech stack</a></li>
            <li class="nav-item"><a href="mailto:holly-parsons@outlook.com" id="email" class="nav-link" target="_blank">Email me</a></li>
            <li class="nav-item"><a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" class="nav-link" target="_blank">LinkedIn</a></li>
            <li class="nav-item"><a href="https://github.com/hmparsons-sde" id="github" class="nav-link" target="_blank">Github</a></li>
          </ul>
        </div>
      </div>  
    </nav>

<header class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
        <h1 class="mb-3">Holly Parsons</h1>
        <p class="lead">Web Developer | Yoga Instructor | Accessibility Advocate</p>
      </div>
    </div>
  </div>
</header>

<div class="about-me" id="about-me">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
      <h1 class="bioheader"><img src="src/images/bioheader.png"></h1>
      </div>
    </div>
  </div>
</div>

<div class="work-page" id="work-page">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
      <div class="d-flex flex-row flex-wrap justify-content-center" id="work-display"></div>
      </div>
    </div>
  </div>
</div>

<div class="tech-page" id="tech-page">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 text-center">
      <div class="d-flex flex-row flex-wrap justify-content-center" id="tech-display">
      <img id="tech-logos" src="https://github.com/hmparsons-sde/portfolio-site/blob/947642ac0a0a2be95abb24da7ebb6ab22586f151/src/images/techpage.png?raw=true" alt="tech image" class="img-fluid rounded-3 d-block center">
      </div>
      </div>
    </div>
  </div>
</div>`;
};

export default printApp;
