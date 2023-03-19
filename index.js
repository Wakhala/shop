let form = document.querySelector("form");
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   document.querySelector("#sub").value="submitted...";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbz2yv4pRsqk3gDyZrCR7q2QMotuH7Xd7sPNqpQ49A0bstnnYmSHLFI3b-pODKHOVx5xbg/exec', {
    method:"POST",
    body: data
   })
     .then(res => res.text())
     .then(data =>{
        document.querySelector("#msg").innerHTML= data;
        document.querySelector("#sub").value="submitted";
     });
})