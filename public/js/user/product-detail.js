// alert("sdfsdsdf");
let callApi = document.querySelector('.js-call-api');
var color = document.querySelectorAll('.js-color');
let memory = document.querySelectorAll('.js-memory');
let productId = document.querySelector('.js-product-id');
let trangThai = document.querySelector('.js-content-top__status');
let regularPrice = document.querySelector('.js-content-top__regular-price');
let salePrice = document.querySelector('.js-content-top__price-wrap');
let test = document.querySelector('.test-js');
// console.log(color);
// console.log(memory.value);
// console.log(trangThai.innerHTML);
// console.log(regularPrice.textContent);
// console.log(productId.value);
// console.log(productId.value);
a = 0;
b = 0;
if (color != null) {
    for (i = 0; i < color.length; i++) {
        if (color[i].checked) {
            a = color[i].value
                // console.log(a)
        }
    }
}
if (memory != null) {
    for (i = 0; i < memory.length; i++) {
        if (memory[i].checked) {
            b = memory[i].value
                // console.log(b)
        }
    }
}
if (a != 0 && b != 0) {
    callAB(a, b);
    for (i = 0; i < color.length; i++) {
        color[i].addEventListener('click', function(e) {
            if (color[i].checked) {
                a = color[i].value
                console.log(a)
                callAB(a, b);
            }
        });
    }
    for (i = 0; i < memory.length; i++) {

        memory[i].addEventListener('click', function(e) {
            console.log('sdsdv')
            if (memory[i].checked) {
                b = memory[i].value
                console.log(b)
                callAB(a, b);
            }
        });
    }
}
if (a == 0 && b != 0) {
    call0B();
}
if (a != 0 && b == 0) {
    callA0();
}

function callAB(a, b) {
    fetch(`http://127.0.0.1:8000/api/productDetails/${productId.value}/${a}/${b}`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            if (data.data.sale_price != null) {
                salePrice.innerHTML = data.data.sale_price
                regularPrice.innerHTML = data.data.regular_price
            } else {
                salePrice.innerHTML = data.data.regular_price
            }
        })
        .catch(error => console.error(error));
}

function callA0() {
    fetch(`http://127.0.0.1:8000/api/productDetails/${productId.value}/0/${b}`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            if (data.data.sale_price != null) {
                salePrice.innerHTML = data.data.sale_price
                regularPrice.innerHTML = data.data.regular_price
            } else {
                salePrice.innerHTML = data.data.regular_price
            }
        })
        .catch(error => console.error(error));
}

function call0B() {
    fetch(`http://127.0.0.1:8000/api/productDetails/${productId.value}/${a}/0`)
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            if (data.data.sale_price != null) {
                salePrice.innerHTML = data.data.sale_price
                regularPrice.innerHTML = data.data.regular_price
            } else {
                salePrice.innerHTML = data.data.regular_price
            }
        })
        .catch(error => console.error(error));
}


callApi.addEventListener("click", function() {
    fetch('http://127.0.0.1:8000/api/productDetails/125/23/37')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
});