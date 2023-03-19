let form = document.querySelector("form");
form.addEventListener('submit', (e)=> {
   e.preventDefault();
   document.querySelector("#sub").value="submitted...";
   let data = new FormData(form);
   fetch('https://script.google.com/macros/s/AKfycbxHkVRGvQU-SAVzaCvVDs7IM75qQz1MFaGr4i4Di-8KQacZhe2wEnNC41C0yk9GEwuV/exec', {
    method:"POST",
    body: data
   })
     .then(res => res.text())
     .then(data =>{
        document.querySelector("#msg").innerHTML= data;
        document.querySelector("#sub").value="submitted";
     });
})