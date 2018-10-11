$(window).on('load', function() {
    getSelectedItem()
});

function fillTheFields(post)
{
    $( "#product-name" ).val(post.name);
    $( "#product-description" ).val(post.desc);
    $( "#product-price" ).val(post.price);
    $( "#product-type" ).val(post.type);
    $( "#product-image-link" ).val(post.imageLink);
}

function getSelectedItem() {
    $.ajax({
        url: 'https://stairsprojectproduction.azurewebsites.net/api/products/'+ localStorage.getItem("vOneLocalStorage"),
        type: 'GET',
        dataType: 'json',
        success: function (post) {
            fillTheFields(post);
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
}

$('#edit-product-form').on('submit',function(e){
    e.preventDefault();
    var productName = $( "#product-name" ).val();
    var productDesc = $( "#product-description" ).val();
    var productPrice = $( "#product-price" ).val();
    var productType = $( "#product-type" ).val();
    var productImageLink = $( "#product-image-link" ).val();

    $.ajax({
        url: "https://stairsprojectproduction.azurewebsites.net/api/products/"+ localStorage.getItem("vOneLocalStorage"),
        type: 'PUT',
        data: JSON.stringify({
            "Id": localStorage.getItem("vOneLocalStorage"),
            "Name": productName,
            "Desc": productDesc,
            "Price": productPrice,
            "Type" : productType,
            "ImageLink" : productImageLink
        }),
        processData: false,
        contentType: 'application/json',
        success: function (comments) {
            console.log("SUCCESS!!!");
        },
        error: function (request, message, error) {
            handleException(request, message, error);
        }
    });
});

