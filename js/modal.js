const body = document.querySelector('body');
let scrollPosition = 0;
const modal = document.getElementById("modal");
modal.style.display = "none"
const modal2 = document.getElementById("modal2");
modal2.style.display = "none";
const mag1 = document.getElementById("modal_mag_1");
mag1.style.display = "none";

function modalOn() {
    modal.style.display = "flex";
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
}

function isModalOn() {
    return modal.style.display === "flex";
}

function modalOff() {
    modal.style.display = "none";
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}
const btnModal = document.getElementById("btn_modal");
btnModal.addEventListener("click", e => {
    modalOn();
})
const closeBtn = modal.querySelector(".close_area");
closeBtn.addEventListener("click", e => {
    modalOff();
})
modal.addEventListener("click", e => {
    const evTarget = e.target;
    if (evTarget.classList.contains("modal_overlay")) {
        modalOff();
    }
})
window.addEventListener("keyup", e => {
    if (isModalOn() && e.key === "Escape") {
        modalOff();
    }
})

function modal2On() {
    modal2.style.display = "block";
}

function isModal2On() {
    return modal2.style.display === "block";
}

function modal2Off() {
    modal2.style.display = "none";
}
const btnModal2 = document.getElementById("btn_modal2")
btnModal2.addEventListener("click", e => {
    modal2On();
})
const closeBtn2 = modal.querySelector(".close_area2")
closeBtn2.addEventListener("click", e => {
    modal2Off();
})

function mag1On() {
    mag1.style.display = "flex";
    scrollPosition = window.pageYOffset;
    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
}

function ismag1On() {
    return mag1.style.display === "flex";
}

function mag1Off() {
    mag1.style.display = "none";
}

const mag_1 = document.getElementById("mag_1")
mag_1.addEventListener("click", e => {
    mag1On();
})
const closeBtn3 = mag_1.querySelector(".close_area_3")
closeBtn3.addEventListener("click", e => {
    mag1Off();
})
