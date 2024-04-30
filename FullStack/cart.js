var products = [
    { id: 1, name: 'Vanilla', price: 10.00 },
    { id: 2, name: 'Coconut', price: 10.00 },
    { id: 3, name: 'Marshmallow', price: 10.00 },
    { id: 4, name: 'Bundle', price: 50.00 },
    { id: 5, name: 'Green Apple', price: 10.00 },
    { id: 6, name: 'Black Tie', price: 10.00 },
    { id: 7, name: 'Sweet & Spicy', price: 17.00 },
    { id: 8, name: 'Cloudy', price: 10.00 },
    { id: 9, name: 'Violet Room spray & Perfume', price: 27.00 },
    { id: 10, name: 'Coconut Room spray & Perfume', price: 27.00 },
    { id: 11, name: 'Earthy Bundle', price: 33.00 },
    { id: 12, name: 'Tangerine Room spray & perfume', price: 27.00 }
]; 

var cart = [];

function displayCart() {
    console.log(cart); 


function addToCart(id) {
    var product = products.find(function(product) {
        return product.id === id;
    });

    if (product) {
        cart.push(product);
    }
}

function removeFromCart(id) {
    var index = cart.findIndex(function(product) {
        return product.id === id;
    });

    if (index !== -1) {
        cart.splice(index, 1);
    }
}

function calculateTotal() {
    var total = 0;
    cart.forEach(function(product) {
        total += product.price;
    });
    return total;
}

function displayCart() {
    var cartElement = document.querySelector('#cart');
    cartElement.innerHTML = '';

    cart.forEach(function(product) {
        var productElement = document.createElement('div');
        productElement.textContent = 'Product Title: ' + product.title + ', Price: ' + product.price;
        cartElement.appendChild(productElement);
    });

    var totalElement = document.createElement('div');
    totalElement.textContent = 'Total: ' + calculateTotal();
    cartElement.appendChild(totalElement);
}

document.querySelectorAll('.btn-primary').forEach(function(button) {
    button.addEventListener('click', function(event) {
        var card = event.target.parentElement;
        var title = card.querySelector('.card-title').textContent;
        var price = parseFloat(card.querySelector('.card-text').textContent.replace('$', ''));
        var product = { title: title, price: price };
        addToCart(product);
        displayCart();
    });
});

window.onload = displayCart;

}