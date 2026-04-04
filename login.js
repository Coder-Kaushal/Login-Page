let boxes = document.querySelectorAll(".box");
// let btn = document.createElement("button");
// btn.innerText = "Dark";
// btn.style.backgroundColor = "red";
// btn.style.color = "white"
// document.querySelector("body").prepend(btn);

// let mode = "dark";
// btn.addEventListener("click", ()=>{
//     if(mode === "dark"){
//         mode = "light";
//         btn.innerText ="light";
//         document.querySelector("body").style.backgroundColor = "rgb(41, 40, 40)";
        
        
//     }else{
//         btn.innerText = "dark";
//         document.querySelector("body").style.backgroundColor = "white";
//         document.querySelector("body").style.color = "rgb(41, 40, 40)";        mode = "dark";
//     }
    
// });





document.querySelector("#sub").addEventListener("click", ()=>{
    const name = document.querySelector("#name").value.trim();
    const phone = document.querySelector("#mobNo").value.trim();
    const pass = document.querySelector("#pass").value.trim();


    const data = JSON.parse(localStorage.getItem("data")) || {

        Name : null,
        Phone : null,
        Mail : null,
        Age : null,
        Pass : null
    };

    if(name === "" || phone === "" || pass === "" ){
        alert("fill all credentials !")
        return;
    }
    if(name === data.Name && phone === data.Phone && pass === data.Pass){
        alert(`Welcome ${data.Name} you are logged in.`);
    }else{
        alert("Wrong Credentials. if you are new then sign up fist.");
    }
    
});
