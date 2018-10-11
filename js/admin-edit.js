$('#edit-product-form').on('submit',function(e){
    e.preventDefault();
    var productName = $( "#product-name" ).val();
    var productDesc = $( "#product-description" ).val();
    var productPrice = $( "#product-price" ).val();
    var productType = $( "#product-type" ).val();
    var productImageLink = $( "#product-image-link" ).val();

    $.ajax({
        url: "https://stairsprojectproduction.azurewebsites.net/api/products",
        type: 'PUT',
        data: JSON.stringify({
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