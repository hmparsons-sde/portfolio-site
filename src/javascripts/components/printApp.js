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
      <div class="col-6 text-center">
      <img class="img-fluid mx-auto d-block" src="src/images/Headshot2.jpg" id="power-pose">
      </div>
      <div class="col-6">
        <div class="bioheader"><h1 class="mb-3">Hi, I'm Holly!</h1></div>
        <div id="bio-text">I grew up just south of Nashville, TN and was reared by a family who has always encouraged me to follow my passions (as long as there was a clear plan!).
        Even though most of them are engineers, they were thrilled when I chose to attend Vanderbilt University. There, I earned a Bachelor of Arts, with Highest Honors, in Art History & Philosophy.
        My goal was to earn my PhD, a professorship, and an office on some leafy campus in a small town. But, after three semesters in a graduate program, I learned that academia was not the life I wanted. </br> </br>
        After managing a juice bar, earning my RYT-200 yoga teacher certification, and working for a FinTech company, I landed at a recruiting & consulting firm as a research associate. 
        Using AI technologies in my daily workflow sparked an intense curiosity in the ways that humans and computers interact. 
        As a result, I followed in the footsteps of innumerable friends and enrolled in Nashville Software School's part-time evening bootcamp.</br> </br>
        Almost immediately, I found my new passion - a career path that would allow me to be creative, keep writing, and serve a broad audience of users. As both a person with chronic illness and a 
        sibling of a person with autism, I am especially drawn to projects and people who advocate for accessibility in tech.</br></br>
        Outside of software development, I am a voracious reader, an avid baker, a devoted mother to two special needs dogs, and a rubber duck for my developer husband.
        </div>
      </div>
    </div>
  </div>
</div>

<div class="work-page" id="work-page">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12">
      <h1 class="mb-5">Featured Projects</h1>
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
