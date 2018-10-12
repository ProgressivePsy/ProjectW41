function getProductsOnDiscount() {
    filter="D";
    localStorage.setItem("productTypeStorage", filter);
    window.location.href ='shop.html';
}

function getNewProducts() {
    filter="N";
    localStorage.setItem("productTypeStorage", filter);
    window.location.href ='shop.html';
}

