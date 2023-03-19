let form = document.querySelector("form");
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   document.querySelector("#sub").value="submitted...OK";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbz9rYzywyLn3a-Ceojxj92wPRCG5yC-MOAVoQ4vlkxFdudzhF8bQr5L5w3hpTfV0L-B/exec', {
    method:"POST",
    body: data
   })
     .then(res => res.text())
     .then(data =>{
        document.querySelector("#msg").innerHTML= data;
        document.querySelector("#sub").value="submitted";
     });
})
