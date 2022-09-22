const modal = document.querySelector(".modal");
const btnModal = document.querySelector(".btn-go");
const closeModal = document.querySelector(".btn-modal");
const result = document.querySelector(".result");

btnModal.addEventListener("click", e =>{
    modal.style.display = "initial"
})

closeModal.addEventListener("click", e => {
    modal.style.display="none"
})
