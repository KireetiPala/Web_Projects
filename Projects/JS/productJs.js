
function storeData() {
    event.preventDefault();

    // get unique ID's values from HTML tags where user gives input.
    var productID = document.getElementById("productID").value;
    var productName = document.getElementById("productName").value;
    var productDesc = document.getElementById("productDesc").value;
    var category = document.getElementById("category").value;

    // create an object and store those values fetched above.
    var productDetails = {
        productID:productID,
        productName:productName,
        productDesc:productDesc,
        category:category
    };

    // validation to check if user enter same unique product information. if so then do not allow
    // otherwise store all information entered through object name in terms of string format
    var productAvailability = localStorage.getItem(productID);
    if (productAvailability){
        alert("Product is available already, do not try to add again");
        return;
    } else {
        localStorage.setItem(productID,JSON.stringify(productDetails));
        alert("Product information is added successfully");
    }

}

function retrieveData() {
    event.preventDefault();

    var getProducts = [];

    // get all available objects which are in string format from local storage and add them to an array.
    for (var i = 0; i < localStorage.length; i++) {
        getProducts.push(localStorage.getItem(localStorage.key(i)));
    }
   
    var tempProducts = [];
    // converting string format to objects format
    for (var j = 0; j < getProducts.length; j++) {
        tempProducts.push(JSON.parse(getProducts[j]));
    }


    // creating dynamic table to show available objects information.
    var dyncTable = document.getElementById("dyncTable");
    dyncTable.innerHTML = "";
    dyncTable.border = 2;

    var tableHeader = ["Product ID", "Product Name", "Product Description", "Category","Edit Data"];

    for (var k =0; k <tempProducts.length; k++) {

        var row                 = dyncTable.insertRow(k);
        var productID           = row.insertCell(0);
        var productName         = row.insertCell(1);
        var productDesc         = row.insertCell(2);
        var category            = row.insertCell(3);
        var editButton          = row.insertCell(4);

        productID.innerHTML     = tempProducts[k].productID;
        productName.innerHTML   = tempProducts[k].productName;
        productDesc.innerHTML   = tempProducts[k].productDesc;
        category.innerHTML      = tempProducts[k].category;

        var btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('name', 'javaEdit');
        btn.setAttribute('value', 'Edit data');   
        editButton.appendChild(btn);    
        
        if (k == 0) {
            var headerRow      = dyncTable.insertRow(k);
            for (var h = 0; h < tableHeader.length; h++) {
                var th = document.createElement('th');
                th.innerHTML = tableHeader[h];
                headerRow.appendChild(th);
        }
        }        
    }    
}


