const modal = document.getElementById("modal")

function closeModal() {
    document.body.style.overflow = ""
    modal.classList.add("modalFadeOut")
    setTimeout(() => modal.style.display = "none" ,700)
}

function showModal() {
    document.body.style.overflow = "hidden"
    window.scroll(0,0)
    modal.style.display = "flex"
    modal.classList.add("modalFadeIn")
    setTimeout(() => modal.classList.remove("modalFadeIn"), 750)
}

showModal()