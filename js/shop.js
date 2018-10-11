function postList() {
    // Call Web API to get a list of post
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
    // Iterate over the collection of data
    $.each(posts, function (index, post) {
        // Add a row to the post table
        postAddProducts(post);
    });
}

function postAddProducts(post) {
    // Check if <tbody> tag exists, add one if not
    if ($("#postTable tbody").length == 0) {
        $("#postTable").append("<tbody></tbody>");
    }
    // Append row to <table>
    $("#product_area ul").append(
        CreateProduct(post));
}

function CreateProduct(post) {
    "<div id=\"\"+post.id+\"\>\n" +
    "        <div id=\"product_img\">\n" +
    "          <img src=\"product1.jpg\" alt=\"\"> \n" +
    "        </div>\n" +
    "        <div id=\"product_title\">\n" +
    "          <h2>Fucking Good Shit Stairs</h2>\n" +
    "        </div>\n" +
    "        <div id=\"product_desc\">\n" +
    "          <p>\n" +
    "            Good quality shit stairs fresh from the labour camps in China, only worked on by Apple approved child workers.\n" +
    "          </p>\n" +
    "        </div>\n" +
    "        <div id=\"product_shop_buy\">\n" +
    "          <div id=\"product_price\">\n" +
    "            <p>PRICE:2.000.000$</p>\n" +
    "          </div>\n" +
    "          <div id=\"product_buy\">\n" +
    "            <p><a href=\"#\">ADD TO CART</a>\n" +
    "            </p>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>"
}