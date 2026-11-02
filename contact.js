/* ==========================================
   CONTACT PAGE MOBILE NAVIGATION SCRIPT
========================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const mobileDropdown = document.querySelector('.nav-dropdown');
const mobileDropBtn = document.querySelector('.nav-dropbtn');

function closeNavigation() {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Open navigation");
    if(mobileDropdown) mobileDropdown.classList.remove('mobile-open');
}

if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "×" : "☰";
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
}

if (mobileDropBtn) {
    mobileDropBtn.addEventListener('click', (e) => {
        if (window.innerWidth <= 680) {
            e.preventDefault();
            mobileDropdown.classList.toggle('mobile-open');
        }
    });
}

document.addEventListener("click", event => {
    if (
        mainNav && mainNav.classList.contains("open") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {
        closeNavigation();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
        closeNavigation();
    }
});