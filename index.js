async function getProducts(){
const url =  "https://striveschool-api.herokuapp.com/api/product/";
let productContainer = document.querySelector("#productsContainer");

try{
    let response = await fetch(url,{
        method: "GET",
        headers: new Headers({
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
        }),
    });
    let products = await response.json();

    if(products.length>0){
        products.forEach(e => {
            let col = document.createElement("div");
            col.classList.add("col-lg-4",
            "col-md-6",
            "col-sm-12");
            col.innerHTML = `
            <a href="detail.html?id=${e.name}|${e.imageUrl}|${e.description}|${e.price}|${e.brand}" style="text-decoration: none; color: #000;">
            <div class="card mb-4 shadow-sm">
            <img src="${e.imageUrl}" height="250" style="object-fit: cover"/>
            <div class="card-body">
            <div class="d-flex justify-content-between">
            <span class="card-title name">${e.name}</span> <span class="card-title brand">${e.brand}</span>
            </div>
              <p class="card-text description">${e.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>     
                </div>
                <small class="text-muted">$${e.price}</small>
              </div>
            </div>
          </div>
          </a>
            `
            productContainer.appendChild(col);
        });
    }else{
        productContainer.innerHTML= "<h1>No product in the store at the moment</h1>"
    }


    }catch(e){
        alert(e);
    }
    }
getProducts();