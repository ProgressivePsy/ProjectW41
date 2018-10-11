$(window).on('load', function() {
    postList();
});

var pageNo=1;
function postList() {
    $.ajax({
        url: 'https://stairsprojectproduction.azurewebsites.net/api/products?currentPage='+pageNo+'&itemsPrPage=3',
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
        "<p><a onclick='setId("+post.id+")'>SHOW MORE</a>\n" +
        "</p>\n" +
        "</div>\n" +
        "</div>\n" +
        "</div>";
    return product;
}

function setId(id) {
    localStorage.setItem("vOneLocalStorage", id);
    window.location.href ='product_info.html';
}

function pageDown() {
    if(pageNo>=1) {
        pageNo = pageNo-1;
        $("#product_area").empty();
        postList();
    }
}

function pageUp() {
    pageNo=pageNo+1;
    $("#product_area").empty();
    postList();
}