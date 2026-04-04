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
const name = document.querySelector("#name");
const phone = document.querySelector("#mobNo");
const mail = document.querySelector("#mail");
const age = document.querySelector("#age");
const pass = document.querySelector("#pass");


document.querySelector("#sub").addEventListener("click", ()=>{
    if(name.value.trim() === "" || phone.value.trim() === "" || mail.value.trim() === "" || age.value.trim() === "" || pass.value.trim() === "" ){
        alert("fill all credentials !")
        return;
    }
    const data = {
        Name : name.value.trim(),
        Phone : phone.value.trim(),
        Mail : mail.value.trim(),
        Age : age.value.trim(),
        Pass : pass.value.trim()
    }
    localStorage.setItem("data", JSON.stringify(data));
        
    alert("Thankyou! details are submitted. Now you can login.");
    
});

