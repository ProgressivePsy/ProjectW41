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

    $("#needBody").append(
        CreateProduct(post));
}

function CreateProduct(post) {
    var product =
      "<tr id='"+post.id+"'>" +
        "<td>" + post.name + "</td>" +
        "<td>" + post.price + "</td>" +
        "<td>" + post.type + "</td>" +
        "<td>" +
        "<a class='edit-button' onclick='setId("+post.id+")'>EDIT</a>"+
        "<a class='remove-button' onclick='removeProduct("+post.id+")'>REMOVE</a>" +
        "</td>" +
        "</tr>";
    return product;
}

function removeProduct(id) {
    $.ajax({
        url: 'https://stairsprojectproduction.azurewebsites.net/api/products/' + id,
        type: 'DELETE',
        dataType: 'json',
        success: function (posts) {
            postListSuccess(posts);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

function setId(id) {
    localStorage.setItem("vOneLocalStorage", id);
    window.location.href ='admin-edit.html';
}