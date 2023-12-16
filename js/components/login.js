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

#login {
    z-index: 10;

    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: white;
    border-radius: 1rem;
    
    border: 1px solid rgba(0, 0, 0, 0.5);

    overflow-x: hidden;
    overflow-y: auto;
    max-width: 50%;
    

}


.close {
  
  position: absolute;
  right: 1rem;
  top: 1rem;

  text-align: center;
  text-decoration: none;
  font-weight: bold;
  background: lightgrey;
  color: #000;

  width: 24px;
  height: 24px;
  line-height: 24px;
  
  border-radius: 24px;
  border: grey 1px solid;
  
  transition: all 0.5s ease-out;

  z-index: 10;
}

.close:hover {
  background: salmon;
  border-color: salmon;
  color: #fff;
  transition: all 0.5s ease-out;
}

.login-container {
    display: flex;

}

.login-container h2 {
  margin: 0 0 1rem 0;
  font-size: 2rem;
  font-weight: 700;  
}

.login-container p {
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.4rem;  
}

.col-left {
    flex: 1;
    clip-path: polygon(0 0, 0% 100%, 100% 0);

    background: linear-gradient(to right bottom, salmon 0%, white 100%);

}


.col-right {
    flex: 1;
    padding: 1rem 1.5rem;
}

.login-text {
  position: relative;
  width: 100%;
  color: #fff;
  padding: 1rem 1.5rem;
}


.login-text .btn {
  display: inline-block;
  padding: .5rem 1.2rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-decoration: none;
  border-radius: 30px;
  color: #ffffff;
  outline: none;
  border: 1px solid #ffffff;
  box-shadow: inset 0 0 0 0 #ffffff;
  transition: .3s;
}

.login-text .btn:hover {
  color: salmon;
  box-shadow: inset 150px 0 0 0 #ffffff;
}

.login-form {
  position: relative;
  width: 100%;

}


.login-form p:last-child {
  margin: 0;
  padding-top: 3px;
}

.login-form p a {
  color: salmon;
  font-size: 14px;
  text-decoration: none;
}

.login-form label {
  display: block;
  width: 100%;
  margin-bottom: 2px;
  letter-spacing: .5px;
}

.login-form p:last-child label {
  width: 60%;
  float: left;
}

.login-form label span {
  color: #ff574e;
  padding-left: 2px;
}

.login-form input {
  display: block;
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  outline: none;
  border: 1px solid #cccccc;
  border-radius: 30px;
}

.login-form input:focus {
  border-color: #ff574e;
}


.login-form input[type=submit] {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  color: salmon;
  font-size: 1.4rem;
  letter-spacing: 1px;
  cursor: pointer;
  background: transparent;
  border: 1px solid salmon;
  border-radius: 30px;
  box-shadow: inset 0 0 0 0 salmon;
  transition: .3s;
}


.login-form input[type=submit]:hover {
  color: #ffffff;
  box-shadow: inset 250px 0 0 0 salmon;
}


dialog::backdrop {
 background: repeating-linear-gradient(
   45deg,
   rgba(0, 0, 0, 0.2),
   rgba(0, 0, 0, 0.2) 1px,
   rgba(0, 0, 0, 0.3) 1px,
   rgba(0, 0, 0, 0.3) 20px
 );
/* backdrop-filter: blur(3px);*/
}


@media (max-width: 45rem) {
            
    .login-container {
        flex-wrap: wrap;
        flex-direction: row;
    }
    
    .login-container .col-left, .login-container .col-right {
                
        flex: auto;
        width: 100%;
    }

} 
</style>
<dialog id="login">

  <a href="#!" title="Close" class="close fas fa-times"></a>

  <div class="login-container">
  <div class="col-left">
    <div class="login-text">
      <h2>Welcome Back</h2>
      <p>Create your account.<br>It's totally free.</p>
      <a class="btn" href="">Sign Up</a>
    </div>
  </div>

  <div class="col-right">
    <div class="login-form">
      <h2>Login</h2>
      <form>
        <p>
          <label>Username or email address<span>*</span></label>
          <input type="text" placeholder="Username or Email" required>
        </p>
        <p>
          <label>Password<span>*</span></label>
          <input type="password" placeholder="Password" required>
        </p>
        <p>
          <input type="submit" value="Sing In" />
        </p>
        <p>
          <a href="">Forget Password?</a>
        </p>
      </form>

    </div>
  </div>
  </div>
  
</dialog>
`;

export default class Login extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.appendChild(template.content);

    }
    
    connectedCallback() {
       const close = this.shadow.querySelector('.close');
       close.addEventListener('click', () => this.shadow.getElementById('login').close());
    }

}
