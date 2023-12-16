const template = document.createElement('template');

template.innerHTML=`
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");

*, *:before, *:after {
	box-sizing: border-box;
}

:root {
    --base-color: #130f40;
    --active-color: salmon;
    --ancor-color: #130f40;
}

footer {
    width: 100%;
    background-color: #555;
    color: #bbb;
    line-height: 1.5;
}

footer ul {
    list-style: none;
    padding-left: 0;
}

footer a {
    text-decoration: none;
    color: #eee;
    font-size: .85rem;
}

.footer-title {
    color: #fff;
    font-size: 1.375rem;
    padding-bottom: 0.625rem;
}

/* Footer main */
.footer-main {
    padding: 1.25rem 1.875rem;
    display: flex;
    flex-wrap: wrap;
}

@media only screen and (min-width: 29.8125rem /* 477px */) {
    .footer-main {
      justify-content: space-evenly;
    }
  }
@media only screen and (min-width: 77.5rem /* 1240px */) {
    .footer-main {
      justify-content: space-evenly;
    }
}

.footer-main-item {
    padding: 1.25rem;
    min-width: 12.5rem;
}

/* Footer social */
.footer-social {
    padding: 0 1.875rem 1.25rem;
}
  
.footer-social-list {
    display: flex;
    justify-content: center;
    border-top: 1px #777 solid;
    padding-top: 1.25rem;
}
  
.footer-social-list li {
    margin: 0.5rem;
    font-size: 1.25rem;
}
  
.footer-social-list a:hover {
    color: var(--active-color);
}

/* Footer legal */
.footer-legal {
    padding: 0.9375rem 1.875rem;
    background-color: #333;
}
  
.footer-legal-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
  
.footer-legal-list li {
    margin: 0.125rem 0.625rem;
    white-space: nowrap;
}
  
/* one before the last child */
.footer-legal-list li:nth-last-child(2) {
      flex: 1;
}

/* Footer main | Newsletter form */
footer form {
    display: flex;
    flex-wrap: wrap;
}

footer  input[type="email"] {
    border: 0;
    padding: 0.625rem;
    margin-top: 0.3125rem;
}

footer input[type="submit"] {
    background-color: var(--active-color);
    color: #fff;
    cursor: pointer;
    border: 0;
    padding: 0.625rem 0.9375rem;
    margin-top: 0.3125rem;
}
</style>
<footer>
  <!-- Footer main -->
  <section class="footer-main">
    <div class="footer-main-item">
      <h2 class="footer-title">About</h2>
      <ul>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Customers</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-main-item">
      <h2 class="footer-title">Resources</h2>
      <ul>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">eBooks</a></li>
        <li><a href="#">Webinars</a></li>
      </ul>
    </div>
    <div class="footer-main-item">
      <h2 class="footer-title">Contact</h2>
      <ul>
        <li><a href="#">Help</a></li>
        <li><a href="#">Sales</a></li>
        <li><a href="#">Advertise</a></li>
      </ul>
    </div>
    <div class="footer-main-item">
      <h2 class="footer-title">Stay Updated</h2>
      <p>Subscribe to our newsletter to get our latest news.</p>
      <form>
        <input type="email" name="email" placeholder="Enter email address">
        <input type="submit" value="Subscribe">
      </form>
    </div>
  </section>

  <!-- Footer social -->
  <section class="footer-social">
    <ul class="footer-social-list">
      <li><a href="#"><i class="fab fa-facebook"></i></a></li>
      <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
      <li><a href="#"><i class="fab fa-github"></i></a></li>
      <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
      <li><a href="#"><i class="fab fa-youtube"></i></a></li>
    </ul>
  </section>

  <!-- Footer legal -->
  <section class="footer-legal">
    <ul class="footer-legal-list">
      <li><a href="#">Terms &amp; Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li>&copy; 2024 Copyright Shopaholic Inc.</li>
    </ul>
  </section>
</footer>
`;

export default class Footer extends HTMLElement {
    constructor() {
        super();

    }
    
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content);
    }

}
