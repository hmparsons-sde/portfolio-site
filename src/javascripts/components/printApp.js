const printApp = () => {
  document.querySelector('#main').innerHTML = `
<div class="sidenav">
  <nav class="navbar" id="navbar">
    <div class="container-fluid">
      <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
        <li class="nav-item"><a href="#bio-page" id="navToBio" class="nav-link">Me</a></li>
        <li class="nav-item"><a href="#work-page" id="navToWork" class="nav-link">My work</a></li>
        <li class="nav-item"><a href="mailto:holly-parsons@outlook.com" id="email" class="nav-link" target="_blank">Email me</a></li>
        <li class="nav-item"><a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" class="nav-link" target="_blank">LinkedIn</a></li>
        <li class="nav-item"><a href="https://github.com/hmparsons-sde" id="github" class="nav-link" target="_blank">Github</a></li>
      </ul>
    </div>  
  </nav>
</div>
<div class="fullPage">
  <div class="card mb-3" id="bio-page">
    <div class="row g-0">
      <div class="col-md-4">
        <img id="bio-image" src="src/images/Headshot2.jpg" alt="bio image" class="img-fluid rounded-3 mx-auto d-block">
      </div>
        <div class="col-md-8">
          <div class="card-body">
          <div id="bio-text"></div>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <div class="fullPage" id="work-page">
    <div class="d-flex flex-row flex-wrap justify-content-center" id="work-display"></div>
  </div>
  <div class="fullPage" id="contact-page">
    <div class="d-flex flex-row flex-wrap justify-content-center" id="contact-display"></div>
  </div>`;
};

export default printApp;
