const handleSubmit=(e)=>{
    e.preventDefault();
    postProducts();
     document.querySelector("#name").value ="";
     document.querySelector("#description").value ="";
     document.querySelector("#brand").value ="";
     document.querySelector("#image").value ="";
     document.querySelector("#price").value ="";
}

async function postProducts(){
    const url =  "https://striveschool-api.herokuapp.com/api/product/";
    
    
    let myProduct = {
        "name": document.querySelector("#name").value,
        "description": document.querySelector("#description").value,
        "brand": document.querySelector("#brand").value,
        "imageUrl": document.querySelector("#image").value,
        "price":document.querySelector("#price").value,
    }

//console.log(myProduct);
let success=   document.querySelector(".success");
let errorAlert = document.querySelector(".error");

     try{
        let response = await fetch(url,{
            method: "POST",
            body: JSON.stringify(myProduct),
            headers: new Headers({
                "Content-type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZjgxNDRiY2RlMTAwMTc2MTZjNTMiLCJpYXQiOjE2MDUxMDU2ODQsImV4cCI6MTYwNjMxNTI4NH0.sLT4G9POgzHoQJlNWeazbWYraJSSX9-xSyGFdGetYq4"
            }),
        });
       if(response.ok){
        success.classList.remove("d-none");
           location.assign("index.html");
       }else{
        setTimeout(function () {
            errorAlert.classList.remove("d-none");
          }, 3000);
       }
        }catch(e){
            alert(e);
        }
        };
