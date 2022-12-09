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
/**
 * Password Hide Show Algarithms
 */
 const passField2 = document.getElementById("password2");
 const passShow2 = document.getElementById("passShow2");
 const passHide2 = document.getElementById("passHide2");
 
 passShow2.onclick = () => {
   if (passField2.type === "password") {
     passField2.type = "text";
   } else {
     passField2.type = "password";
   }
   passShow2.classList.remove("d-block");
   passShow2.classList.add("d-none");
   passHide2.classList.remove("d-none");
   passHide2.classList.add("d-block");
 };
 passHide2.onclick = () => {
   if (passField2.type === "text") {
     passField2.type = "password";
   } else {
     passField2.type = "text";
   }
   passHide2.classList.remove("d-block");
   passHide2.classList.add("d-none");
   passShow2.classList.remove("d-none");
   passShow2.classList.add("d-block");
 };