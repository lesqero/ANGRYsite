class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom bg-earth_c">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4"><img src="img/header/angryhomebutton.png" style="max-height: 90px;"/></span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link"><img src="img/header/aboutButton.png" style="max-height: 60px;"/></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><img src="img/header/updatesButton.png" style="max-height: 60px;"/></a></li>
        <li class="nav-item"><a href="#" class="nav-link"><img src="img/header/contactButton.png" style="max-height: 60px;"/></a></li>
      </ul>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  