window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/";
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");
    if (id) {
        try {
            let response = await fetch(url+id, {
          method: "GET",
          headers: new Headers({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
          }),
        });
     let product = await response.json(); // transforming the response body in an usable object, asyncronous operation!
      document.querySelector("#name").value = product.name;
      document.querySelector("#description").value = product.description;
      document.querySelector("#brand").value = product.brand;
      document.querySelector("#image").value = product.imageUrl;
      document.querySelector("#price").value = product.price;
    } catch (error) {
       console.log(error);
      }
    };
  }



const handleSubmit = (e) => {
    e.preventDefault();
    postProducts();
    document.querySelector("#name").value = "";
    document.querySelector("#description").value = "";
    document.querySelector("#brand").value = "";
    document.querySelector("#image").value = "";
    document.querySelector("#price").value = "";
}

async function postProducts() {
    const url = "https://striveschool-api.herokuapp.com/api/product/";


    let myProduct = {
        "name": document.querySelector("#name").value,
        "description": document.querySelector("#description").value,
        "brand": document.querySelector("#brand").value,
        "imageUrl": document.querySelector("#image").value,
        "price": document.querySelector("#price").value,
    }

    //console.log(myProduct);
    let success = document.querySelector(".success");
    let errorAlert = document.querySelector(".error");
        try {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(myProduct),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
            }),
        });
        if (response.ok) {
            success.classList.remove("d-none");
            location.assign("index.html");
        } else {
            setTimeout(function () {
                errorAlert.classList.remove("d-none");
            }, 3000);
        }
    } catch (e) {
        alert(e);
    }
};






let success = document.querySelector(".success");
let errorAlert = document.querySelector(".error");
let updateAlert = document.querySelector(".updateAlert");

async function updateProduct() {
    const url = "https://striveschool-api.herokuapp.com/api/product/";


    let myProduct = {
        "name": document.querySelector("#name").value,
        "description": document.querySelector("#description").value,
        "brand": document.querySelector("#brand").value,
        "imageUrl": document.querySelector("#image").value,
        "price": document.querySelector("#price").value,
    }

    //console.log(myProduct);
  
        try {
        let response = await fetch(url+id, {
            method: "PUT",
            body: JSON.stringify(myProduct),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
            }),
        });
        if (response.ok) {
            updateAlert.classList.remove("d-none");
            location.assign("index.html");
        } else {
            errorAlert.classList.remove("d-none");

        }
    } catch (e) {
        errorAlert.classList.remove("d-none");
    }
};


const handleDelete = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/";
    try {
        let response = await fetch(url+id, {
            method: "DELETE",
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
            }),
        });
        if (response.ok) {
            //success.classList.remove("d-none");
            alert("item deleted successfully");
            location.assign("index.html");
        } else {
            errorAlert.classList.remove("d-none");
        }
    } catch (e) {
        errorAlert.classList.remove("d-none");
    }
  };

 


