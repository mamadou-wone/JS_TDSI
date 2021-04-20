// YOUR NAME HERE

// === constants ===
const MAX_QTY = 9;
const productIdKey = "product";
const orderIdKey = "order";
const inputIdKey = "qte";

// === global variables  ===
// the total cost of selected products 
var total = 0;



// function called when page is loaded, it performs initializations 
var init = function() {
    createShop();
    getItemInCard();
    deleteItem();

    // TODO : add other initializations to achieve if you think it is required
}
window.addEventListener("load", init);



// usefull functions

/*
 * create and add all the div.produit elements to the div#boutique element
 * according to the product objects that exist in 'catalog' variable
 */
var createShop = function() {
    var shop = document.getElementById("boutique");
    for (var i = 0; i < catalog.length; i++) {
        shop.appendChild(createProduct(catalog[i], i));
    }
}

/*
 * create the div.produit elment corresponding to the given product
 * The created element receives the id "index-product" where index is replaced by param's value
 * @param product (product object) = the product for which the element is created
 * @param index (int) = the index of the product in catalog, used to set the id of the created element
 */
var createProduct = function(product, index) {
    // build the div element for product
    var block = document.createElement("div");
    block.className = "produit";
    // set the id for this product
    block.id = index + "-" + productIdKey;
    // build the h4 part of 'block'
    block.appendChild(createBlock("h4", product.name));

    // <figure><img src="images/nounours1.jpg" alt="Nounours marron"></figure>
    let figure = document.createElement('figure')
    img = document.createElement('img')
    img.src = product.image
    figure.appendChild(img)
    block.appendChild(figure);
    // /!\ should add the figure of the product... does not work yet... /!\ 
    // block.appendChild(createFigureBlock(product).appendChild(figure));

    // build and add the div.description part of 'block' 
    block.appendChild(createBlock("div", product.description, "description"));
    // build and add the div.price part of 'block'
    block.appendChild(createBlock("div", product.price, "prix"));
    // build and add control div block to product element
    block.appendChild(createOrderControlBlock(index));
    return block;
}


/* return a new element of tag 'tag' with content 'content' and class 'cssClass'
 * @param tag (string) = the type of the created element (example : "p")
 * @param content (string) = the html wontent of the created element (example : "bla bla")
 * @param cssClass (string) (optional) = the value of the 'class' attribute for the created element
 */
var createBlock = function(tag, content, cssClass) {
    var element = document.createElement(tag);
    if (cssClass != undefined) {
        element.className = cssClass;
    }
    element.innerHTML = content;
    return element;
}

/*
 * builds the control element (div.controle) for a product
 * @param index = the index of the considered product
 *
 * TODO : add the event handling, 
 *   /!\  in this version button and input do nothing  /!\  
 */
var createOrderControlBlock = function(index) {
    var control = document.createElement("div");
    control.className = "controle";

    // create input quantity element
    var input = document.createElement("input");
    input.id = index + '-' + inputIdKey;
    input.type = "number";
    input.step = "1";
    input.value = "0";
    input.min = "0";
    input.max = MAX_QTY.toString();
    // add input to control as its child
    control.appendChild(input);

    // create order button
    var button = document.createElement("button");
    button.className = 'commander';
    button.id = index + "-" + orderIdKey;
    button.disabled = true;
    // add control to control as its child
    control.appendChild(button);
    input.addEventListener('change', () => {
        // console.log(input.value);
        if (input.value > 0) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    })
    button.addEventListener('click', () => {
        addToCard(document.getElementById(index + '-product'), index,
            input.value, catalog[index].price
        );
        location.reload();
    });
    // the built control div node is returned
    return control;
}


var addToCard = (product, index, price, quantity) => {
    let allChild = product.children;
    let container = document.getElementById("achats")
    let block = document.createElement("div");
    block.id = index + "-achat";
    block.className = "achat";


    block.appendChild(createBlock('figure', allChild[1].innerHTML));
    block.appendChild(createBlock('h4', allChild[0].innerHTML));
    block.appendChild(createBlock('div', price, 'quantite'));
    block.appendChild(createBlock('div', quantity, 'prix'))
    let remove = createBlock('div', '', 'controle')
    let btn = createBlock('button', '', 'retirer');
    btn.id = index + '-remove';
    remove.appendChild(btn);
    remove.addEventListener('click', () => {
        console.log('click');
    });
    block.appendChild(remove);
    let myDiv = createBlock('div', '');
    myDiv.appendChild(block)
    console.log(myDiv);
    localStorage.setItem(allChild[0].innerHTML, myDiv.innerHTML)

}

var getItemInCard = () => {
    let card = document.getElementById("achats")
    console.log(card);
    if (localStorage.length != 0) {
        catalog.forEach(element => {
            if (localStorage[element.name]) {
                let content = localStorage.getItem(element.name);
                // console.log(content);
                achats.innerHTML += `${content}`;
            }
        });
    }
}

// getItemInCard()
/*
 * create and return the figure block for this product
 * see the static version of the project to know what the <figure> should be
 * @param product (product object) = the product for which the figure block is created
 *
 * TODO : write the correct code
 */
var createFigureBlock = function(product) {
    // this is absolutely not the correct answer !
    // TODO 
    let figure = document.createElement('figure')
    img = document.createElement('img')
    img.src = product.image
    figure.appendChild(img)
    return createBlock("figure", "", "");
}


var deleteItem = () => {
    let card = document.querySelectorAll(".achat");
    console.log(card);
    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        // console.log(element.children);
        element.children[4].addEventListener('click', () => {
            localStorage.removeItem(element.children[1].innerHTML);
            location.reload();
        })

    }
}