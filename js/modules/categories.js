import {populateProductList, addProductToCartButton} from '/js/modules/catalog.js';
import {detailButton} from '/js/modules/modal.js';

function distinctSections(items) {
    let mapped = [...items.map(item => item.section)];
    let unique = [...new Set(mapped)];
    return unique;
}

const sectionName = section => {
    let myDiv = document.createElement('div');
    myDiv.setAttribute('class', "py-2 px-4 bg-dark text-white mb-3");
    let strong = document.createElement('strong');
    strong.setAttribute('class', "small text-uppercase fw-bold");
    strong.innerText = section;
    myDiv.appendChild(strong);
    return myDiv;
}

const liElement = obj => `
<li><a class="reset-anchor category-item" href="#!" data-id="${obj.id}">${obj.name}</a></li>
`;

let ulElement = items => {
    let ul = document.createElement('ul');
    ul.setAttribute('class', "list-unstyled categories small text-muted");
    let res = '';
    for (let item of items) {
        res += liElement(item);
    }
    ul.innerHTML = res;
    return ul;
}

function categoriesCollation(distinct, categories) {
    let result = [];
    let i = 0;

    for (let section of distinct) {
        result[i] = categories.filter(item => item.section === section);
        i++;
    }
    return result;
}

export const populateCategories = (categoryContainer, coragories) => {
    let distinct = distinctSections(categories);

    // console.log(distinct)
    let collation = categoriesCollation(distinct, categories);

    for (let i=0; i<distinct.length; i++) {
        categoryContainer.appendChild(sectionName(distinct[i]));
        categoryContainer.appendChild(ulElement(collation[i]));
    }

}

export function renderCategory(productContainer, selector, products, cart) {
    const categoryItems = document.querySelectorAll(selector);
    categoryItems.forEach(item => item.addEventListener('click', e =>{
        e.preventDefault();
        if(e.target.classList.contains('category-item')) {
            const category = e.target.dataset.id;
            const categoryFilter = items => items.filter(item => item.category == category);
            productContainer.innerHTML = populateProductList(categoryFilter(products));
        }else{
            productContainer.innerHTML = populateProductList(products);
        }

        addProductToCartButton(cart);
        detailButton(cart, products);
    }))
}


const badgeTemplate = item => `
<div class="form-check mb-1">
<input class="form-check-input" type="checkbox" id="id-${item}" value="${item}" name="badge">
<label class="form-check-label" for="id-${item}">${item}</label>
</div>
`;


export const renderShowOnly = (showOnly, products, productContainer) => {

    // let badges = [...new Set([...products.map(item => item.badge.title)])];
    let badges = [...new Set([...products.map(item => item.badge.title)].filter(item=>item !=''))];
    // console.log(badges)

    showOnly.innerHTML = badges.map(item => badgeTemplate(item)).join("");

    let checkboxs = showOnly.querySelectorAll('input[name="badge"]');
    let values = [];

    const renderList = (products, value) => populateProductList(products.filter(product=>product.badge.title.includes(value)));

    checkboxs.forEach(item => {

        item.addEventListener('change', e => {
            if (e.target.checked) {
                values.push(item.value)
                productContainer.innerHTML = values.map(value => renderList(products, value)).join('');
            }else{
                if(values.length != 0) {
                    values.pop(item.value)
                    productContainer.innerHTML = values.map(value => renderList(products, value)).join('');
                }
            }
            if (values.length == 0){
                productContainer.innerHTML = populateProductList(products);
            }
        })
    })

}

const sortingOrders = [
    {key:"default", value:"Default sorting"},
    {key:"popularity", value:"Popularity products"},
    {key:"low-high", value:"Low to High price"},
    {key:"high-low", value:"High to Low price"},
]

export const sortingOptions = () => sortingOrders.map(item => `<option value="${item.key}">${item.value}</option>`).join('');

let compare = (key, order='asc') => (a, b) => {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) return 0;

    const A = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
    const B = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    comparison = (A > B) ? 1 : -1;
    return (order === 'desc') ? -comparison : comparison;
}

export function renderSelect(selectPicker, products, productContainer, cart) {
    selectPicker.innerHTML = sortingOptions();
    selectPicker.addEventListener('change', function(){
        switch(this.value) {
            case 'low-high':
                productContainer.innerHTML = populateProductList(products.sort(compare('price', 'asc')));
                break;
            case 'high-low':
                productContainer.innerHTML = populateProductList(products.sort(compare('price', 'desc')));
                break;
            case 'popularity':
                productContainer.innerHTML = populateProductList(products.sort(compare('stars', 'asc')));
                break;
            default:
                productContainer.innerHTML = populateProductList(products.sort(compare('id', 'asc')));
        }
    })
} 