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
    let name = document.querySelector("#name").value.trim();
    let phone = document.querySelector("#mobNo").value.trim();
    let pass = document.querySelector("#pass").value.trim()

    let sname = localStorage.getItem("name");
    let sphone = localStorage.getItem("phone");
    let spass = localStorage.getItem("pass");
    if(name === "" || phone === "" || pass === "" ){
        alert("fill all credentials !")
        return;
    }
    if(name === sname && phone === sphone && pass === spass){
        alert(`Welcome ${sname} you are logged in.`);
    }else{
        alert("Wrong Credentials. if you are new then sign up fist.");
    }
    
});
