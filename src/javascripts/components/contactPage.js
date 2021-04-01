const contactPage = () => {
  const contact = `<nav class="navbar" id="footer">
  <div class="container-fluid">
  <ul id="contact-links" class="nav me-auto mb-2 mb-lg-0 justify-content-center">
    <li class="nav-item"><a href="mailto:holly-parsons@outlook.com" id="email" class="nav-link" target="_blank">email</a></li>
    <li class="nav-item"><a href="https://www.linkedin.com/in/hmparsons/" id="linkedin" class="nav-link" target="_blank">linkedin</a></li>
    <li class="nav-item"><a href="https://github.com/hmparsons-sde" id="github" class="nav-link" target="_blank">github</a></li>
  </ul>
  </div>  
  </nav>`;
  document.querySelector('#contact-display').innerHTML = contact;
};

export default contactPage;
