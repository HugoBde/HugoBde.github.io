const modal = document.getElementById("modal")

function closeModal() {
    modal.classList.add("modalClosingAnimation")
    setTimeout(() => modal.style.display = "none" ,500)
}

function showModal() {
    modal.style.display = "flex"
    modal.classList.add("modalOpeningAnimation")
    setTimeout(() => modal.classList.remove("modalOpeningAnimation"), 750)
}

showModal()