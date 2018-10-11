$(window).on('load', function() {
   getProductById()
});

function getProductById() {
    $.ajax({
        url: 'https://stairsprojectproduction.azurewebsites.net/api/products/'+ localStorage.getItem("vOneLocalStorage"),
        type: 'GET',
        dataType: 'json',
        success: function (posts) {
            postAddProducts(posts);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function postAddProducts(post) {
        $("#product_area").append(
            CreateProduct(post));
}

function CreateProduct(post) {
    var product =
        "<div class=\"product\">\n" +
        "<div id="+post.id+">\n" +
        "<img src="+post.imageLink+" alt=\"\"> \n" +
        "</div>\n" +
        "<div id=\"product_title\">\n" +
        "<h2>"+post.name+"</h2>\n" +
        "</div>\n" +
        "<div id=\"product_desc\">\n" +
        " <p>\n" +
         post.desc +
        " </p>\n" +
        "</div>\n" +
        "<div id=\"product_shop_buy\">\n" +
        "<div id=\"product_price\">\n" +
        "<p>"+post.price+ ' €' +" </p>\n" +
        "</div>\n" +
        "<div id=\"product_buy\">\n" +
        "<p><a href=\"product_info.html\">ADD TO CART</a>\n" +
        "</p>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>"
    return product;
}
