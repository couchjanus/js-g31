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
.contact-wrapper {
    display: grid;
    gap: 1rem;
}
  
.contact-header {
    grid-column: 1 / 8;
    grid-row: 1;

}
  
.contact-main {
    grid-column: 1 / 6;
    grid-row: 2;

}
  
.contact-sidebar {
    grid-column: 6 / 8;
    grid-row: 2;
    /* background: green; */
}

@media only screen and (max-width: 768px)  {
	.contact-main {
        grid-column: 1 / 4;
        grid-row: 2 ;
        /* background: blue; */
    }
      
    .contact-sidebar {
        grid-column: 1 / 4;
        grid-row: 3;
        /* background: green; */
    }
}

/* contacts */

.contact-container {
    display: grid;
    /* border: red 1px solid; */
    gap:1rem;
}

.contact-header {
    /* border: gold 1px solid; */
    grid-row: 1;
    grid-column: 1 / 4;
}

.contact-main {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    /* border: green 1px solid; */
}

.contact-sidebar {
    /* border: blue 1px solid; */
    grid-column: 3 / 4;
    grid-row: 2 / 3;
}

.contact-footer {
    /* border: magenta 1px solid; */
    grid-column: 1 / 4;
    grid-row: 4;
}

@media (max-width: 768px) {
    .contact-main {
        grid-column: 1 / 4;
        grid-row: 2;
    }
    .contact-sidebar {
        grid-column: 1 / 4;
        grid-row: 3;
    }
}

</style>
<section class="container py-5">
        
        <div class="contact-wrapper py-5">

          <header class="contact-header mb-5">
            <h2>Contact us</h2>
          </header>
          
          <div class="contact-main">
            <form class="form" id="contact-form" method="post" action="">
              <div class="form-container">
                <div class="input-group">  
                  <div class="">
                      <label class="form-label" for="name">Your firstname *</label>
                      <input class="form-control" type="text" name="name" id="name" placeholder="Enter your firstname" required="required">
                  </div>
                  <div class="">
                    <label class="form-label" for="surname">Your lastname *</label>
                    <input class="form-control" type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required">
                    </div>
                </div>
                
                <div class="input-group">
                  <label class="form-label" for="email">Your email *</label>
                  <input class="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required">
                </div>
                
                <div class="input-group">
                  <label class="form-label" for="message">Your message for us *</label>
                  <textarea class="rounded form-control" rows="4" name="message" id="message" placeholder="Enter your message" required="required"></textarea>
                </div>
                <div class="input-group">
                  <button class="btn btn-primary w-100" type="submit">Send message</button>
                </div>
              </div>
            </form>
          </div>
        
          <div class="contact-sidebar">
            <ul>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
              
             
          </div>
          
          
        
        </div>
    </section>
`;

export default class Contact extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(template.content);

    }

    makeContact = (item) => {
        let content =`<h3>${item.title}</h3>`;
        for(let [key, value] of Object.entries(item)) {
            if(!(key == 'title')){
                if(key == 'email') {
                    value=`<a class="btn btn-link href="mailto:">${value}</a>`
                }
                content += `<p>${value}</p>`;
            }
        }
        return content;
    }

    get contacts() {
        return this.getAttribute('contacts');
    }
    
    connectedCallback() {
       const address = this.shadow.querySelector('.contact-sidebar');
       let content = '';
       for (let [key, value] of Object.entries(contacts)){
        content += this.makeContact(value);
       }
       address.innerHTML = content;
    }

}
