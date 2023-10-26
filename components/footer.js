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
              <li class="nav-item mb-2"><a href="index.html" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="about.html" class="nav-link p-0 text-body-secondary">About</a></li>
              <li class="nav-item mb-2"><a href="updates.html" class="nav-link p-0 text-body-secondary">Updates</a></li>
              <li class="nav-item mb-2"><a href="contact.html" class="nav-link p-0 text-body-secondary">Contact</a></li>
            </ul>
          </div>

          <div class="col-md">
            <a href="contact.html"><img src="img/Contact/Email.png" class="img-fluid px-6" alt="Contact title"></a>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Hear what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
                <button class="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
    
      </footer>
    </div>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);
  