const filter = document.getElementById("filter")

window.onscroll = () => {
    filter.style.height = 2.75 * window.scrollY + "px"
}