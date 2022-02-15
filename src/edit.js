var id;
var products;
var searchIndex;

function load(){
    const params = new URLSearchParams(window.location.search);
    id = params.get("id");
    console.log(id);
    if(id !=null){
    products = JSON.parse(localStorage.getItem("products"));
    searchIndex = products.findIndex((product) => product.product_id==id);
    document.getElementById("product_name").value = products[searchIndex].product_name;
    document.getElementById("measurement_unit").value = products[searchIndex].measurement_unit;
    document.getElementById("price").value = products[searchIndex].price;
    document.getElementById("product_description").value = products[searchIndex].product_description;
    document.getElementById("product_image").value = products[searchIndex].product_image;
    }
}

function handleSubmit(){
    let productObject = {};
    productObject.product_id = id;
    productObject.product_name = document.getElementById("product_name").value;
    productObject.measurement_unit = document.getElementById("measurement_unit").value;
    productObject.price = document.getElementById("price").value;
    productObject.product_image = document.getElementById("product_image").value;
    productObject.product_description = document.getElementById("product_description").value;
    products[searchIndex] = productObject;
    localStorage.setItem("products",JSON.stringify(products));
}