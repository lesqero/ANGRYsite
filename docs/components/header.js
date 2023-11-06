class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      
      <header class="container-fluid bg-earth_c">
        <div class="row">
            <div class="col-auto d-none d-md-inline px-0">
                <a href="../home" class="nav-link"><img src="../img/header/angryhomebutton.png" style="max-width:90%; max-height: 90px;"/></a>
            </div>
            <div class="col d-none d-md-inline px-0">
              <img src="../img/angryLogo.png" class="img-fluid" alt="ANGRY logo" style="max-height: 90px;">
            </div>
            <div class="col d-none d-md-inline">
                
            </div>
            <div class="col-auto py-3 px-1 d-none d-md-inline">
                <a href="../about" class="nav-link"><img src="../img/header/aboutButton.png" style="max-height: 60px;"/></a>
            </div>
            <div class="col-auto py-3 px-1 d-none d-md-inline">
                <a href="../updates" class="nav-link"><img src="../img/header/updatesButton.png" style="max-height: 60px;"/></a>
           </div>
           <div class="col-auto py-3 px-1 d-none d-md-inline">
                <a href="../contact" class="nav-link"><img src="../img/header/contactButton.png" style="max-height: 60px;"/></a>
           </div>
        </div>


        <div class="col-auto d-md-none">
          <a href="../index.html" class="nav-link"><img src="../img/header/angryhomebutton.png" class="mx-auto d-block" style="max-height: 90px;"/></a>
        </div>

        <div class="container">
          <div class="row">
            <div class="col py-3 px-1 d-md-none">
              <a href="../about" class="nav-link"><img src="../img/header/aboutButton.png" style=" max-width: 100%;"/></a>
            </div>
            <div class="col py-3 px-1 d-md-none">
              <a href="../updates" class="nav-link"><img src="../img/header/updatesButton.png" style="max-width: 100%;"/></a>
            </div>
            <div class="col py-3 px-1 d-md-none">
              <a href="../contact" class="nav-link"><img src="../img/header/contactButton.png" style=" max-width: 100%;"/></a>
            </div>
          </div>
        </div>
      </div>
      `;
    }
  }
  
  customElements.define('header-component', Header);
  