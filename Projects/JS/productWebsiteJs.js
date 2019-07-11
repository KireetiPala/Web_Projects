
// Below code is for Clock
function clocky() {
    var h, m, s, clock, color;

    var object = new Date();
    h = object.getHours();
    m = object.getMinutes();
    s = object.getSeconds();

    if (h <= 9) {
        h = '0' + h;
    }
    if (m <= 9) {
        m = '0' + m;
    }
    if (s <= 9) {
        s = '0' + s;
    }
    clock = h + "&nbsp" + ":" + "&nbsp" + m + "&nbsp" + ":" + "&nbsp" + s;
    color = "#" + h + m + s;

    var object2 = function () {
        document.getElementById("time").innerHTML = clock;
        document.getElementById("time").style.color = "#fff";
        document.body.style.backgroundColor = color;
    }
    setTimeout(object2, 1000);

    setTimeout(clocky, 1000);
}
clocky();

// Below code is for login form page

function onLoginFormSubmit() {
    var isValid = "";
    var admintype = "";

    if (validateLoginForm()) {
        var dbboolean = checkUserDataInDB();
        if (dbboolean == true) {
            isValid = true;
            admintype = confirmLoginType();
            if (admintype == "A") {
                setTimeout(function () {
                    window.location = "adminPage.html";
                });
            } else {
                setTimeout(function () {
                    window.location = "customerPage.html";
                });
            }
            alert("Your are successfully Login, Congrates..!")
            resetFormFeilds();
        } else {
            isValid = false;
        }
    } else {
        isValid = false;
    }
    return isValid;
}

function validateLoginForm() {
    event.preventDefault();

    document.getElementById("error_EmailID").innerHTML = "";
    document.getElementById("error_Password").innerHTML = "";

    var email = false;
    var psd = false;

    loginEmailID.onblur = function () {
        checkEmailID();
    };

    loginPassword.onblur = function () {
        checkPassword();
    };

    function checkEmailID() {
        var mailMsg = "Please enter email ID";
        var invalidMailMsg = "Please enter valid email ID";

        var emailID = document.getElementById("loginEmailID").value;

        if (emailID == "") {
            document.getElementById("error_EmailID").innerHTML = mailMsg;
            email = true;
        } else {
            validateEmail(emailID);
            if (isValid == true) {
                email = false;
                document.getElementById("error_EmailID").innerHTML = "";
            } else {
                document.getElementById("error_EmailID").innerHTML = invalidMailMsg;
                email = true;
            }
        }
    }

    function checkPassword() {
        var passwordMsg = "Please enter your password";
        var invalidPasswordMsg = "Please enter valid password";
        var password = document.getElementById("loginPassword").value;
        if (password == "") {
            document.getElementById("error_Password").innerHTML = passwordMsg;
            psd = true;
        } else {
            validatePassword(password);
            if (isValid == true) {
                document.getElementById("error_Password").innerHTML = "";
            } else {
                document.getElementById("error_Password").innerHTML = invalidPasswordMsg;
                psd = true;
            }
        }

    }

    checkEmailID();
    checkPassword();

    if (email == false && psd == false) {
        return true;
    } else {
        return false;

    }
}

function checkUserDataInDB() {
    var errorpsdMsg = "Please enter registered password..!";
    var erroremailMsg = "Email ID is not registered Yet..!"

    var EmailidE = document.getElementById("loginEmailID").value;
    var PasswordE = document.getElementById("loginPassword").value;
    var temp = [];

    temp = JSON.parse(localStorage.getItem(EmailidE));

    if (temp) {
        if (PasswordE == temp.PassWord) {
            return true;
        } else {
            document.getElementById("error_Password").innerHTML = errorpsdMsg;
            return false;
        }
    } else {
        document.getElementById("error_EmailID").innerHTML = erroremailMsg;
        return false;
    }
}

function confirmLoginType() {
    var loginemail = document.getElementById("loginEmailID").value;
    var getData = [];
    getData = JSON.parse(localStorage.getItem(loginemail));
    if (getData) {
        if (loginemail.substring(0, 6) == "admin_" || loginemail.substring(0, 6) == "Admin_") {
            admintype = "A";
        } else {
            admintype = "C";
        }
    }
    return admintype;
}

function resetFormFeilds() {
    document.getElementById("loginEmailID").value = "";
    document.getElementById("loginPassword").value = "";
}


// below code is for sign page
function onSignFormSubmit() {
    var isValid = "";

    if (validateSignInForm()) {
        storeSignInData();
        alert("You are successfully registered, Please try to Login now");
        resetRegisterForm();
        setTimeout(function () {
            window.location = "Login.html"
        });
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}

function validateSignInForm() {
    event.preventDefault();

    document.getElementById("error_FirstName").innerHTML = "";
    document.getElementById("error_lastName").innerHTML = "";
    document.getElementById("error_gender").innerHTML = "";
    document.getElementById("error_registeremailID").innerHTML = "";
    document.getElementById("error_registerpassword").innerHTML = "";
    document.getElementById("error_reenterpassword").innerHTML = "";
    document.getElementById("error_contactNum").innerHTML = "";

    var fName = false;
    var lName = false;
    var gder = false;
    var regEmail = false;
    var regpsd = false;
    var regreEpsd = false;
    var contactNum = false;

    firstName.onblur = function () {
        checkFirstName();
    }
    lastName.onblur = function () {
        checkLastName();
    }
    gender.onblur = function () {
        checkGender();
    }
    registerEmailID.onblur = function () {
        checkregisterEmailID();
    }
    registerPassword.onblur = function () {
        checkregPassword();
    }
    reenterPassword.onblur = function () {
        checkregRePassword();
    }
    regcontactNum.onblur = function () {
        checkContactNum();
    }

    function checkFirstName() {
        var fNameMsg = "Please enter your First Name";
        var fErrorMsg = "Please enter name with Alphabets";

        var firstName = document.getElementById("firstName").value;

        if (firstName == "") {
            fName = true;
            document.getElementById("error_FirstName").innerHTML = fNameMsg;
        } else {
            validateName(firstName);
            if (isValid == true) {
                fName = false;
                document.getElementById("error_FirstName").innerHTML = "";
            } else {
                fName = true;
                document.getElementById("error_FirstName").innerHTML = fErrorMsg;
            }
        }
    }

    function checkLastName() {
        var lNameMsg = "Please enter your Last Name";
        var lNameErrorMsg = "Please enter name with Alphabets"

        var lastName = document.getElementById("lastName").value;
        if (lastName == "") {
            lName = true;
            document.getElementById("error_lastName").innerHTML = lNameMsg;
        } else {
            validateName(lastName);
            if (isValid == true) {
                lName = false;
                document.getElementById("error_lastName").innerHTML = "";
            } else {
                lName = true;
                document.getElementById("error_lastName").innerHTML = lNameErrorMsg;
            }
        }
    }

    function checkGender() {
        var genderMsg = "Please select your Gender";

        var genderValue = document.getElementById("gender").value;

        if (genderValue == "") {
            gder = true;
            document.getElementById("error_gender").innerHTML = genderMsg;
        } else {
            if (genderValue == "Male" || genderValue == "Female") {
                gder = false;
                document.getElementById("error_gender").innerHTML = "";
            }
        }
    }

    function checkregisterEmailID() {
        var regEmailMsg = "Please enter your email ID";
        var regEmailErrMsg = "Please enter valid email ID";
        var alertMsg = "Entered email is already registered...!"

        var regEmailIdValue = document.getElementById("registerEmailID").value;

        if (regEmailIdValue == "") {
            regEmail = true;
            document.getElementById("error_registeremailID").innerHTML = regEmailMsg;
        } else {
            validateEmail(regEmailIdValue);
            if (isValid == true) {
                var DBflag = checkdatainDatabase(regEmailIdValue);
                if (DBflag == true) {
                    regEmail = true;
                    document.getElementById("error_registeremailID").innerHTML = alertMsg;
                } else {
                    regEmail = false;
                    document.getElementById("error_registeremailID").innerHTML = "";
                }
            } else {
                regEmail = true;
                document.getElementById("error_registeremailID").innerHTML = regEmailErrMsg;
            }
        }

    }

    function checkregPassword() {
        var regpsdMsg = "Please choose your password";
        var regpsdErrMsg = "Please enter valid Password";

        var regpsdValue = document.getElementById("registerPassword").value;

        if (regpsdValue == "") {
            regpsd = true;
            document.getElementById("error_registerpassword").innerHTML = regpsdMsg;
        } else {
            validatePassword(regpsdValue);
            if (isValid == true) {
                regpsd = false;
                document.getElementById("error_registerpassword").innerHTML = "";
            } else {
                regpsd = true;
                document.getElementById("error_registerpassword").innerHTML = regpsdErrMsg;
            }
        }
    }

    function checkregRePassword() {
        var regrepsdMsg = "Please re-enter your choosen password";
        var psdnotMatched = "Re-entered password is not matched";

        var regrepsdValue = document.getElementById("reenterPassword").value;

        if (regrepsdValue == "") {
            regreEpsd = true;
            document.getElementById("error_reenterpassword").innerHTML = regrepsdMsg;
        } else {
            var choosenPsd = document.getElementById("registerPassword").value;

            if (choosenPsd == regrepsdValue) {
                regreEpsd = false;
                document.getElementById("error_reenterpassword").innerHTML = "";
            } else {
                regreEpsd = true;
                document.getElementById("error_reenterpassword").innerHTML = psdnotMatched;
            }

        }
    }

    function checkContactNum() {
        var contactNumMsg = "Please enter your contact number";
        var contactNumErrMsg = "Please enter 10-digits valid number";

        var contactNumValue = document.getElementById("regcontactNum").value;

        if (contactNumValue == "") {
            contactNum = true;
            document.getElementById("error_contactNum").innerHTML = contactNumMsg;
        } else {
            validateContactNum(contactNumValue);
            if (isValid == true) {
                contactNum = false;
                document.getElementById("error_contactNum").innerHTML = "";
            } else {
                contactNum = true;
                document.getElementById("error_contactNum").innerHTML = contactNumErrMsg;
            }
        }
    }

    checkFirstName();
    checkLastName();
    checkGender();
    checkregisterEmailID();
    checkregPassword();
    checkregRePassword();
    checkContactNum();

    if (fName == false && lName == false && gder == false && regEmail == false && regpsd == false
        && regreEpsd == false && contactNum == false) {
        return true;
    } else {
        return false;
    }
}

function storeSignInData() {
    var FirstName = document.getElementById("firstName").value;
    var LastName = document.getElementById("lastName").value;
    var Gender = document.getElementById("gender").value;
    var EmailID = document.getElementById("registerEmailID").value;
    var PassWord = document.getElementById("registerPassword").value;
    var ContactNum = document.getElementById("regcontactNum").value;
    var items = document.getElementsByClassName("interests");
    var Interest = "";

    for (i = 0; i < items.length; i++) {
        if (items[i].checked == true) {
            Interest += items[i].value;
        }

    }
    var SignInFormObject = {
        FirstName: FirstName,
        LastName: LastName,
        Gender: Gender,
        EmailID: EmailID,
        PassWord: PassWord,
        ContactNum: ContactNum,
        Interest: Interest
    };

    localStorage.setItem(EmailID, JSON.stringify(SignInFormObject));
}

function resetRegisterForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("registerEmailID").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("reenterPassword").value = "";
    document.getElementById("regcontactNum").value = "";
    clearCheckboxes();
}

// A password field that must contain 8 or more characters that are of at least one number, 
// and one uppercase and lowercase letter

function validatePassword(password) {
    var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    isValid = passwordPattern.test(password);
    return isValid;
}

function checkdatainDatabase(EmailID) {
    var regEmailID = document.getElementById("registerEmailID").value;
    var databaseFlag = localStorage.getItem(regEmailID);

    if (databaseFlag) {
        return true;
    } else {
        return false;
    }
}

function clearCheckboxes() {
    var checkboxes = document.getElementsByClassName("interests");
    for (i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked == true) {
            checkboxes[i].checked = false;
        }
    }
}

// below code is admin page
var productsDetailsArray = [];
var selectedIndex = -1;

function onAddProductPressed() {
    isValid = "";
    if (validateCRUDProductForm()) {
        isValid = true;
        addProductRecord();
    } else {
        isValid = false;
    }

}

function validateCRUDProductForm() {
    event.preventDefault();

    document.getElementById("error_productName").innerHTML = "";
    document.getElementById("error_productID").innerHTML = "";
    document.getElementById("error_productDesc").innerHTML = "";
    document.getElementById("error_productPrice").innerHTML = "";
    document.getElementById("error_productImageURL").innerHTML = "";
    document.getElementById("error_productDiscountPer").innerHTML = "";
    document.getElementById("error_discountPrice").innerHTML = "";

    var pName = false;
    var pNum = false;
    var pDesc = false;
    var pPrice = false;
    var pURL = false;
    var dPer = false;
    var dPrice = false;

    productName.onblur = function () {
        validateProductName();
    }
    productID.onblur = function () {
        validateproductId();
    }
    productDesc.onblur = function () {
        validateproductDesc();
    }
    productPrice.onblur = function () {
        validateproductPrice();
    }
    productImageURL.onblur = function () {
        validateproductImageURL();
    }
    productDiscountPer.onblur = function () {
        validateproductDiscountPer();
    }
    discountPrice.onblur = function () {
        validateDiscountPrice();
    }

    function validateProductName() {
        var pNameMsg = "Please enter Product Name";
        var pNameMsg1 = "Please enter Valid Product Name";

        var pNameValue = document.getElementById("productName").value;
        if (pNameValue == "") {
            pName = true;
            document.getElementById("error_productName").innerHTML = pNameMsg;
        } else {
            if (validatepNameValue(pNameValue)) {
                pName = false;
                document.getElementById("error_productName").innerHTML = "";
            } else {
                pName = true;
                document.getElementById("error_productName").innerHTML = pNameMsg1;
            }
        }
    }
    function validateproductId() {
        var pNumMsg = "Please enter Product ID";
        var pNumMsg1 = "Please enter valid Product ID";
        var pNumMsg2 = "Please enter unique Product ID which is not added already";

        var pNumValue = document.getElementById("productID").value;

        if (pNumValue == "") {
            pNum = true;
            document.getElementById("error_productID").innerHTML = pNumMsg;
        } else {
            if (validatepNumValue(pNumValue)) {
                if (selectedIndex === -1) {
                    if (piddupcheck(pNumValue)) {
                        pNum = false;
                        document.getElementById("error_productID").innerHTML = "";
                    }
                    else {
                        pNum = true;
                        document.getElementById("error_productID").innerHTML = pNumMsg2;
                    }
                } else {
                    pNum = false;
                    document.getElementById("error_productID").innerHTML = "";
                }
            }
            else {
                pNum = true;
                document.getElementById("error_productID").innerHTML = pNumMsg1;
            }
        }
    }
    function validateproductDesc() {
        var pDescMsg = "Please enter Product short description";

        var pDescValue = document.getElementById("productDesc").value;
        if (pDescValue == "") {
            pDesc = true;
            document.getElementById("error_productDesc").innerHTML = pDescMsg;
        } else {
            pDesc = false;
            document.getElementById("error_productDesc").innerHTML = "";
        }
    }
    function validateproductPrice() {
        var pPriceMsg = "Please enter Product Original Price";
        var pPriceMsg1 = "Please enter valid Product Price seperated by comma";

        var pPriceValue = document.getElementById("productPrice").value;
        if (pPriceValue == "") {
            pPrice = true;
            document.getElementById("error_productPrice").innerHTML = pPriceMsg;
        } else {
            if (validatepPriceValue(pPriceValue)) {
                pPrice = false;
                document.getElementById("error_productPrice").innerHTML = "";
            } else {
                pPrice = true;
                document.getElementById("error_productPrice").innerHTML = pPriceMsg1;
            }
        }
    }
    function validateDiscountPrice() {
        var dPriceMsg = "Please enter Product Discount Price";
        var dPriceMsg1 = "Please enter valid Discount Price seperated by comma";

        var dPriceValue = document.getElementById("discountPrice").value;
        if (dPriceValue == "") {
            dPrice = true;
            document.getElementById("error_discountPrice").innerHTML = dPriceMsg;
        } else {
            if (validatepPriceValue(dPriceValue)) {
                dPrice = false;
                document.getElementById("error_discountPrice").innerHTML = "";
            } else {
                dPrice = true;
                document.getElementById("error_discountPrice").innerHTML = dPriceMsg1;
            }
        }

    }
    function validateproductImageURL() {
        var pURLMsg = "Please enter Product Image URL";
        var pURLMsg1 = "Please enter valid Product Image URL";

        var pURLValue = document.getElementById("productImageURL").value;
        if (pURLValue == "") {
            pURL = true;
            document.getElementById("error_productImageURL").innerHTML = pURLMsg;
        } else {
            if (validatepURLValue(pURLValue)) {
                pURL = false;
                document.getElementById("error_productImageURL").innerHTML = "";
            } else {
                pURL = true;
                document.getElementById("error_productImageURL").innerHTML = pURLMsg1;
            }
        }
    }
    function validateproductDiscountPer() {
        var dPermsg = "Please enter Discount Percent";
        var dPermsg1 = "Please enter valid Discount Percent";

        var dPerValue = document.getElementById("productDiscountPer").value;
        if (dPerValue == "") {
            dPer = true;
            document.getElementById("error_productDiscountPer").innerHTML = dPermsg;
        } else {
            if (validatedPerValue(dPerValue)) {
                dPer = false;
                document.getElementById("error_productDiscountPer").innerHTML = "";
            } else {
                dPer = true;
                document.getElementById("error_productDiscountPer").innerHTML = dPermsg1;
            }
        }
    }

    validateProductName();
    validateproductId();
    validateproductDesc();
    validateproductPrice();
    validateDiscountPrice();
    validateproductImageURL();
    validateproductDiscountPer();

    if (pName == false && pNum == false && pDesc == false && pPrice == false && pURL == false && dPer == false && dPrice == false) {
        return true;
    } else {
        return false;
    }

}

function addProductRecord() {
    var ProductName = document.getElementById("productName").value;
    var ProductID = document.getElementById("productID").value;
    var ProductDesc = document.getElementById("productDesc").value;
    var ProductPrice = document.getElementById("productPrice").value;
    var ProductDPrice = document.getElementById("discountPrice").value;
    var ProductURL = document.getElementById("productImageURL").value;
    var ProductDiscount = document.getElementById("productDiscountPer").value;

    var ProductRecordObject = {
        ProductName: ProductName, ProductID: ProductID,
        ProductDesc: ProductDesc, ProductPrice: ProductPrice, ProductDPrice: ProductDPrice,
        ProductURL: ProductURL, ProductDiscount: ProductDiscount
    };
    if (selectedIndex === -1) {
        productsDetailsArray.push(ProductRecordObject);
    } else {
        for (var i = 0; i < productsDetailsArray.length; i++) {
            let tempAL = productsDetailsArray[i];
            if (tempAL.ProductID == selectedIndex) {
                console.log(i);
                productsDetailsArray.splice(i, 1, ProductRecordObject);
            }
        }
    }

    localStorage.setItem('ProductRecord', JSON.stringify(productsDetailsArray));
    document.getElementById("submit").value = "Add Product";
    refreshData();
    resetadminForm();
    alert("Product information is added successfully. Please check below..!")
}

function deleteProductRecord(ProductID) {
    console.log(ProductID);
    productsDetailsArray = productsDetailsArray.filter(item => item.ProductID != ProductID);
    localStorage.ProductRecord = JSON.stringify(productsDetailsArray);
    refreshData();
}

function editProductRecord(ProductID) {
    selectedIndex = ProductID;
    var ProductRecordObject = {};
    productsDetailsArray.map(items => {
        if (items.ProductID == ProductID) {
            ProductRecordObject = items;
        }
    })
    document.getElementById("productName").value = ProductRecordObject.ProductName;
    document.getElementById("productID").value = ProductRecordObject.ProductID;
    document.getElementById("productDesc").value = ProductRecordObject.ProductDesc;
    document.getElementById("productPrice").value = ProductRecordObject.ProductPrice;
    document.getElementById("discountPrice").value = ProductRecordObject.ProductDPrice;
    document.getElementById("productImageURL").value = ProductRecordObject.ProductURL;
    document.getElementById("productDiscountPer").value = ProductRecordObject.ProductDiscount;
    document.getElementById("submit").value = "Update Record";
    document.getElementById("productID").readOnly = true;
    let pidLebel = document.getElementById("pidLebel");
    pidLebel.style.top = "-15px";
    pidLebel.style.color = "#11A15D";
    pidLebel.style.fontWeight = "bold";
    pidLebel.style.fontSize = "13px";
}

function refreshData() {
    var pageType = document.title;
    if (localStorage.ProductRecord) {
        productsDetailsArray = JSON.parse(localStorage.getItem('ProductRecord'));
        for (var i = 0; i <= productsDetailsArray.length; i++) {
            if (pageType == "Admin Page") {
                document.getElementById("productsView").innerHTML = `
            ${productsDetailsArray.map(productsTemplate).join("")}
            `;
            }
            else {
                document.getElementById("productsView").innerHTML = `
            ${productsDetailsArray.map(customerTemplate).join("")}
            `;
            }
        }

    }

}

function productsTemplate(products) {
    return `
    <section class="adjustmargintop">
        <article>
            <figure>
                <a href="" class="productDesc">
                    <div> 
                        <img src="${products.ProductURL}" alt="" width="100%" height="200px" />
                    </div>
                    <figcaption>
                        <div class="figDiv"> 
                            <strong>${products.ProductName} </strong>
                            </br>
                            <a class="productDesc" href="">${products.ProductDesc}</a>
                        </div>                    
                        <strong>₹${products.ProductDPrice} </strong>
                        <span class="originalPrice">₹${products.ProductPrice} </span>
                        <p class="discountPer">${products.ProductDiscount}% off</p>                    
                        <button onclick="editProductRecord('${products.ProductID}')">Edit</button></br><button onclick="deleteProductRecord('${products.ProductID}')">Delete</button>
                    </figcaption>
                </a>
            </figure>
        </article>
    </section>
    `
}
function customerTemplate(products) {
    return `
    <section class="adjustmargintop">
        <article>
            <figure>
                <a href="" class="productDesc">
                    <div> 
                        <img src="${products.ProductURL}" alt="" width="100%" height="200px" />
                    </div>
                    <figcaption>
                        <div class="figDiv"> 
                            <strong>${products.ProductName} </strong>
                            </br>
                            <a class="productDesc" href="">${products.ProductDesc}</a>
                        </div>                    
                        <strong>₹${products.ProductDPrice} </strong>
                        <span class="originalPrice">₹${products.ProductPrice} </span>
                        <p class="discountPer">${products.ProductDiscount}% off</p>                    
                        <button onclick="viewMoreDetails('${products.ProductID}')">Explore More Details</button>
                    </figcaption>
                </a>
            </figure>
        </article>
    </section>
    `
}
function viewMoreDetails(ProductID) {
    localStorage.setItem("ProductID", ProductID);
    window.location.assign("productDetails.html");
}

function resetadminForm() {
    selectedIndex = -1;
    document.getElementById("productName").value = "";
    document.getElementById("productID").value = "";
    document.getElementById("productDesc").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("discountPrice").value = "";
    document.getElementById("productImageURL").value = "";
    document.getElementById("productDiscountPer").value = "";
    document.location.reload(true);
}

function validatepNameValue(pNameValue) {
    var pNamePattern = /^[a-zA-Z0-9 ]*$/;
    isValid = pNamePattern.test(pNameValue);
    return isValid;
}

function validatepNumValue(pNumValue) {
    var pNumPattern = /^[0-9]*$/;
    isValid = pNumPattern.test(pNumValue);
    return isValid;
}

function validatepPriceValue(pPriceValue) {
    var pPricepattern = /^(\d{1,})(,\d{1,})*(\.\d{1,})?$/g;
    isValid = pPricepattern.test(pPriceValue);
    return isValid;
}

function validatepURLValue(pURLValue) {
    var pURLPattern = (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    var res = pURLValue.match(pURLPattern);
    if (res == null) {
        isValid = false;
    } else {
        isValid = true;
    }
    return isValid;
}
function validatedPerValue(dPerValue) {
    var dPerpattern = /^[0-9]*$/;
    isValid = dPerpattern.test(dPerValue);
    return isValid;
}

function validateName(firstName) {
    var fNamePattern = /^[a-zA-Z ]*$/;
    isValid = fNamePattern.test(firstName);
    return isValid;
}

function validateContactNum(contactNum) {
    var numberPattern = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    isValid = numberPattern.test(contactNum);
    return isValid;
}

function validateEmail(email) {
    var mailPattern = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    isValid = mailPattern.test(email);
    return isValid;
}
function piddupcheck(PID) {
    isValid = true;
    if (localStorage.ProductRecord) {
        let tempData = JSON.parse(localStorage.getItem('ProductRecord'));
        let tempPID = tempData.map(item => item.ProductID);
        for (let i = 0; i < tempPID.length; i++) {
            if (tempPID[i] == PID) {
                isValid = false;
            }
        }
    }
    return isValid;
}


// ---------------Product View Page JS-------------

function onloadProductInfo() {
    const cartOverlay = document.querySelector(".cart-over-lay");
    const cart = document.querySelector(".cart");
    const cartbtn = document.querySelector(".cart-btn");
    const closeCart = document.querySelector(".close-cart");
    const cartContent = document.querySelector(".cart-content");
    const cartItemVal = document.querySelector(".cart-itemVal");
    const cartTotal = document.querySelector(".cart-total");
    const clearCart = document.querySelector(".clear-cart");

    var productID = localStorage.getItem("ProductID");
    const productViewLeft = document.getElementById("productViewLeft");
    const productViewRight = document.getElementById("productViewRight");

    var productArray = [];
    let Cart = [];
    var tempCartArray = [];

    // get product details class
    class getProductsDetails {
        async getproduct(productID) {
            if (localStorage.ProductRecord) {
                let tempAD = JSON.parse(localStorage.ProductRecord);
                tempAD.map(items => {
                    if (items.ProductID == productID) {
                        productArray = items;
                    }
                })
            }
            return productArray;
        }
    }
    // display products class
    class displayProductDetails {
        async displayProduct(productDetails) {
            let result1 = "";
            let result2 = "";
            // let result3 = "";
            result1 += `
            <section id="">
                <article>
                    <div id="imgDimen">
                        <img src="${productDetails.ProductURL}" alt="" width="430px" height="350px"  />
                    </div>    
            
                    <div id="btnProductView">
                        <button id="addToCart">ADD TO CART</button><button id="goToCustPagebtn" onclick="goToCustPage()">More Products</button>
                    </div>
                </article>
            </section>
            `;
            productViewLeft.innerHTML = result1;

            let months = 12;
            let TempDprice = productDetails.ProductDPrice;

            result2 += `
            <section>
                <article>
                    <div>
                        <strong>
                            ${productDetails.ProductDesc}
                        </strong>
                    </div>
                    <div id="div2">
                        <strong>₹${productDetails.ProductDPrice} </strong>
                        <span class="originalPrice">₹${productDetails.ProductPrice} </span>
                        <p class="discountPer">${productDetails.ProductDiscount}% off</p>     
                    </div>
                    <div>
                        <p> 
                            <img class="Iconimage" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" />
                            No cost EMI ₹ ${Math.round(TempDprice / months)}/month. Standard EMI also available
                            <a id="viewPlans" href="#">View Plans></a>
                        </p>               
                        <p>
                            <img class="Iconimage" src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" />
                            Bank Offer10% Instant Discount* with Axis Bank Credit and Debit Cards 
                            <a id="viewPlans" href="#">T&C></a>
                        </p>
                        <p>
                            1 Year Onsite Warranty
                            <a id="viewPlans" href="#">Know More></a>
                        </p>
                    </div>
                </article>
            </section>    
            `;
            productViewRight.innerHTML = result2;
            // result3 += `
            // <section class="s3">
            //     <article>
            //         <div>
            //             <p> hiii</p>
            //         </div>                   
            //     </article>
            // </section>    
            // `;
            // productViewRight.innerHTML = result3;
        }

        getAddCartBtn(productID) {
            const button = document.getElementById("addToCart");
            if (localStorage.cart) {
                var productPresent = false;
                tempCartArray = JSON.parse(localStorage.getItem('cart'));
                tempCartArray.map(item => {
                    if (item.ProductID == productID) {
                        productPresent = true;
                    }
                })
                if (productPresent) {
                    button.innerText = "IN CART";
                    button.disabled = true;
                }
            }
            button.addEventListener("click", event => {
                button.innerText = "IN CART";
                button.disabled = true;
                // get product from Products and add quanity as 1                    
                let cartitem = { ...productArray, Quantity: 1 };
                // add product to cartArray
                Cart = [...Cart, cartitem];
                // save cart in local storage
                storeProductDetails.saveCart(Cart);
                // set cart values                
                this.setCartValue(Cart);
                // display cart item
                this.addCartItem(cartitem);
                // show cart item
                this.showCart();
            })
        }
        setCartValue(Cart) {
            let tempCartVal = 0;
            let tempCartTotals = 0;
            let cartlenght = Cart.length;
            tempCartVal += cartlenght;
            Cart.map(item => {
                tempCartTotals += item.ProductDPrice * item.Quantity;
            })
            cartItemVal.innerHTML = tempCartVal;
            cartTotal.innerText = parseInt(tempCartTotals.toFixed(2));
        }
        addCartItem(cartitem) {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `
                <img src="${cartitem.ProductURL}" alt="product">
                <div>
                    <h4>${cartitem.ProductName}</h4>
                    <h5>$${cartitem.ProductDPrice}</h5>
                    <span class="remove-item" data-id="${cartitem.ProductID}">remove</span>
                </div>
                <div>
                    <i class="fa fa-chevron-up" data-id="${cartitem.ProductID}"></i>
                    <p class="item-amount">${cartitem.Quantity}</p>
                    <i class="fa fa-chevron-down" data-id="${cartitem.ProductID}"></i>
                </div>
            `;
            cartContent.appendChild(div);
        }
        showCart() {
            cartOverlay.classList.add('transparentBcg');
            cart.classList.add('showCart');
        }
        setupAPP() {
            Cart = storeProductDetails.getCart();
            this.setCartValue(Cart);
            this.populateCart(Cart);
            cartbtn.addEventListener('click', this.showCart);
            closeCart.addEventListener('click', this.hideCart);
        }
        populateCart(Cart) {
            Cart.forEach(cartitem => this.addCartItem(cartitem));
        }
        hideCart() {
            cartOverlay.classList.remove('transparentBcg');
            cart.classList.remove('showCart');
        }
        cartLogic() {
            // clearing entire cart items
            clearCart.addEventListener('click', () => {
                this.clearCart();
            });
            // cart content functionality
            cartContent.addEventListener('click', event => {
                // let button = document.getElementById("addToCart");
                if (event.target.classList.contains("remove-item")) {
                    let removeItem = event.target;
                    let id = removeItem.dataset.id;
                    cartContent.removeChild(removeItem.parentElement.parentElement);
                    this.removeItem(id);
                }
                else if (event.target.classList.contains("fa-chevron-up")) {
                    let upAmount = event.target;
                    let id = upAmount.dataset.id;
                    let tempItem = Cart.find(item => item.ProductID == id);
                    tempItem.Quantity = tempItem.Quantity + 1;
                    storeProductDetails.saveCart(Cart);
                    this.setCartValue(Cart);
                    let itemValue = event.target.nextElementSibling;
                    itemValue.innerText = tempItem.Quantity;
                }
                else if (event.target.classList.contains("fa-chevron-down")) {
                    let lowerAmount = event.target;
                    let id = lowerAmount.dataset.id;
                    let tempItem = Cart.find(item => item.ProductID == id);
                    tempItem.Quantity = tempItem.Quantity - 1;

                    if (tempItem.Quantity > 0) {
                        storeProductDetails.saveCart(Cart);
                        this.setCartValue(Cart);
                        lowerAmount.previousElementSibling.innerText = tempItem.Quantity;
                    } else {
                        cartContent.removeChild
                            (lowerAmount.parentElement.parentElement);
                        this.removeItem(id);
                    }
                }
            });
        }
        clearCart() {
            let cartIDs = Cart.map(item => item.ProductID);
            cartIDs.forEach(id => this.removeItem(id));

            while (cartContent.children.length > 0) {
                cartContent.removeChild(cartContent.children[0])
            }
            this.hideCart();
        }
        removeItem(id) {
            Cart = Cart.filter(item => item.ProductID != id);
            this.setCartValue(Cart);
            storeProductDetails.saveCart(Cart);

            let button = document.getElementById("addToCart");
            button.innerText = "ADD TO CART";
            button.disabled = false;
        }
    }

    // store product details class
    class storeProductDetails {
        static saveCart(Cart) {
            localStorage.setItem('cart', JSON.stringify(Cart));
        }
        static getCart() {
            return localStorage.getItem('cart') ? JSON.parse
                (localStorage.getItem('cart')) : []
        }

    }

    const getPDObject = new getProductsDetails();
    const displayPDObject = new displayProductDetails();

    //set up Application
    displayPDObject.setupAPP();

    //get product information    
    getPDObject.getproduct(productID).then(product => {
        displayPDObject.displayProduct(product);
    }).then(() => {
        displayPDObject.getAddCartBtn(productID);
        displayPDObject.cartLogic();
    });

}
function goToCustPage() {
    window.location.assign("customerPage.html");
}
// -----------End of Product View Page JS----------













