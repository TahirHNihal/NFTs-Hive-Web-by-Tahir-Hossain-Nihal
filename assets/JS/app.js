
/**
 * Modal Form Open Close
 */
const modal = document.getElementById("modal");
const modalOpenBtn = document.getElementById("modalOpenBtn");
const modalCloseBtn = document.getElementById("modalCloseBtn");

modalOpenBtn.onclick = () => {
  modal.classList.remove("d-none");
  modal.classList.add("d-block");
  window.setTimeout(function () {
    modal.style.opacity = 1;
    modal.style.transform = "scale(1)";
  });
};
modalCloseBtn.onclick = () => {
  modal.classList.remove("d-block");
  modal.classList.add("d-none");
  window.setTimeout(function () {
    modal.style.opacity = 0;
    modal.style.transform = "scale(0)";
  });
};

