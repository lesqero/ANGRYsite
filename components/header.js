class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <header class="container-fluid bg-earth_c">
        <div class="row">
            <div class="col-auto">
                <a href="#" class="nav-link"><img src="img/header/angryhomebutton.png" style="max-height: 90px;"/></a>
            </div>
            <div class="col-md">
                
            </div>
            <div class="col-auto py-3 px-1 align-items-center">
                <a href="#" class="nav-link"><img src="img/header/aboutButton.png" style="max-height: 60px;"/></a>
            </div>
            <div class="col-auto py-3 px-1">
                <a href="#" class="nav-link"><img src="img/header/updatesButton.png" style="max-height: 60px;"/></a>
           </div>
           <div class="col-auto py-3 px-1">
                <a href="#" class="nav-link"><img src="img/header/contactButton.png" style="max-height: 60px;"/></a>
           </div>
        </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  