function handleSubmit(){
    var productObject = {};
    productObject.product_id = 'id' + (new Date()).getTime();
    productObject.product_name = document.getElementById("product_name").value;
    productObject.measurement_unit = document.getElementById("measurement_unit").value;
    productObject.price = document.getElementById("price").value;
    productObject.product_image = document.getElementById("product_image").value;
    console.log(productObject.product_image);
    productObject.product_description = document.getElementById("product_description").value;
    objectarray = JSON.parse(localStorage.getItem("products")) || []; 
    objectarray.push(productObject);
    localStorage.setItem("products",JSON.stringify(objectarray));
}


