const cards = document.querySelectorAll('.tabs__card');
const names = [];
const models = [];
const prices = []

fetch('xml/data.xml').then(response => {
    return response.text();

}).then(xmlData => {
    const xmlDoc = new DOMParser().parseFromString(xmlData, 'text/xml');
    const products = xmlDoc.querySelectorAll('product');

    for(let product of products) {
        names.push(product.querySelector('name').textContent);
        models.push(product.querySelector('model').textContent);
        prices.push(product.querySelector('price').textContent);
    }
    cards.forEach((card, index) => {
        card.querySelector('.tabs__card-title').textContent = names[index];
        card.querySelector('.tabs__card-subtitle').textContent = models[index];
        card.querySelector('.tabs__card-price').textContent = prices[index];
    })
    
});

console.log(names);




// let temp = [];
// for(let i = 0; i < names.length; i++) {
//     for(let j = 0; j < cards.length; j++) {
        
//         temp.push(cards[j].querySelector('.tabs__card-title').textContent);
        
//     }
// }


// for (let product of products) {
//     const prodName = product.querySelector('name').textContent;
//     const prodModel = product.querySelector('model').textContent;
//     const prodPrice = product.querySelector('price').textContent;

//     // console.log(prodName, prodModel, prodPrice);

//     cards.forEach(card => {
//         card.querySelector('.tabs__card-title').textContent = prodName;

//     })

// }