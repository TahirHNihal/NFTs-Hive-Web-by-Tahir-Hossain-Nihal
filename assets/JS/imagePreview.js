/**
 * Image Preview Algrithms
 */
 const memberProfileImage = document.getElementById("memberProfileImage");
 const memberImagePreview = document.querySelector(".photo-preview");
 
 memberProfileImage.onchange = (e) => {
   const url = URL.createObjectURL(e.target.files[0]);
   memberImagePreview.setAttribute("src", url);
 };
 