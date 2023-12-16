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

.bg-cover {
    background-size: cover !important;
}

.bg-center {
    background-position: center center !important;
}

.bg-fixed {
    background-attachment: fixed !important;
}

.py-5 {
    padding: 3rem 0;
}
.mt-5 {
    margin-top: 3rem;
}
.px-4 {
    padding-left: 2rem;
    padding-right: 2rem;
}
.container {
    width: 97%;
    margin: 0 auto;  
}

.text-right {
    text-align: right;
}

</style>
<section class="divider bg-cover bg-center bg-fixed py-5 mt-5" style="background: url(/images/divider-bg.jpg)">
          
    <div class="container py-5 px-4 text-right">
        <p>New actions and events</p>
        <h2>Notify me for events please </h2>
        <a href="shop.html">Subscribe</a>
    </div>
</section>
`;

export default class Divider extends HTMLElement {
    constructor() {
        super();

    }
    
    connectedCallback() {
        const shadow = this.attachShadow({mode: 'closed'});
        shadow.appendChild(template.content);
    }

}
