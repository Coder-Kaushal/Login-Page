let boxes = document.querySelectorAll(".box");
// let btn = document.createElement("button");
// btn.innerText = "Dark";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
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
//         document.querySelector("body").style.color = "rgb(41, 40, 40)";       
//         mode = "dark";
//     }
    
// })



document.querySelector("#sub").addEventListener("click", ()=>{
    let name = document.querySelector("#name").value.trim();
    let phone = document.querySelector("#mobNo").value.trim();
    let mail = document.querySelector("#mail").value.trim();
    let age = document.querySelector("#age").value.trim();
    let pass = document.querySelector("#pass").value.trim();

    if(name === "" || phone === "" ||mail === "" || age === "" || pass === "" ){
        alert("fill all credentials !");
        return;
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("phone",phone);
        localStorage.setItem("mail",mail);
        localStorage.setItem("age",age);
        localStorage.setItem("pass",pass);

        alert("Thankyou! details are submitted. Now you can login.");
    }
});

