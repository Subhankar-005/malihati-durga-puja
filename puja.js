/* =====================================================
   MALIHATI DURGA PUJA
   PUBLIC WEBSITE + LOCAL STORAGE SYNCHRONIZATION
===================================================== */

const CACHE_KEY = "malihati_durga_puja_pandals_cache";

/* =====================================================
   2. DEFAULT PUJA DATA
===================================================== */

const defaultPujaData = {

    2025: [
        {
            name: "Malihati Sastitala Sarbojonin Durga Puja",
            place: "Malihati Main Road",
            image: "images/2025/palpara.jpeg",
            description: "Malihati Sastitala Sarbojonin Durga Puja celebrates the spirit of the community.",
            map: "https://maps.app.goo.gl/dcH5TxwVo2i2kzb36"
        },
        {
            name: "Malihati Mondoptola Sarbojonin Durga Puja",
            place: "Malihati Main Road",
            image: "images/2025/mondoptala.jpeg",
            description: "A community Durga Puja celebrating togetherness, devotion and the creativity of Malihati.",
            map: "https://maps.app.goo.gl/ZVTgDQv5eg19ibfD6"
        },
        {
            name: "Malihati Rajakpara Sarbojonin Durga Puja",
            place: "Malihati Rajak Para",
            image: "images/2025/rajakpara.jpeg",
            description: "A traditional Durga Puja celebration featuring pandal decorations and a festive atmosphere.",
            map: "https://maps.app.goo.gl/u3hqKMMQ4zxT6H4b8"
        },
        {
            name: "Malihati Tantipara Sarbojonin Durga Puja",
            place: "Malihati Tanti Para",
            image: "images/tantipara.jpeg",
            description: "A colourful community celebration with an attractive pandal and festive surroundings.",
            map: "https://maps.app.goo.gl/sykimpWXtRyYWpKV7"
        },
        {
            name: "Malihati Baidyapara Sarbojonin Durga Puja",
            place: "Malihati Baidya Para",
            image: "images/2025/baidyapara.jpeg",
            description: "A celebration of community traditions, devotion and festive decorations.",
            map: "https://maps.app.goo.gl/d2HJ9nRhdsA5YM4UA"
        },
        {
            name: "Malihati Majhi Para Sarbojonin Durga Puja",
            place: "Malihati Majhi Para",
            image: "images/2026/pandal4.jpg",
            description: "A local community celebration bringing people together during Durga Puja.",
            map: "https://maps.app.goo.gl/sAvUCABsNZMNERR6A"
        },
        {
            name: "Malihati Uttar Majhi Para Sarbojonin Durga Puja",
            place: "Malihati Uttar Majhi Para",
            image: "images/2026/pandal4.jpg",
            description: "Explore another local Durga Puja celebration in the Malihati area.",
            map: "https://www.google.com/maps/search/?api=1&query=Malihati+Majhi+Para"
        },
        {
            name: "Malihati Purba Para Sarbojonin Durga Puja",
            place: "Malihati Purba Para",
            image: "images/thakurpara.jpeg",
            description: "A community celebration preserving the traditions and memories of Durga Puja.",
            map: "https://www.google.com/maps/search/?api=1&query=Malihati+Purba+Para"
        },
        {
            name: "Malihati Sodepur Sarbojonin Durga Puja",
            place: "Malihati Sodepur Main Road",
            image: "images/2026/pandal4.jpg",
            description: "Discover the festive decorations and community spirit of this local Puja.",
            map: "https://maps.app.goo.gl/PoRjaiRnDYy7s4KZ9"
        },
        {
            name: "Malihati Gab Tola Sarbojonin Durga Puja",
            place: "Malihati Gab Tola",
            image: "images/2026/pandal4.jpg",
            description: "A local Durga Puja celebration adding another chapter to Malihati's festive memories.",
            map: "https://maps.app.goo.gl/cNRz9JG3aFikBbZJ8"
        },
        {
            name: "Kandra Ghosh Para Sarbojonin Durga Puja",
            place: "Kandra Ghosh Para",
            image: "images/2026/pandal4.jpg",
            description: "A community Puja celebrating devotion and the festive traditions of the surrounding area.",
            map: "https://maps.app.goo.gl/fTDbfGe9hH6VwUV96"
        },
        {
            name: "Kandra Tiger Club Sarbojonin Durga Puja",
            place: "Kandra Main Road",
            image: "images/tiger club.jpeg",
            description: "A local community celebration showcasing the spirit of Durga Puja in Kandra.",
            map: "https://maps.app.goo.gl/oR2Mk91tHpreMydV7"
        }
    ],

    2026: [
        {
            name: "Malihati Sastitala Sarbojonin Durga Puja",
            place: "Malihati Main Road",
            image: "images/2026/palpara.jpeg",
            description: "Malihati Sastitala Sarbojonin Durga Puja celebrates the spirit of the community.",
            map: "https://maps.app.goo.gl/dcH5TxwVo2i2kzb36"
        },
        {
            name: "Malihati Mondoptola Sarbojonin Durga Puja",
            place: "Malihati Main Road",
            image: "images/2026/mondoptala.jpeg",
            description: "A community Durga Puja celebrating togetherness, devotion and the creativity of Malihati.",
            map: "https://maps.app.goo.gl/ZVTgDQv5eg19ibfD6"
        },
        {
            name: "Malihati Rajakpara Sarbojonin Durga Puja",
            place: "Malihati Rajak Para",
            image: "images/2026/rajakpara.jpeg",
            description: "A traditional Durga Puja celebration featuring pandal decorations and a festive atmosphere.",
            map: "https://maps.app.goo.gl/u3hqKMMQ4zxT6H4b8"
        },
        {
            name: "Malihati Tantipara Sarbojonin Durga Puja",
            place: "Malihati Tanti Para",
            image: "images/2026/tantipara.jpeg",
            description: "A colourful community celebration with an attractive pandal and festive surroundings.",
            map: "https://maps.app.goo.gl/sykimpWXtRyYWpKV7"
        },
        {
            name: "Malihati Baidyapara Sarbojonin Durga Puja",
            place: "Malihati Baidyapara Para",
            image: "images/2026/baidyapara.jpeg",
            description: "A celebration of community traditions, devotion and festive decorations.",
            map: "https://maps.app.goo.gl/d2HJ9nRhdsA5YM4UA"
        },
        {
            name: "Malihati Das Para Sarbojonin Durga Puja",
            place: "Malihati Das Para",
            image: "images/2026/daspara.jpeg",
            description: "A neighbourhood Durga Puja celebrating the festive spirit of Malihati.",
            map: "https://maps.app.goo.gl/rxurbVdymVNid9Sf7"
        },
        {
            name: "Malihati Majhi Para Sarbojonin Durga Puja",
            place: "Malihati Majhi Para",
            image: "images/2026/majhipara.jpeg",
            description: "A local community celebration bringing people together during Durga Puja.",
            map: "https://maps.app.goo.gl/sAvUCABsNZMNERR6A"
        },
        {
            name: "Malihati Uttar Majhi Para Sarbojonin Durga Puja",
            place: "Malihati Uttar Majhi Para",
            image: "images/2026/uttarmajhi.jpeg",
            description: "Explore another local Durga Puja celebration in the Malihati area.",
            map: "https://maps.app.goo.gl/W2gujFaUK6ny7jYy5"
        },
        {
            name: "Malihati Purba Para Sarbojonin Durga Puja",
            place: "Malihati Purba Para",
            image: "images/2026/purba para.jpeg",
            description: "A community celebration preserving the traditions and memories of Durga Puja.",
            map: "https://www.google.com/maps/search/?api=1&query=Malihati+Purba+Para"
        },
        {
            name: "Malihati Sodepur Sarbojonin Durga Puja",
            place: "Malihati Sodepur Manin Road",
            image: "images/2026/sodepur.jpeg",
            description: "Discover the festive decorations and community spirit of this local Puja.",
            map: "https://maps.app.goo.gl/PoRjaiRnDYy7s4KZ9"
        },
        {
            name: "Malihati Gab Tola Sarbojonin Durga Puja",
            place: "Malihati Gab Tola",
            image: "images/2026/gabtola.jpeg",
            description: "A local Durga Puja celebration adding another chapter to Malihati's festive memories.",
            map: "https://maps.app.goo.gl/cNRz9JG3aFikBbZJ8"
        },
        {
            name: "Kandra Ghosh Para Sarbojonin Durga Puja",
            place: "Kandra Ghosh Para",
            image: "images/2026/ghoshpara.jpeg",
            description: "A community Puja celebrating devotion and the festive traditions of the surrounding area.",
            map: "https://maps.app.goo.gl/fTDbfGe9hH6VwUV96"
        },
        {
            name: "Kandra Lohar Para Sarbojonin Durga Puja",
            place: "Kandra Lohar Para",
            image: "images/2026/loharpara.jpeg",
            description: "Explore the local Puja celebrations and traditions of Kandra Lohar Para.",
            map: "https://maps.app.goo.gl/tdmpwcktqaEshnxz8"
        },
        {
            name: "Kandra Tiger Club Sarbojonin Durga Puja",
            place: "Kandra Main Road",
            image: "images/2026/tigerclub.jpeg",
            description: "A local community celebration showcasing the spirit of Durga Puja in Kandra.",
            map: "https://maps.app.goo.gl/oR2Mk91tHpreMydV7"
        }
    ],

    2027: [],
    2028: [],
    2029: []
};

/* =====================================================
   3. GLOBAL VARIABLES
===================================================== */

let pujaData = {};
let selectedYear = "";
let allPandals = [];

let lastFocusedElement = null;
let revealObserver = null;

/* =====================================================
   4. DOM ELEMENTS
===================================================== */

const yearSelect = document.getElementById("yearSelect");
const pandalContainer = document.getElementById("pandalContainer");
const searchInput = document.getElementById("searchInput");
const yearTitle = document.getElementById("yearTitle");
const pandalCount = document.getElementById("pandalCount");
const noResult = document.getElementById("noResult");

const modal = document.getElementById("pandalModal");
const modalBox = modal?.querySelector(".modal-box");
const modalImage = document.getElementById("modalImage");
const modalYear = document.getElementById("modalYear");
const modalName = document.getElementById("modalName");
const modalPlace = document.getElementById("modalPlace");
const modalDescription = document.getElementById("modalDescription");
const mapButton = document.getElementById("mapButton");
const closeModalButton = document.getElementById("closeModalButton");

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

const copyrightYear = document.getElementById("copyrightYear");
const scrollProgress = document.getElementById("scrollProgress");
const siteHeader = document.getElementById("siteHeader");
const backToTop = document.getElementById("backToTop");

const mobileDropdown = document.querySelector(".nav-dropdown");
const mobileDropBtn = document.querySelector(".nav-dropbtn");

/* =====================================================
   5. HELPER FUNCTIONS
===================================================== */

function createEmptyYearData() {
    return {
        2025: [],
        2026: [],
        2027: [],
        2028: [],
        2029: []
    };
}

function normalizePandal(data, id = "") {

    const year = String(data.year || new Date().getFullYear());

    return {
        id: id || data.id || "",
        name: data.name || "Unnamed Durga Puja",
        place: data.place || "Malihati Community",
        image: data.url || data.image || "",
        description: data.description || `Durga Puja ${year}.`,
        map: data.map || "https://maps.google.com",
        year: year
    };
}

function organizePandals(pandals) {

    const organized = createEmptyYearData();

    pandals.forEach(pandal => {

        const year = String(pandal.year);

        if (!organized[year]) {
            organized[year] = [];
        }

        organized[year].push(pandal);

    });

    return organized;
}

/* =====================================================
   6. LOCAL STORAGE CACHE
===================================================== */

function savePandalsToCache(pandals) {

    try {

        localStorage.setItem(
            CACHE_KEY,
            JSON.stringify(pandals)
        );

    } catch (error) {

        console.error("Cache saving error:", error);

    }
}

function loadPandalsFromCache() {

    try {

        const saved = localStorage.getItem(CACHE_KEY);

        if (!saved) {
            return null;
        }

        const parsed = JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return null;
        }

        return parsed.map(item => normalizePandal(item));

    } catch (error) {

        console.error("Cache loading error:", error);

        return null;
    }
}

/* =====================================================
   7. LOAD DEFAULT DATA
===================================================== */

function loadDefaultData() {

    allPandals = [];

    Object.keys(defaultPujaData).forEach(year => {

        defaultPujaData[year].forEach((pandal, index) => {

            allPandals.push({

                ...pandal,

                id: `${year}-${index}`,

                year: year

            });

        });

    });

    pujaData = organizePandals(allPandals);

}

/* =====================================================
   8. LOAD DATA (LOCAL STORAGE / DEFAULT)
===================================================== */

function loadPandalsFromCloud() {

    const cachedPandals = loadPandalsFromCache();

    if (cachedPandals && cachedPandals.length > 0) {

        allPandals = cachedPandals;

    } else {

        loadDefaultData();
        savePandalsToCache(allPandals);

    }

    pujaData = organizePandals(allPandals);

    loadYears();

}

/* =====================================================
   9. LOAD AVAILABLE YEARS
===================================================== */

function loadYears() {

    if (!yearSelect) return;

    const years = new Set([
        "2025",
        "2026",
        "2027",
        "2028",
        "2029"
    ]);

    allPandals.forEach(pandal => {

        if (pandal.year) {
            years.add(String(pandal.year));
        }

    });

    const sortedYears = [...years].sort(
        (a, b) => Number(b) - Number(a)
    );

    yearSelect.replaceChildren();

    sortedYears.forEach(year => {

        const option = document.createElement("option");

        option.value = year;
        option.textContent = `🪔 ${year}`;

        yearSelect.appendChild(option);

    });

    const currentYear = String(new Date().getFullYear());

    if (years.has(currentYear)) {

        selectedYear = currentYear;

    } else {

        selectedYear = sortedYears[0];

    }

    yearSelect.value = selectedYear;

    displayPandals(selectedYear);

}

/* =====================================================
   10. DISPLAY PANDALS
===================================================== */

function displayPandals(year) {

    selectedYear = String(year);

    if (yearTitle) {
        yearTitle.textContent = `Durga Puja ${selectedYear}`;
    }

    if (searchInput) {
        searchInput.value = "";
    }

    renderPandals(pujaData[selectedYear] || []);

}

/* =====================================================
   11. RENDER PANDAL CARDS
===================================================== */

function renderPandals(pandals) {

    if (!pandalContainer || !pandalCount || !noResult) {
        return;
    }

    pandalContainer.replaceChildren();

    pandalCount.textContent =
        `${pandals.length} ${pandals.length === 1 ? "Pandal" : "Pandals"}`;

    if (pandals.length === 0) {

        showEmptyState(
            "✧",
            "Photos Coming Soon",
            `Pandal information for ${selectedYear} has not been added yet.`
        );

        return;
    }

    noResult.style.display = "none";

    const fragment = document.createDocumentFragment();

    pandals.forEach((pandal, index) => {

        const card = document.createElement("article");

        card.className = "pandal-card";
        card.tabIndex = 0;
        card.setAttribute("role", "button");

        card.setAttribute(
            "aria-label",
            `View ${pandal.name} details`
        );

        card.style.animationDelay =
            `${Math.min(index * 65, 500)}ms`;

        // Image wrapper

        const imageWrap = document.createElement("div");

        imageWrap.className = "card-image-wrap";

        const image = document.createElement("img");

        image.className = "pandal-image";
        image.alt = pandal.name;
        image.loading = "lazy";
        image.decoding = "async";

        image.src = pandal.image;

        image.addEventListener("error", () => {

            image.style.display = "none";

            imageWrap.classList.add("image-unavailable");

            const placeholder = document.createElement("div");

            placeholder.className = "image-placeholder";
            placeholder.textContent = "🪔";

            imageWrap.prepend(placeholder);

        }, { once: true });

        const shade = document.createElement("div");

        shade.className = "image-shade";
        shade.setAttribute("aria-hidden", "true");

        const badge = document.createElement("span");

        badge.className = "image-badge";
        badge.textContent = `PUJA ${selectedYear}`;

        imageWrap.append(image, shade, badge);

        // Card information

        const info = document.createElement("div");

        info.className = "card-info";

        const year = document.createElement("span");

        year.className = "card-year";
        year.textContent = `DURGA PUJA ${selectedYear}`;

        const name = document.createElement("h3");

        name.textContent = pandal.name;

        const place = document.createElement("p");

        place.className = "card-place";
        place.textContent = `📍 ${pandal.place}`;

        const details = document.createElement("span");

        details.className = "view-details";
        details.textContent = "Explore this pandal";

        info.append(year, name, place, details);

        card.append(imageWrap, info);

        card.addEventListener("click", () => {

            openModal(pandal);

        });

        card.addEventListener("keydown", event => {

            if (
                event.target === card &&
                (event.key === "Enter" || event.key === " ")
            ) {

                event.preventDefault();

                openModal(pandal);

            }

        });

        fragment.appendChild(card);

    });

    pandalContainer.appendChild(fragment);

    setupRevealAnimations();

}

/* =====================================================
   12. EMPTY STATE
===================================================== */

function showEmptyState(icon, title, message) {

    if (!pandalContainer || !noResult) return;

    pandalContainer.replaceChildren();

    noResult.replaceChildren();

    const iconElement = document.createElement("div");

    iconElement.className = "empty-icon";
    iconElement.textContent = icon;

    const heading = document.createElement("h3");

    heading.textContent = title;

    const paragraph = document.createElement("p");

    paragraph.textContent = message;

    noResult.append(
        iconElement,
        heading,
        paragraph
    );

    noResult.style.display = "block";

}

/* =====================================================
   13. YEAR CHANGE
===================================================== */

if (yearSelect) {

    yearSelect.addEventListener("change", () => {

        displayPandals(yearSelect.value);

    });

}

/* =====================================================
   14. LIVE SEARCH
===================================================== */

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const query = searchInput.value
            .toLocaleLowerCase()
            .trim();

        const pandals = pujaData[selectedYear] || [];

        const filtered = pandals.filter(pandal => {

            const searchableText = [

                pandal.name,
                pandal.place,
                pandal.description

            ].join(" ").toLocaleLowerCase();

            return searchableText.includes(query);

        });

        if (filtered.length === 0) {

            showEmptyState(
                "⌕",
                "No Pandal Found",
                "Try searching with another name or location."
            );

            if (pandalCount) {
                pandalCount.textContent = "0 Pandals";
            }

            return;
        }

        renderPandals(filtered);

    });

}

/* =====================================================
   15. PANDAL DETAILS MODAL
===================================================== */

function openModal(pandal) {

    if (
        !modal ||
        !modalImage ||
        !modalYear ||
        !modalName ||
        !modalPlace ||
        !modalDescription ||
        !mapButton
    ) {
        console.error("Modal HTML elements are missing!");
        return;
    }

    lastFocusedElement = document.activeElement;

    modalImage.src = pandal.image;
    modalImage.alt = pandal.name;

    modalImage.onerror = () => {
        modalImage.style.visibility = "hidden";
    };

    modalImage.onload = () => {
        modalImage.style.visibility = "visible";
    };

    modalYear.textContent = `DURGA PUJA ${pandal.year || selectedYear}`;

    modalName.textContent = pandal.name;

    modalPlace.textContent = `📍 ${pandal.place}`;

    modalDescription.textContent = pandal.description;

    mapButton.href = pandal.map;

    modal.classList.add("active");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    closeModalButton?.focus();

}

function closeModal() {

    if (!modal || !modal.classList.contains("active")) {
        return;
    }

    modal.classList.remove("active");

    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (
        lastFocusedElement &&
        lastFocusedElement.isConnected
    ) {

        lastFocusedElement.focus();

    }

}

closeModalButton?.addEventListener("click", closeModal);

modal?.addEventListener("click", event => {

    if (event.target === modal) {

        closeModal();

    }

});

/* =====================================================
   16. MODAL KEYBOARD ACCESSIBILITY
===================================================== */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();

    }

    if (
        event.key === "Tab" &&
        modal?.classList.contains("active") &&
        modalBox
    ) {

        const focusable = modalBox.querySelectorAll(
            'a[href], button:not([disabled]), [tabindex="0"]'
        );

        if (!focusable.length) return;

        const first = focusable[0];

        const last = focusable[focusable.length - 1];

        if (
            event.shiftKey &&
            document.activeElement === first
        ) {

            event.preventDefault();

            last.focus();

        } else if (
            !event.shiftKey &&
            document.activeElement === last
        ) {

            event.preventDefault();

            first.focus();

        }

    }

});

/* =====================================================
   17. MOBILE NAVIGATION
===================================================== */

function closeNavigation() {

    if (!mainNav || !menuToggle) return;

    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
    );

}

menuToggle?.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.textContent = isOpen ? "×" : "☰";

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );

});

mainNav?.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        if (!link.closest(".nav-dropdown-content")) {
            closeNavigation();
        }

    });

});

/* =====================================================
   18. MOBILE DROPDOWN
===================================================== */

if (mobileDropBtn && mobileDropdown) {

    mobileDropBtn.addEventListener("click", event => {

        if (window.innerWidth <= 680) {

            event.preventDefault();

            const isOpen =
                mobileDropdown.classList.toggle("mobile-open");

            mobileDropBtn.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }

    });

}

/* =====================================================
   19. CLOSE MENU OUTSIDE CLICK
===================================================== */

document.addEventListener("click", event => {

    if (
        mainNav?.classList.contains("open") &&
        !mainNav.contains(event.target) &&
        !menuToggle?.contains(event.target)
    ) {

        closeNavigation();

        mobileDropdown?.classList.remove("mobile-open");

        mobileDropBtn?.setAttribute("aria-expanded", "false");

    }

});

/* =====================================================
   20. WINDOW RESIZE
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 680) {

        closeNavigation();

        mobileDropdown?.classList.remove("mobile-open");

        mobileDropBtn?.setAttribute("aria-expanded", "false");

    }

});

/* =====================================================
   21. SCROLL EFFECTS
===================================================== */

function updateScrollEffects() {

    const scrollTop = window.scrollY;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollableHeight > 0
        ? (scrollTop / scrollableHeight) * 100
        : 0;

    if (scrollProgress) {

        scrollProgress.style.width = `${progress}%`;

    }

    siteHeader?.classList.toggle(
        "scrolled",
        scrollTop > 30
    );

    backToTop?.classList.toggle(
        "visible",
        scrollTop > 450
    );

}

window.addEventListener(
    "scroll",
    updateScrollEffects,
    { passive: true }
);

backToTop?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =====================================================
   22. SCROLL REVEAL ANIMATIONS
===================================================== */

function setupRevealAnimations() {

    const revealItems = document.querySelectorAll(".reveal");

    if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        !("IntersectionObserver" in window)
    ) {

        revealItems.forEach(item => {

            item.classList.add("is-visible");

        });

        return;

    }

    if (!revealObserver) {

        revealObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.12,

            rootMargin: "0px 0px -35px 0px"

        });

    }

    revealItems.forEach(item => {

        if (!item.classList.contains("is-visible")) {

            revealObserver.observe(item);

        }

    });

}

/* =====================================================
   23. INITIALIZE WEBSITE
===================================================== */

function initializeWebsite() {

    if (copyrightYear) {

        copyrightYear.textContent = new Date().getFullYear();

    }

    loadPandalsFromCloud();

    setupRevealAnimations();

    updateScrollEffects();

    console.log("Malihati Durga Puja website initialized.");

}

/* =====================================================
   24. START WEBSITE
===================================================== */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        initializeWebsite,
        { once: true }
    );

} else {

    initializeWebsite();

}