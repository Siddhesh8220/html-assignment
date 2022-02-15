function render() {
    const products = JSON.parse(localStorage.getItem('products'));
    const output = document.getElementById('tbody');

    const rows = products.map(product => {
        return `
            <tr>
                <td><img style="width:50px;height:50px" src="${product.product_image}" alt="image"/></td>
                <td>${product.product_name}</td>
                <td>${product.product_description}</td>
                <td>${product.price}</td>
                <td>${product.measurement_unit}</td>
                <td> 
                    <button class="btn btnbtn btn-outline-primary" onclick = "handleEdit('${product.product_id}')"> Edit </button>
                    <button class="btn btnbtn btn-outline-primary" onclick = "handleDelete('${product.product_id}')"> Delete </button>
                </td>
            </tr>`;
    }).join('');

    output.innerHTML = `${rows}`;
}

function onButtonClick(){
    window.location.href = "./index.html"
}

function handleEdit(id){
    var query = new URLSearchParams();
    query.append("id", id);
    location.href = "edit.html?" + query.toString();
}

function handleDelete(id){
    const products = JSON.parse(localStorage.getItem('products'));
    console.log(products);
    for (var i = products.length - 1; i >= 0; i--) {
        if (products[i].product_id == id) {
            products.splice(i, 1);
        }
    }
    localStorage.setItem("products", JSON.stringify(products));
    location.reload(); 
}

render();