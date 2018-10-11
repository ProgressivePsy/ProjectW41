$(window).on('load', function() {
    postList();
});

function postList() {
    $.ajax({
        url: 'https://stairsprojectproduction.azurewebsites.net/api/products',
        type: 'GET',
        dataType: 'json',
        success: function (posts) {
            postListSuccess(posts);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function postListSuccess(posts) {
    $.each(posts, function (index, post) {
        postAddProducts(post);
    });
}

function postAddProducts(post) {

    $("#product_area").append(
        CreateProduct(post));
}

function CreateProduct(post) {
    var product =
        "<div id='"+post.id+"' class=\"product\">\n" +
        "<div class=product_image>\n" +
        "<img height='250' src="+post.imageLink+" alt=\"\"> \n" +
        "</div>\n" +
        "<div id=\"product_title\">\n" +
        "<h2>"+post.name+"</h2>\n" +
        "</div>\n" +
        "<div id=\"product_desc\">\n" +
        "<p>\n"+
          post.desc+"\n" +
        "</p>\n" +
        "</div>\n" +
        "<div id=\"product_shop_buy\">\n" +
        "<div id=\"product_price\">\n" +
        "<p>"+post.price+" €"+"</p>\n" +
        "</div>\n" +
        "<div id=\"product_buy\">\n" +
        "<p><a href="+post.id+">SHOW MORE</a>\n" +
        "</p>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    return product;
}

/*
function loadProductPage(post) {
    var product =
        "<section id=\"product_area\"> +
        "<div class=\"product\"> +
        "<div id=\"product_img\"> +
        "<img src="+post.imageLink+" alt=\"\"> +
        "</div> +
        <div id="product_title">
        <h2>ESCAPE YOUR CHILD</h2>
    </div>
    <div id="product_desc">
        <p>
        Good quality shit stairs fresh from the labour camps in China, only worked on by Apple approved child workers.
    <br><br>
    This stair in particularly excells in escaping the sticky fingers of your disgusting child, the steep design will<br> either have them fall down or not be able to follow you, for the parent who is sick of their child.
    </p>
    </div>
    <div id="product_shop_buy">
        <div id="product_price">
        <p>PRICE:2.000.000$</p>
    </div>
    <div id="product_buy">
        <p><a href="product_info.html">ADD TO CART</a>
    </p>
    </div>
    </div>
    </div>
    </section>
    }
    */

