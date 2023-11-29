class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <div class="container">
      <footer class="py-5">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Menu</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="/index.html" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="/about.html" class="nav-link p-0 text-body-secondary">About</a></li>
              <li class="nav-item mb-2"><a href="/updates" class="nav-link p-0 text-body-secondary">Updates</a></li>
              <li class="nav-item mb-2"><a href="/contact.html" class="nav-link p-0 text-body-secondary">Contact</a></li>
            </ul>
          </div>
          <div class="col d-none d-md-inline">
          </div>

          <div class="col-6 col-md-4">
            <a href="/contact.html"><img src="/img/Contact/Email.png" class="img-fluid px-6" alt="Contact title"></a>
          </div>

        
        </div>
    
      </footer>
    </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  