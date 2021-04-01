const printApp = () => {
  document.querySelector('#main').innerHTML = `
  <div class="sidenav">
  <nav class="navbar" id="navbar">
    <div class="container-fluid">
      <ul id="navLinks" class="nav me-auto mb-2 mb-lg-0">
        <li class="nav-item text-my-own-color"><a href="#bio-page" id="navToBio" class="nav-link">Me</a></li>
        <li class="nav-item"><a href="#work-page" id="navToWork" class="nav-link">My work</a></li>
        <li class="nav-item"><a href="#contact-page" id="navToContact" class="nav-link">Get in touch</a></li>
      </ul>
    </div>  
  </nav>
</div>
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
  <div class="fullPage" id="work-page">
  <div class="d-flex flex-row flex-wrap justify-content-center" id="work-display"></div>
  </div>
  <div class="fullPage" id="contact-page">
  <div class="d-flex flex-row flex-wrap justify-content-center" id="contact-display"></div>
  </div>`;
};

export default printApp;
