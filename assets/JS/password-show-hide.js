/**
 * Password Hide Show Algarithms
 */
 const passField = document.getElementById("password");
 const passShow = document.getElementById("passShow");
 const passHide = document.getElementById("passHide");
 
 passShow.onclick = () => {
   if (passField.type === "password") {
     passField.type = "text";
   } else {
     passField.type = "password";
   }
   passShow.classList.remove("d-block");
   passShow.classList.add("d-none");
   passHide.classList.remove("d-none");
   passHide.classList.add("d-block");
 };
 passHide.onclick = () => {
   if (passField.type === "text") {
     passField.type = "password";
   } else {
     passField.type = "text";
   }
   passHide.classList.remove("d-block");
   passHide.classList.add("d-none");
   passShow.classList.remove("d-none");
   passShow.classList.add("d-block");
 };