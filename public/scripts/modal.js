const modal = document.getElementById("modal")

function closeModal() {
    modal.classList.add("modalFadeOut")
    setTimeout(() => modal.style.display = "none" ,700)
}

function showModal() {
    modal.style.display = "flex"
    modal.classList.add("modalFadeIn")
    setTimeout(() => modal.classList.remove("modalFadeIn"), 750)
}

function getScrollTop() {
    if (typeof window.pageYOffset !== "undefined" ) {
        // Most browsers
        return window.pageYOffset;
    }
  
    let d = document.documentElement;
    if (typeof d.clientHeight !== "undefined") {
        // IE in standards mode
        return d.scrollTop;
    }
  
    // IE in quirks mode
    return document.body.scrollTop;
}

window.onscroll = function() {
    let scroll = getScrollTop();
    modal.style.top = scroll + "px";
};
showModal()